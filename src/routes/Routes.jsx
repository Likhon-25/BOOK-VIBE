import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/Books";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: ()=> fetch('/booksData.json')
      }
    ],

    errorElement: <ErrorPage />
  },
  
]);