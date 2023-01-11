import SearchPage from '../containers/search/SearchPage';
import BookmarkPage from '../containers/bookmark/BookmarkPage';
const Routes = [
    {
        path: '/',
        component: SearchPage,
        exact: true
    },
    {
        path: '/bookmark',
        component: BookmarkPage,
        exact: true
    }
];

export default Routes;
