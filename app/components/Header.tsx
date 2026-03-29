'use client';

import Link from 'next/link';
import { useState, useSyncExternalStore } from 'react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';
import SearchDialog from './SearchDialog';
import { usePathname } from 'next/navigation';

// Hook to detect if we're on client side (fixes hydration mismatch)
function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isClient = useIsClient();
  const pathname = usePathname();

  // Handle mobile menu and dialog together
  const handleSearchOpen = () => {
    setIsDialogOpen(true);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return pathname?.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/components/application"
                className={`transition-colors font-medium ${
                  isClient && isActive('/components/application')
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Application
              </Link>
              <Link
                href="/components/marketing"
                className={`transition-colors font-medium ${
                  isClient && isActive('/components/marketing')
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Marketing
              </Link>
            </nav>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => setIsDialogOpen(true)}
              className="hidden sm:block relative w-64 px-4 py-2 pl-10 rounded-xl glass-button text-sm hover:ring-primary/50 transition-all text-left text-muted-foreground"
              aria-label="Search components"
            >
              Search components...
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass-button"
              aria-label="Toggle theme"
            >
              {!isClient ? (
                // Placeholder during SSR to prevent hydration mismatch
                <div className="w-5 h-5" />
              ) : theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            {/* GitHub Link */}
            <Link
              href="https://github.com/rayasabari/joko-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-button hidden sm:block"
              aria-label="View on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl glass-button md:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              <Link
                href="/components/application"
                className={`px-4 py-2 rounded-xl hover:bg-secondary transition-colors font-medium ${
                  isClient && isActive('/components/application') ? 'bg-secondary' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Application Components
              </Link>
              <Link
                href="/components/marketing"
                className={`px-4 py-2 rounded-xl hover:bg-secondary transition-colors font-medium ${
                  isClient && isActive('/components/marketing') ? 'bg-secondary' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Marketing Components
              </Link>
            </nav>
            {/* Mobile Search */}
            <button
              onClick={handleSearchOpen}
              className="mt-4 mx-4 w-[calc(100%-2rem)] px-4 py-2 rounded-xl glass-button text-sm hover:ring-2 hover:ring-primary/50 transition-all text-left text-muted-foreground"
              aria-label="Search components"
            >
              Search components...
            </button>
          </div>
        )}
      </div>

      {/* Component Search Dialog */}
      <SearchDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </header>
  );
}