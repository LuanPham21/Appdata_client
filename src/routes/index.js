import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  //Home Page
  {
    path: "",
    element: lazy(() => import("./../containers/Home/")),
    nested: [
      {
        path: "",
        element: lazy(() => import("./../containers/AuthPage/TingWorkPage")),
      },
      {
        path: "homepage",
        element: lazy(() => import("../containers/Home/HomePage")),
      },
      {
        path: "messpage",
        element: lazy(() => import("../containers/Home/MessPage")),
      },
      {
        path: "personalpage",
        element: lazy(() => import("../containers/Home/PersonalPage")),
      },
      {
        path: "mewpage",
        element: lazy(() => import("../containers/Home/Mew")),
      },
    ],
  },
  // Auth Page
  {
    path: "auth",
    element: lazy(() => import("./../containers/AuthPage")),
    nested: [
      {
        path: "login/:id",
        element: lazy(() => import("./../containers/AuthPage/LoginPage")),
      },
      {
        path: "register",
        element: lazy(() => import("./../containers/AuthPage/RegisPage")),
      },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={route.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export { renderRoutes };
