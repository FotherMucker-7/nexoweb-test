import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Process = lazy(() => import("./pages/Process").then(m => ({ default: m.Process })));
const Projects = lazy(() => import("./pages/Projects").then(m => ({ default: m.Projects })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const BlogIndex = lazy(() => import("./pages/BlogIndex").then(m => ({ default: m.BlogIndex })));
const BlogDetail = lazy(() => import("./pages/BlogDetail").then(m => ({ default: m.BlogDetail })));
const Privacy = lazy(() => import("./pages/Privacy").then(m => ({ default: m.Privacy })));

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
      { path: "privacidad", Component: Privacy },
    ],
  },
]);
