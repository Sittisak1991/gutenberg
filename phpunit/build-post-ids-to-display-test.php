<?php

/**
 * Test the build_post_ids_to_display function.
 *
 * @package Gutenberg
 */
class SortIdsByHierarchyTest extends WP_UnitTestCase {

	/*
	 * Keep this updated as the input array changes.
	 * The sorted hierarchy would be as follows:
	 *
	 * 2
	 * - 3
	 * -- 5
	 * -- 6
	 * - 4
	 * -- 7
	 * 8
	 * - 9
	 * -- 11
	 * - 10
	 *
	 */
	private $input = array(
		array(
			'ID' => 11,
			'post_parent' => 9,
		),
		array(
			'ID' => 2,
			'post_parent' => 0,
		),
		array(
			'ID' => 8,
			'post_parent' => 0,
		),
		array(
			'ID' => 3,
			'post_parent' => 2,
		),
		array(
			'ID' => 5,
			'post_parent' => 3,
		),
		array(
			'ID' => 7,
			'post_parent' => 4,
		),
		array(
			'ID' => 9,
			'post_parent' => 8,
		),
		array(
			'ID' => 4,
			'post_parent' => 2,
		),
		array(
			'ID' => 6,
			'post_parent' => 3,
		),
		array(
			'ID' => 10,
			'post_parent' => 8,
		),
	);

	public function test_return_all_post_ids() {
		$output = sort_ids_by_hierarchy( $this->input );
		$this->assertEquals( array( 2, 3, 5, 6, 4, 7, 8, 9, 11, 10 ), $output );
	}

	public function test_return_first_page() {
		$output = sort_ids_by_hierarchy( $this->input, array(
			'posts_per_page' => 3,
			'paged'          => 1,
		) );
		$this->assertEquals( array( 2, 3, 5 ), $output );
	}
}
