import { router } from "./router";
import { useAuthListener } from "./features/auth/hooks/useAuthListener";
import { RouterProvider } from "react-router-dom";

export default function AppBootstrap() {
  useAuthListener();
  return <RouterProvider router={router} />;
}
