import { useAuth } from "../hooks";
import { Button } from "../components/ui/button";
import { useLogout } from "../api/queries/auth";
import { Link } from "react-router";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function DashboardPage() {
  const { user, role } = useAuth();
  const logout = useLogout();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <LanguageSwitcher />
          <Button onClick={() => logout.mutate()} variant="outline">
            Logout
          </Button>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Role:</strong>{" "}
              <span className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded">
                {role}
              </span>
            </p>
            <p>
              <strong>Admin:</strong>{" "}
              <Link to="/admin" className="underline">
                Go to Admin
              </Link>
            </p>
          </div>
        </div>

        <div className="p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Access Level</h3>
          <p>
            You are viewing the general dashboard accessible to all
            authenticated users.
          </p>
        </div>
      </div>
    </div>
  );
}
