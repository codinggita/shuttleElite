
import { MapPin, Bus, Navigation } from 'lucide-react';
import { cn } from '../utils/cn';

const MapWidget = ({ timeLeft, isWaiting, isDeparted, departureTime }) => {
  const totalEnroute = 480;
  const tp = 1 - (timeLeft / totalEnroute);
  
  // Easing: easeOutCubic to slow down as it gets closer
  const easedTp = 1 - Math.pow(1 - tp, 1.5);
  
  const getBezier = (t, p0, p1, p2) => {
    const invT = 1 - t;
    const pos = invT * invT * p0 + 2 * invT * t * p1 + t * t * p2;
    const der = 2 * invT * (p1 - p0) + 2 * t * (p2 - p1);
    return [pos, der];
  };

  let x, y, dx, dy;
  
  if (!isDeparted) {
    if (easedTp < 0.5) {
      const s = easedTp * 2;
      const [posX, derX] = getBezier(s, 700, 500, 400);
      const [posY, derY] = getBezier(s, 100, 150, 300);
      x = posX; y = posY; dx = derX; dy = derY;
    } else {
      const s = (easedTp - 0.5) * 2;
      const [posX, derX] = getBezier(s, 400, 300, 100);
      const [posY, derY] = getBezier(s, 300, 450, 500);
      x = posX; y = posY; dx = derX; dy = derY;
    }
  } else {
    // Move away after departure
    const departTp = Math.min(departureTime / 10, 1);
    x = 100 - departTp * 150;
    y = 500 + departTp * 50;
    dx = -150; dy = 50;
  }

  const rotation = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <div className="h-[450px] md:h-[600px] bg-[#0F172A] rounded-[2.5rem] relative overflow-hidden border border-white/5 shadow-2xl group">
      {/* Mock Map Background - Dark Theme */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: 'radial-gradient(#22C55E 0.5px, transparent 0.5px)', 
             backgroundSize: '30px 30px' 
           }} />
      
      {/* Animated Route Path */}
      <svg className="absolute inset-0 w-full h-full text-primary/10" viewBox="0 0 800 600">
        <path 
          id="route-path"
          d="M 100 500 Q 300 450 400 300 T 700 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeDasharray="10 10" 
        />
      </svg>

      {/* User Location Indicator */}
      <div className="absolute left-[100px] bottom-[100px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="bg-card px-3 py-1.5 rounded-xl border border-border shadow-xl mb-3 text-[10px] font-bold text-text-main whitespace-nowrap">
          Your Stop
        </div>
        <div className="relative">
          <div className="w-6 h-6 bg-blue-500/20 rounded-full animate-ping absolute -inset-0" />
          <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-[#0F172A] shadow-lg relative flex items-center justify-center">
            <MapPin className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>

      {/* Shuttle Location Indicator */}
      <div 
        className={cn(
          "absolute transition-all duration-1000 linear flex flex-col items-center",
          isDeparted && departureTime > 5 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        )}
        style={{ 
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)',
          transitionProperty: 'left, top, opacity, transform',
          zIndex: 20
        }}
      >
        <div className="bg-primary px-3 py-2 rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.4)] mb-3 flex items-center gap-2">
          <Bus className="w-4 h-4 text-black" />
          <span className="text-black text-[11px] font-black whitespace-nowrap uppercase tracking-tighter">
            {isWaiting ? 'Arrived' : isDeparted ? 'Departed' : `SH-204 • ${Math.ceil(timeLeft/60)}m`}
          </span>
        </div>
        <div 
          className={cn(
            "w-10 h-10 bg-primary rounded-full border-4 border-[#0F172A] shadow-2xl flex items-center justify-center transition-transform duration-1000",
            isWaiting ? 'animate-bounce-subtle' : ''
          )}
          style={{ transform: `rotate(${rotation - 45}deg)` }}
        >
          <Navigation className="w-5 h-5 text-black" />
        </div>
      </div>

      {/* Map Controls Mock */}
      <div className="absolute top-6 right-6 flex flex-col gap-3">
        {[
          { id: 'zoom-in', icon: '+' },
          { id: 'zoom-out', icon: '-' },
          { id: 'recenter', icon: '◎' }
        ].map(ctrl => (
          <button 
            key={ctrl.id} 
            onClick={() => alert(`Map ${ctrl.id} interaction triggered.`)}
            className="w-10 h-10 bg-card/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-text-muted hover:text-primary cursor-pointer transition-colors font-bold"
          >
            {ctrl.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MapWidget;
