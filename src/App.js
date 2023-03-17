import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Sigle from "./pages/Sigle"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is Home Page!!</div>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
