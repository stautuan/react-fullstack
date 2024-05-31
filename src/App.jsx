import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Books from "./pages/Books";
import About from "./pages/About";
import BookInfo from "./pages/BookInfo";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "books",
        element: <Books />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "books/:bookId",
        element: <BookInfo />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
