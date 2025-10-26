import { useState } from "react";
import { motion } from "framer-motion";
import { useLogin } from "../api/queries/auth";
import { Button } from "../components/ui/button";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { AnimatedPage } from "../components/AnimatedPage";
import { staggerContainerVariants, staggerItemVariants } from "../lib/animations";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate({ email, password });
  };

  return (
    <AnimatedPage className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Header with theme and language switchers */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-4 right-4 flex items-center gap-2"
      >
        <ThemeSwitcher />
        <LanguageSwitcher />
      </motion.div>

      <motion.div
        variants={staggerContainerVariants}
        initial="initial"
        animate="animate"
        className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-md"
      >
        <motion.h1
          variants={staggerItemVariants}
          className="text-2xl font-bold text-center text-foreground"
        >
          Login
        </motion.h1>
        <motion.form
          variants={staggerItemVariants}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button type="submit" className="w-full" disabled={login.isPending}>
              {login.isPending ? "Logging in..." : "Login"}
            </Button>
          </motion.div>
          {login.isError && (
            <p className="text-sm text-red-600">
              Login failed. Please check your credentials.
            </p>
          )}
        </motion.form>
        <motion.p
          variants={staggerItemVariants}
          className="text-sm text-muted-foreground text-center"
        >
          Use any email/password for demo (mock login)
        </motion.p>
      </motion.div>
    </AnimatedPage>
  );
}


