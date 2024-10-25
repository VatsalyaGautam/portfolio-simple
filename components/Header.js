import { Sun, Moon } from "lucide-react";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-pacifico">
          Vatsalya Gautam : Pre-Final Yearite
        </h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-purple-900 transition-colors duration-300"
        >
          {darkMode ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>
      </nav>
    </header>
  );
}
