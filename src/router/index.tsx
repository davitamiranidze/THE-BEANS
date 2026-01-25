import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MainLayout from "@/components/layout/MainLayout";
import ShopPage from "../pages/ShopPage/ShopPage";
import NotFound from "../pages/NotFoundPage/NotFoundPage";
import AuthLayout from "@/components/layout/AuthLayout";
import SignUpPage from "@/features/auth/pages/SignUpPage/SignUpPage";
import LoginPage from "@/features/auth/pages/LoginPage/LoginPage";
import VerifyEmailPage from "@/features/auth/pages/VerifyEmailPage/VerifyEmailPage";
import AuthCallbackPage from "@/features/auth/pages/AuthCallbackPage/AuthCallbackPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage/ResetPasswordPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/signup", element: <SignUpPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/verify-email", element: <VerifyEmailPage /> },
      { path: "/auth/callback", element: <AuthCallbackPage /> },
      { path: "/reset-password", element: <ResetPasswordPage /> },
      { path: "/forgot-password", element: <ForgotPasswordPage /> },
    ],
  },

  // ✅ REAL 404 (matches anything not matched above)
  { path: "*", element: <NotFound /> },
]);
