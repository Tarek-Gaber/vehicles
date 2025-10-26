import { Link, Outlet } from "react-router";

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Logo
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between text-sm text-muted-foreground">
          {/* Copyright */}
          <div>© 2024 Company Name. All rights reserved.</div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
