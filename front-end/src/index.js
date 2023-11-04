import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Quote from './Pages/Quote/Quote';
import Items from './Pages/Items/Items';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Billing from './Pages/Products/Invoices/Billing Invoice/Billing-Invoice';
import Cash from './Pages/Products/Invoices/Cash Invoice/Cash-Invoice';
import Sales from './Pages/Products/Invoices/Sales Invoice/Sales-Invoice';
import Collection from './Pages/Products/Receipts/Collection Receipts/Collection-Receipt';
import Official from './Pages/Products/Receipts/Official Receipts/Official-Receipt';
import Delivery from './Pages/Products/Receipts/Delivery Receipts/Delivery-Receipt';
import Forms from './Pages/Products/Forms/Forms';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "quote",
    element: <Quote />,
  },
  {
    path: "items",
    element: <Items />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "billing-invoice",
    element: <Billing />,
  },
  {
    path: "cash-invoice",
    element: <Cash />,
  },
  {
    path: "sales-invoice",
    element: <Sales />,
  },
  {
    path: "collection-receipt",
    element: <Collection/>,
  },
  {
    path: "official-receipt",
    element: <Official/>,
  },
  {
    path: "delivery-receipt",
    element: <Delivery/>,
  },
  {
    path: "forms",
    element: <Forms/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
