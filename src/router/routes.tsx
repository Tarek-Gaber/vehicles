import { createBrowserRouter, Navigate } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";
import { ConditionalRoute } from "./ConditionalRoute";

import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignUpPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import ResetpasswordPage from "@/pages/auth/ResetPasswordPage";

import { DashboardPage } from "@/pages/DashboardPage";
import { OpportunitiesPage } from "@/pages/site/OpportunitiesPage";
import { AdminPage } from "@/pages/AdminPage";
import { UnauthorizedPage } from "@/pages/UnauthorizedPage";
import DraftPage from "@/pages/DraftPage";
import { Login } from "@/pages/Login";

import AuthLayout from "@/components/layout/authLayout";
import { SiteLayout } from "@/layouts/SiteLayout";
export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      {
        path: "/",
        element: (
          <ConditionalRoute
            authenticatedElement={<DashboardPage />}
            unauthenticatedElement={<OpportunitiesPage />}
          />
        ),
      },
    ],
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
