import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import About from "./routes/About";
import Post, { postLoader } from "./routes/Post";
import Home, { fetch } from "./routes/Home";
import NewPost from "./routes/NewPost";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: fetch,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/new",
          element: <NewPost />,
        },
        {
          path: "/post/:id",
          element: <Post />,
          loader: postLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
