import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Books from "./pages/Books";
import About from "./pages/About";
import BookInfo from "./pages/BookInfo";
import Error from "./pages/Error";

import { loader as featuredBooksLoader } from "./components/BookList";
import { loader as booksLoader } from "./pages/Books";
import { loader as bookInfoLoader } from "./pages/BookInfo";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: featuredBooksLoader,
      },
      {
        path: "books",
        element: <Books />,
        loader: booksLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "books/:id",
        element: <BookInfo />,
        loader: bookInfoLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
