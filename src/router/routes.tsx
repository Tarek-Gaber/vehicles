import { createBrowserRouter, Navigate } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";
import { ConditionalRoute } from "./ConditionalRoute";
import  LoginPage  from "../pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";
import { AdminPage } from "../pages/AdminPage";
import { UnauthorizedPage } from "../pages/UnauthorizedPage";
import DraftPage from "@/pages/DraftPage";
import { Login } from "@/pages/Login";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
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
    path: "/login",
    element: <LoginPage />,
  },
   {
    path: "/signup",
    element: <SignupPage />,
  },
   {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
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
    element:  <DraftPage />
  },
  {
    path: "/login2",
    element:  <Login />

  }
]);
