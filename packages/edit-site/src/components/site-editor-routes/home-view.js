/**
 * Internal dependencies
 */
import SidebarNavigationScreenMain from '../sidebar-navigation-screen-main';
import { HomeViewPreview } from '../home-view-preview';

export const homeViewRoute = {
	name: 'home-view',
	match: ( params ) => {
		return params.canvas !== 'edit';
	},
	areas: {
		sidebar: <SidebarNavigationScreenMain />,
		preview: <HomeViewPreview />,
		mobile: <HomeViewPreview />,
	},
};
