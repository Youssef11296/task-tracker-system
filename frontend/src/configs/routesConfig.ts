// pages
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PackagesPage from "../pages/PackagesPage";
import SettingsPage from "../pages/SettingsPage";
import TasksPage from "../pages/TasksPage";
import RolesPage from "../pages/admin/RolesPage";
import UsersPage from "../pages/admin/UsersPage";

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
    path: "/admin/users",
    Page: UsersPage,
  },
  {
    path: "/admin/roles",
    Page: RolesPage,
  },
  {
    path: "*",
    Page: NotFoundPage,
  },
];
