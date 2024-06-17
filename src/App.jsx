import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
import BookInfo from "./pages/BookInfo";
import Error from "./pages/Error";
import Likes from "./pages/Likes";
import Cart from "./pages/Cart";

import { loader as featuredBooksLoader } from "./components/BookList";
import { loader as booksLoader } from "./pages/Books";
import { loader as bookInfoLoader } from "./pages/BookInfo";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        loader: featuredBooksLoader,
      },
      {
        path: "books",
        element: <Books />,
        errorElement: <Error />,
        loader: booksLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "books/:id",
        element: <BookInfo />,
        errorElement: <Error />,
        loader: bookInfoLoader,
      },
      {
        path: "likes",
        element: <Likes />,
        errorElement: <Error />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
