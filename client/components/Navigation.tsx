import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, Trophy, Search, Plus, Info, User } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Inicio", icon: Trophy },
    { href: "/tournaments", label: "Buscar Torneos", icon: Search },
    { href: "/create", label: "Crear Torneo", icon: Plus },
    { href: "/about", label: "Acerca de", icon: Info },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-tournament-black border-b border-tournament-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tournament-red rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl">TourneyPro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-tournament-red bg-tournament-gray-900"
                      : "text-tournament-gray-300 hover:text-white hover:bg-tournament-gray-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="sm"
              className="border-tournament-red text-tournament-red hover:bg-tournament-red hover:text-white"
            >
              <User className="w-4 h-4 mr-2" />
              Iniciar Sesión
            </Button>
            <Button
              size="sm"
              className="bg-tournament-red hover:bg-tournament-red-dark text-white"
            >
              Registrarse
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-tournament-gray-800"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-tournament-gray-900 rounded-lg mt-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? "text-tournament-red bg-tournament-gray-800"
                        : "text-tournament-gray-300 hover:text-white hover:bg-tournament-gray-800"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2">
                <div className="px-3">
                  <LanguageSwitcher />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-tournament-red text-tournament-red hover:bg-tournament-red hover:text-white"
                >
                  <User className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-tournament-red hover:bg-tournament-red-dark text-white"
                >
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
