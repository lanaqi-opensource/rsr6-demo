import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './Root';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import DeniedPage from './pages/denied';
import SignaturePage from './pages/signature';
import HelloPage from './pages/hello';
import SheetPage from './pages/sheet';
import BlockPage from './pages/block';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/hello',
        element: <HelloPage />,
      },
      {
        path: '/sheet',
        element: <SheetPage />,
      },
      {
        path: '/block',
        element: <BlockPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/logout',
        element: <LogoutPage />,
      },
      {
        path: '/denied',
        element: <DeniedPage />,
      },
      {
        path: '/signature',
        element: <SignaturePage />,
      },
    ],
  },
]);

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
