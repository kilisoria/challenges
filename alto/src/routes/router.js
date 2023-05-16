import React from "react";

import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";

import PostsPage from "../pages/posts";
import PostPage from "../pages/posts/post";
import PostViewPage from "../pages/posts/postView";

import ErrorPage from "../pages/error/";

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
   {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/post/:postId/view",
    element: <PostViewPage />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
]);

export default router;
