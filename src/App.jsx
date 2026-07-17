import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layoutlar
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";

// Sahifalar (Public)
import Home from "./pages/public/Home";
import Posts from "./pages/public/Posts";
import PostsDetail from "./pages/public/PostsDetail";
import ErrorPage from "./pages/public/ErrorPage";

// Sahifalar (Admin)
import Dashboard from "./pages/admin/Dashboard";
import CreatePost from "./pages/admin/CreatePost";
import UpdatePost from "./pages/admin/UpdatePost";

// Login Page
import LoginPage from "./pages/auth/LoginPage";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <Home />, // Home sahifasi
        },
        {
          path: "posts", // /posts
          element: <Posts />, // Posts sahifasi
        },
        {
          path: "posts/:id", // /posts/:id
          element: <PostsDetail />, // PostsDetail sahifasi
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />, // Dashboard sahifasi
        },
        {
          path: "createpost", // /admin/create-post
          element: <CreatePost />, // CreatePost sahifasi
        },
        {
          path: "updatepost", // /admin/update-post
          element: <UpdatePost />, // UpdatePost sahifasi
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />, // ErrorPage sahifasi
    },
    {
      path: "/login",
      element: <LoginPage />, // LoginPage sahifasi
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
