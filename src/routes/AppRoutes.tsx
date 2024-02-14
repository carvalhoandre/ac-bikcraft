import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";

let router = createBrowserRouter([
  {
    path: "/",
    // TODO: implements loader
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <Home />;
    },
  },
  {
    path: "/*",
    Component() {
      // TODO: implements not found page
      return <p>404: Not Found</p>;
    },
  },
]);

export default function App() {
  // TODO: implements loader
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
