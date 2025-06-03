
import { useState } from "react";
import { Monitor, File, User, Calendar } from "lucide-react";

interface FlowZonesProps {
  focusMode: boolean;
  activeZone: string;
  onZoneChange: (zone: string) => void;
}

export const FlowZones = ({ focusMode, activeZone, onZoneChange }: FlowZonesProps) => {
  const zones = [
    {
      id: "deep-work",
      name: "Deep Work",
      icon: Monitor,
      description: "Code, write, design - distraction-free focus",
      color: "bg-cyan-500",
      apps: ["VS Code", "Figma", "Notion"],
      active: true
    },
    {
      id: "communication",
      name: "Communication",
      icon: User,
      description: "Meetings, emails, team collaboration",
      color: "bg-amber-500",
      apps: ["Slack", "Gmail", "Zoom"],
      active: false
    },
    {
      id: "planning",
      name: "Planning",
      icon: Calendar,
      description: "Strategy, roadmaps, project planning",
      color: "bg-purple-500",
      apps: ["Calendar", "Trello", "Miro"],
      active: false
    },
    {
      id: "research",
      name: "Research",
      icon: File,
      description: "Learning, reading, information gathering",
      color: "bg-green-500",
      apps: ["Browser", "Pocket", "Obsidian"],
      active: false
    },
  ];

  return (
    <div className={`p-6 rounded-xl transition-all duration-300 ${
      focusMode 
        ? 'bg-slate-800 border border-slate-700' 
        : 'bg-white border border-gray-200 shadow-sm'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-xl font-semibold ${
          focusMode ? 'text-white' : 'text-slate-800'
        }`}>
          Flow Zones
        </h2>
        <span className={`text-sm px-3 py-1 rounded-full ${
          focusMode 
            ? 'bg-amber-500/20 text-amber-400' 
            : 'bg-amber-100 text-amber-700'
        }`}>
          {zones.find(z => z.active)?.name} Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {zones.map((zone) => {
          const Icon = zone.icon;
          const isActive = zone.id === activeZone;
          
          return (
            <button
              key={zone.id}
              onClick={() => onZoneChange(zone.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 text-left hover:scale-105 ${
                isActive
                  ? focusMode
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-amber-500 bg-amber-50'
                  : focusMode
                    ? 'border-slate-600 bg-slate-700 hover:border-slate-500'
                    : 'border-gray-200 bg-gray-50 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 ${zone.color} rounded-lg flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className={`font-semibold ${
                    focusMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {zone.name}
                  </h3>
                  {isActive && (
                    <span className="text-xs text-amber-500 font-medium">Active</span>
                  )}
                </div>
              </div>
              
              <p className={`text-sm mb-3 ${
                focusMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {zone.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {zone.apps.map((app, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded ${
                      focusMode 
                        ? 'bg-slate-600 text-gray-300' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Zone Details */}
      <div className={`mt-6 p-4 rounded-lg ${
        focusMode ? 'bg-slate-700' : 'bg-gray-50'
      }`}>
        <p className={`text-sm ${
          focusMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          💡 <strong>Smart Context:</strong> FlowNest automatically suggests zone switches based on your calendar, current tasks, and focus patterns.
        </p>
      </div>
    </div>
  );
};
