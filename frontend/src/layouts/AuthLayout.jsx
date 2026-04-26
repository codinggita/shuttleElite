import React from 'react';
import { Outlet } from 'react-router-dom';
import { Bus } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-background relative flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      
      <div className="mb-12 flex flex-col items-center gap-4 z-10">
        <div className="w-16 h-16 bg-primary rounded-[2rem] flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.3)] animate-bounce-subtle">
          <Bus className="text-black w-8 h-8" />
        </div>
        <div className="text-center space-y-1">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-text-main">
            Shuttle<span className="text-primary">Elite</span>
          </h1>
          <p className="text-text-muted font-bold uppercase tracking-[0.3em] text-xs">Modern Office Commute</p>
        </div>
      </div>

      <div className="w-full max-w-md z-10">
        <Outlet />
      </div>
      
      <div className="mt-12 text-center z-10">
        <p className="text-text-dim text-sm font-medium">© 2026 ShuttleElite Technologies Inc.</p>
      </div>
    </div>
  );
};

export default AuthLayout;
