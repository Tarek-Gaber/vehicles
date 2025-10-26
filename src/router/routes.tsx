import { createBrowserRouter, Navigate } from "react-router";
import { ProtectedRoute } from "./ProtectedRoute";

// Layouts
import { SiteLayout } from "@/layouts/SiteLayout";
import { AdminLayout } from "@/layouts/AdminLayout";

// Pages
import { LoginPage } from "@/pages";
import { OpportunitiesPage, OpportunityDetailsPage } from "@/pages";
import { DashboardPage } from "@/pages";

export const router = createBrowserRouter([
  // Site routes - public pages
  {
    element: <SiteLayout />,
    children: [
      {
        path: "/",
        element: <OpportunitiesPage />,
      },
      {
        path: "/opportunities",
        element: <OpportunitiesPage />,
      },
      {
        path: "/opportunities/:id",
        element: <OpportunityDetailsPage />,
      },
    ],
  },

  // Auth routes - login, signup, password reset
  {
    path: "/login",
    element: <LoginPage />,
  },

  // Admin routes - protected, admin only
  {
    element: (
      <ProtectedRoute roles="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <DashboardPage />,
      },
    ],
  },

  // Fallback
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
