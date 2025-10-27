import { createBrowserRouter, Navigate } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";
import { ConditionalRoute } from "./ConditionalRoute";

import LoginPage from "../pages/Auth/LoginPage";
import SignupPage from "@/pages/Auth/SignUpPage";
import ForgotPasswordPage from "@/pages/Auth/ForgotPasswordPage";
import ResetpasswordPage from "@/pages/Auth/ResetPasswordPage";


import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";
import { AdminPage } from "../pages/AdminPage";
import { UnauthorizedPage } from "../pages/UnauthorizedPage";
import DraftPage from "@/pages/DraftPage";
import { Login } from "@/pages/Login";

import AuthLayout from "@/components/layout/authLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ConditionalRoute
        authenticatedElement={<DashboardPage />}
        unauthenticatedElement={<LandingPage />}
      />
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute roles="admin">
        <AdminPage />
      </ProtectedRoute>
    ),
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "reset-password",
        element: <ResetpasswordPage />,
      },
    ],
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/drafts",
    element: <DraftPage />,
  },
  {
    path: "/login2",
    element: <Login />,
  },
]);
