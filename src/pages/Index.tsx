
import { useState } from "react";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { FocusModeToggle } from "@/components/FocusModeToggle";
import { FlowZones } from "@/components/FlowZones";
import { ProductivityAnalytics } from "@/components/ProductivityAnalytics";

const Index = () => {
  const [focusMode, setFocusMode] = useState(false);
  const [activeZone, setActiveZone] = useState("deep-work");

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      focusMode ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      <Header focusMode={focusMode} />
      
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="mb-8">
          <FocusModeToggle 
            focusMode={focusMode} 
            onToggle={setFocusMode} 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Dashboard focusMode={focusMode} />
          </div>
          <div>
            <ProductivityAnalytics focusMode={focusMode} />
          </div>
        </div>

        <FlowZones 
          focusMode={focusMode} 
          activeZone={activeZone}
          onZoneChange={setActiveZone}
        />
      </main>
    </div>
  );
};

export default Index;
