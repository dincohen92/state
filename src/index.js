import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Work from './Work';
import Contact from './Contact';
import Members from './Members';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <App/>,
  },
  {
    path: "/work",
    element: <Work/>,
  },
  {
    path: "/members",
    element: <Members/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
