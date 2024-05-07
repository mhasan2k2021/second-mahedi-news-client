import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../../components/pages/Home/Home";
import Category from "../../components/pages/category/Category";
import News from "../../components/pages/News/News";
import LogIn from "../../components/pages/LogIn/LogIn";
import SignUp from "../../components/pages/SignUp/signUp";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
