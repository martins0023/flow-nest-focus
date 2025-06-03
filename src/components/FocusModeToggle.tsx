
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

interface FocusModeToggleProps {
  focusMode: boolean;
  onToggle: (value: boolean) => void;
}

export const FocusModeToggle = ({ focusMode, onToggle }: FocusModeToggleProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    onToggle(!focusMode);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className={`p-6 rounded-xl transition-all duration-300 ${
      focusMode 
        ? 'bg-slate-800 border border-slate-700' 
        : 'bg-white border border-gray-200 shadow-sm'
    }`}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-lg font-semibold mb-1 ${
            focusMode ? 'text-white' : 'text-slate-800'
          }`}>
            {focusMode ? 'Deep Focus Mode' : 'Regular Mode'}
          </h2>
          <p className={`text-sm ${
            focusMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {focusMode 
              ? 'Distractions minimized, focus maximized'
              : 'Full workspace with all features visible'
            }
          </p>
        </div>

        <button
          onClick={handleToggle}
          className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
            focusMode ? 'bg-amber-500' : 'bg-gray-300'
          } ${isAnimating ? 'scale-105' : ''}`}
        >
          <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
            focusMode 
              ? 'left-9 bg-slate-800 text-amber-500' 
              : 'left-1 bg-white text-gray-600'
          }`}>
            {focusMode ? <Moon size={12} /> : <Sun size={12} />}
          </div>
        </button>
      </div>

      {focusMode && (
        <div className="mt-4 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
          <p className="text-amber-400 text-sm">
            🧠 Focus session active - notifications silenced, distractions hidden
          </p>
        </div>
      )}
    </div>
  );
};
