
import { useState } from "react";
import { Menu, X, Settings, User, Bell } from "lucide-react";

interface HeaderProps {
  focusMode: boolean;
}

export const Header = ({ focusMode }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      focusMode 
        ? 'bg-slate-800/95 backdrop-blur-sm border-slate-700' 
        : 'bg-white/95 backdrop-blur-sm border-gray-200'
    } border-b`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
              focusMode ? 'bg-amber-500 text-slate-900' : 'bg-slate-800 text-white'
            }`}>
              FN
            </div>
            <span className={`text-xl font-bold ${
              focusMode ? 'text-white' : 'text-slate-800'
            }`}>
              FlowNest
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className={`font-medium hover:text-amber-500 transition-colors ${
              focusMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Dashboard
            </a>
            <a href="#" className={`font-medium hover:text-amber-500 transition-colors ${
              focusMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Flow Zones
            </a>
            <a href="#" className={`font-medium hover:text-amber-500 transition-colors ${
              focusMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Analytics
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
              focusMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-600'
            }`}>
              <Bell size={18} />
            </button>
            <button className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
              focusMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-600'
            }`}>
              <Settings size={18} />
            </button>
            <button className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
              focusMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-600'
            }`}>
              <User size={18} />
            </button>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors ${
                focusMode ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-600'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${
            focusMode ? 'border-slate-700' : 'border-gray-200'
          }`}>
            <nav className="flex flex-col space-y-3">
              <a href="#" className={`font-medium hover:text-amber-500 transition-colors ${
                focusMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Dashboard
              </a>
              <a href="#" className={`font-medium hover:text-amber-500 transition-colors ${
                focusMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Flow Zones
              </a>
              <a href="#" className={`font-medium hover:text-amber-500 transition-colors ${
                focusMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Analytics
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
