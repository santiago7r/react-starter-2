import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Layout from './Layout';
import UserDetailPage from './UserDetailPage';
import UserList from './UserList';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'users', element: <UserList /> },
            { path: 'users/:id', element: <UserDetailPage /> },
        ]
    }

]);

export default router;