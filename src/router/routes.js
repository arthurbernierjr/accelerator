import Home from '../pages/Home';
import Lesson from '../pages/Lesson';
import Mod from '../pages/Mod';
import Type from '../pages/Type'

const routes = [
	{
		Component: Lesson,
		key: 'Lesson',
		path: '/lesson/:postSlug'
	},
	{
		Component: Type,
		key: 'Type',
		path: '/type/:type'
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
