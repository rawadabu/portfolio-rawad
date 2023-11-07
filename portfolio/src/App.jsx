import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import About from "./features/about/About";
import Project from "./features/projects/Project";
import Contact from "./features/contact/Contact";
import Skills from "./features/skills/Skills";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
