import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Process } from "./pages/Process";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogDetail } from "./pages/BlogDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "process", Component: Process },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
      { path: "blog", Component: BlogIndex },
      { path: "blog/:slug", Component: BlogDetail },
    ],
  },
]);
