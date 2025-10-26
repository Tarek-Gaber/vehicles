import { Outlet } from "react-router";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background">
        {/* Sidebar content placeholder */}
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b bg-background">
          <div className="px-6 py-4 flex items-center justify-end gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
