
import { Clock, Calendar, List, File } from "lucide-react";

interface DashboardProps {
  focusMode: boolean;
}

export const Dashboard = ({ focusMode }: DashboardProps) => {
  const upcomingTasks = [
    { id: 1, title: "Review Q4 strategy document", priority: "high", time: "2:00 PM" },
    { id: 2, title: "Team standup meeting", priority: "medium", time: "3:30 PM" },
    { id: 3, title: "Update project timeline", priority: "low", time: "4:45 PM" },
  ];

  const quickActions = [
    { icon: Calendar, label: "Schedule Focus Block", color: "bg-cyan-500" },
    { icon: File, label: "New Document", color: "bg-amber-500" },
    { icon: List, label: "Daily Review", color: "bg-green-500" },
    { icon: Clock, label: "Time Tracker", color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className={`p-6 rounded-xl transition-all duration-300 ${
        focusMode 
          ? 'bg-slate-800 border border-slate-700' 
          : 'bg-white border border-gray-200 shadow-sm'
      }`}>
        <h1 className={`text-2xl font-bold mb-2 ${
          focusMode ? 'text-white' : 'text-slate-800'
        }`}>
          Good afternoon, Alex 👋
        </h1>
        <p className={`${focusMode ? 'text-gray-300' : 'text-gray-600'}`}>
          You have 3 tasks scheduled and 2 hours of deep work blocked for today.
        </p>
      </div>

      {/* Quick Actions */}
      {!focusMode && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 text-center group"
                >
                  <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Today's Schedule */}
      <div className={`p-6 rounded-xl transition-all duration-300 ${
        focusMode 
          ? 'bg-slate-800 border border-slate-700' 
          : 'bg-white border border-gray-200 shadow-sm'
      }`}>
        <h2 className={`text-lg font-semibold mb-4 ${
          focusMode ? 'text-white' : 'text-slate-800'
        }`}>
          Today's Priority Tasks
        </h2>
        <div className="space-y-3">
          {upcomingTasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                focusMode 
                  ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' 
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' :
                    task.priority === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                  }`} />
                  <span className={`font-medium ${
                    focusMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {task.title}
                  </span>
                </div>
                <span className={`text-sm ${
                  focusMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {task.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
