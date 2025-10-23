import { createBrowserRouter, Navigate } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";
import { ConditionalRoute } from "./ConditionalRoute";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { LandingPage } from "../pages/LandingPage";
import { AdminPage } from "../pages/AdminPage";
import { UnauthorizedPage } from "../pages/UnauthorizedPage";
import DraftPage from "@/pages/DraftPage";
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
  }
]);
