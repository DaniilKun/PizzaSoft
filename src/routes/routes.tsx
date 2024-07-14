import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import EmployeePage from '../pages/employeePage/EmployeePage';
import ErrorPage from '../pages/errorPage/ErrorPage';
import Layout from '../layout/Layout';
import AddEmployeePage from '../pages/addEmployeePage/AddEmployeePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'employee/:id',
        element: <EmployeePage />,
      },
      {
        path: 'new-employee',
        element: <AddEmployeePage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
