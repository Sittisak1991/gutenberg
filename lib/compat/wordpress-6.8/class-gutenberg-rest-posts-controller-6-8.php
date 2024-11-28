<?php
/**
 * A custom REST server for Gutenberg.
 *
 * @package gutenberg
 * @since   6.8.0
 */

add_filter( 'rest_page_collection_params', function ( $params ) {
	$params['orderby_hierarchy'] = array(
		'description' => 'Sort pages by hierarchy.',
		'type'        => 'boolean',
		'default'     => false,
	);
	return $params;
} );

add_filter( 'rest_page_query', function ( $args, $request ) {
	if ( $request['orderby_hierarchy'] ) {
		// Build the list of post ids to be displayed.
		$new_args = array_merge( $args, array(
			'fields'         => 'id=>parent',
			'posts_per_page' => -1,
		) );
		$query    = new WP_Query( $new_args );
		$posts    = $query->posts;
		$post_ids = sort_ids_by_hierarchy( $posts, $args );

		// Reconfigure the args to display only the ids in the list.
		$args['paged'] = 1;
		$args['post__in'] = $post_ids;
	}
	return $args;
}, 10, 2 );

/**
 * Sort the post ids by hierarchy.
 *
 * @param array $posts The posts to sort.
 * @param array $args  The arguments to sort the posts by.
 * @return array The sorted post ids.
 */
function sort_ids_by_hierarchy( $posts, $args = array() ) {
	/**
	 * $posts is:
	 * [
	 *   ['ID' => 2, 'post_parent' => 0],
	 *   ['ID' => 3, 'post_parent' => 2],
	 *   ['ID' => 4, 'post_parent' => 2],
	 * ]
	 *
	 * $args is:
	 * [
	 *   'posts_per_page' => 20,
	 *   'paged' => 1,
	 * ]
	 */
	if ( isset( $args['posts_per_page'] ) && $args['posts_per_page'] === 0 ) {
		return array();
	}

	$per_page = isset( $args['posts_per_page'] ) && is_int( $args['posts_per_page'] ) ? $args['posts_per_page'] : -1;
	$page     = isset( $args['paged'] ) && is_int( $args['paged'] ) ? $args['paged'] : 1;
	$start    = 0;
	$end      = count( $posts );
	if ( $per_page > 0 ) {
		$start    = ( $page - 1 ) * $per_page;
		$end      = $start + $per_page;
	}

	/*
	 * Arrange pages in two arrays:
	 *
	 * - $top_level: posts whose parent is 0
	 * - $parent_children: post ID as the key and an array of children post IDs as the value.
	 *   Example: parent_children[10][] contains all sub-pages whose parent is 10.
	 *
	 */

	$top_level       = array();
	$parent_children = array();
	foreach ( $posts as $post ) {
		if ( $post->post_parent === 0 ) {
			$top_level[] = $post->ID;
		} else {
			$parent_children[ $post->post_parent ][] = $post->ID;
		}
	}

	$ids = array();
	$count = 0;
	add_hierarchical_ids( $ids, $top_level, $count, $start, $end, $parent_children );

	return $ids;
}

function add_hierarchical_ids( &$ids, $to_process, &$count, $start, $end, $parent_children ) {
	foreach ( $to_process as $id ) {
		if ( $count >= $start && $count < $end ) {
			$ids[] = $id;
		}
		$count++;

		if ( isset( $parent_children[ $id ] ) ) {
			add_hierarchical_ids( $ids, $parent_children[ $id ], $count, $start, $end, $parent_children );
		}
	}
}
