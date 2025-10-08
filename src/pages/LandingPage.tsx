import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative">
      {/* Header with theme and language switchers */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
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
    </div>
  );
}
