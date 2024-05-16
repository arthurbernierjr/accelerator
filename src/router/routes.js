import Home from '../pages/Home';
import Lesson from '../pages/Lesson';
import Mod from '../pages/Mod';

const routes = [
	{
		Component: Lesson,
		key: 'Lesson',
		path: '/lesson/:postSlug'
	},
	{
		Component: Mod,
		key: 'Mod',
		path: '/:mod'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
];

export default routes;
