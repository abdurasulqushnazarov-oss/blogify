import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";
import PostsDetail from "./pages/public/PostsDetail";
import Dashboard from "./pages/admin/Dashboard";
import Posts from "./pages/public/Posts";
import Home from "./pages/public/Home";
import CreatePost from "./pages/admin/CreatePost";
import UpdatePost from "./pages/admin/UpdatePost";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/public/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Posts",
          element: <Posts />,
        },
        {
          path: "/Posts/:id",
          element: <PostsDetail />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "CreatePost",
          element: <CreatePost />,
        },
        {
          path: "UpdatePost",
          element: <UpdatePost />,
        },
      ],
    },

    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
