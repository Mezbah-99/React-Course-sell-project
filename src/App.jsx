import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Layout/Main";
import About from "./Components/About/About";
import Error from "./Components/Layout/Error";
import { useToggleContext } from "./Hooks/useToggle";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  const { mode } = useToggleContext();
  return (
    <>
      <div className={mode ? mode : ""}>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
