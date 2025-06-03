
interface ProductivityAnalyticsProps {
  focusMode: boolean;
}

export const ProductivityAnalytics = ({ focusMode }: ProductivityAnalyticsProps) => {
  const stats = [
    { label: "Focus Score", value: "87%", change: "+12%" },
    { label: "Deep Work", value: "4.2h", change: "+0.8h" },
    { label: "Context Switches", value: "23", change: "-7" },
    { label: "Flow State", value: "3 sessions", change: "+1" },
  ];

  return (
    <div className={`p-6 rounded-xl transition-all duration-300 ${
      focusMode 
        ? 'bg-slate-800 border border-slate-700' 
        : 'bg-white border border-gray-200 shadow-sm'
    }`}>
      <h2 className={`text-lg font-semibold mb-4 ${
        focusMode ? 'text-white' : 'text-slate-800'
      }`}>
        Productivity Insights
      </h2>

      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 rounded-lg ${
            focusMode ? 'bg-slate-700' : 'bg-gray-50'
          }`}>
            <div className="flex items-center justify-between mb-1">
              <span className={`text-sm ${
                focusMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {stat.label}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                stat.change.startsWith('+') 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className={`text-xl font-bold ${
              focusMode ? 'text-white' : 'text-slate-800'
            }`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Focus Trend Graph Placeholder */}
      <div className={`mt-6 p-4 rounded-lg border-2 border-dashed ${
        focusMode 
          ? 'border-slate-600 bg-slate-700/50' 
          : 'border-gray-300 bg-gray-50'
      }`}>
        <div className="text-center">
          <div className={`text-4xl mb-2 ${
            focusMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            📊
          </div>
          <p className={`text-sm ${
            focusMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Focus trend chart
          </p>
        </div>
      </div>
    </div>
  );
};
