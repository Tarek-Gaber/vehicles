import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { AnimatedPage } from "../components/AnimatedPage";
import { ThemeSwitcherDemo } from "../components/ThemeSwitcherDemo";
import { AnimationsDemo } from "../components/AnimationsDemo";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "../lib/animations";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <AnimatedPage className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative">
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

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          variants={staggerContainerVariants}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={staggerItemVariants}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Welcome to Our Platform
          </motion.h1>
          <motion.p
            variants={staggerItemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Manage your workflows efficiently with our powerful dashboard
          </motion.p>
          <motion.div
            variants={staggerItemVariants}
            className="flex gap-4 justify-center"
          >
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
          </motion.div>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 my-10">
        <motion.div variants={staggerItemVariants}>
          <ThemeSwitcherDemo />
        </motion.div>

        <motion.div variants={staggerItemVariants}>
          <AnimationsDemo />
        </motion.div>
      </div>
    </AnimatedPage>
  );
}
