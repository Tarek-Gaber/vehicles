import { createBrowserRouter } from "react-router";
import App from "../App";
// import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // Example protected route structure:
  // {
  //   path: "/dashboard",
  //   element: (
  //     <ProtectedRoute>
  //       <DashboardPage />
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
]);
