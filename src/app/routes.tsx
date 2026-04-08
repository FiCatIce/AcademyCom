import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Program } from "./pages/Program";
import { Registration } from "./pages/Registration";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "profile", Component: Profile },
      { path: "program", Component: Program },
      { path: "registration", Component: Registration },
      { path: "contact", Component: Contact },
    ],
  },
]);
