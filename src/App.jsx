import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import About from "./features/about/About";
import { loadSections as sectionsLoader } from "./features/projects/Projects";
import Contact from "./features/contact/Contact";
import ProjectsView, {
  loader as reposLoader,
} from "./features/projects/ProjectsView";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: sectionsLoader,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects-view",
        element: <ProjectsView />,
        loader: reposLoader,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
