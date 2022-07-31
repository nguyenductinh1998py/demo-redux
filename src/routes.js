import Home from './components/home';
import Dashboard from './components/dasboard';
import Error from './components/Error';

const Routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/dashboard',
        exact: false,
        main: () => <Dashboard />
    },
    {
        path: '/:somestring',
        exact: false,
        main: () => <Error />
    }
]

export default Routes;