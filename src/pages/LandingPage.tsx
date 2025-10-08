import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Manage your workflows efficiently with our powerful dashboard
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate("/login")}
            className="px-8"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/login")}
            className="px-8"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
