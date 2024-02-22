// Libraries

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Dependencies
import HomePage from "../pages/HomePage";
import SelectCategories from "../pages/SelectCategories";
import ErrorPage from "../pages/ErrorPage";
import GiftCatalog from "../pages/GiftCatalog";
import CollectionPage from "../pages/CollectionPage";
import SelectedCategory from "../components/SelectedCategory";
import GiftWrapPage from "../pages/GiftWrap";
import Checkout from "../pages/Checkout";
import Quiz from "../components/Quiz";
import Scheduler from "../pages/Scheduler";
import GiftQuiz from "../pages/GiftQuiz";
import Decision from "../components/Decision";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/gift",
      element: <GiftCatalog />,
    },
    {
      path: "/categories",
      element: <CollectionPage />,
    },
    {
      path: "/selected_categories",
      element: <SelectedCategory />,
    },
    {
      path: "/gift_wrap",
      element: <GiftWrapPage />,
    },
    {
      path: "/shopping_cart",
      element: <Checkout />,
    },
    {
      path: "/gift_quiz",
      element: <GiftQuiz />,
    },
    {
      path: "/scheduler",
      element: <Scheduler />,
    },
    {
      path: "/decision",
      element: <Decision />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
