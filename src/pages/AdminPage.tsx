import { useAuth } from "../hooks";
import { Button } from "../components/ui/button";
import { useLogout } from "../api/queries/auth";
import { Link } from "react-router";

export function AdminPage() {
  const { user } = useAuth();
  const logout = useLogout();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <Button onClick={() => logout.mutate()} variant="outlined" color="gray">
            Logout
          </Button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
          <p className="text-gray-600 mb-4">
            Welcome, {user?.name}! You have admin privileges.
          </p>
          <p>
            <strong>Dashboard:</strong> <Link to="/">Go to Dashboard</Link>
          </p>
        </div>

        <div className="p-6 bg-red-50 rounded-lg border-2 border-red-200">
          <h3 className="text-lg font-semibold mb-2 text-red-800">
            ⚠️ Restricted Area
          </h3>
          <p className="text-red-700">
            This page is only accessible to users with the ADMIN role.
          </p>
        </div>
      </div>
    </div>
  );
}
