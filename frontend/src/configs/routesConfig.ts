// pages
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PackagesPage from "../pages/PackagesPage";
import SettingsPage from "../pages/SettingsPage";
import TasksPage from "../pages/TasksPage";

export const ROUTES = [
  {
    path: "/",
    Page: HomePage,
  },
  {
    path: "/my-tasks",
    Page: TasksPage,
  },
  {
    path: "/about",
    Page: AboutPage,
  },
  {
    path: "/packages",
    Page: PackagesPage,
  },
  {
    path: "/user/settings",
    Page: SettingsPage,
  },
  {
    path: "*",
    Page: NotFoundPage,
  },
];
