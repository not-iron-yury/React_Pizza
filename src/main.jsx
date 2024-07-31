import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import NotFound from './pages/NotFound.jsx';
// import Cart from './pages/Cart.jsx';
// import Home from './pages/Home.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//         errorElement: <NotFound />,
//       },
//       {
//         path: '/cart',
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
