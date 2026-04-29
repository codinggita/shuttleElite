
import { Phone, MessageSquare, ShieldCheck, Star } from 'lucide-react';
import toast from 'react-hot-toast';

const DriverInfoCard = () => {
  return (
    <div className="space-y-6 mt-8 pt-8 border-t border-white/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="Driver" 
              className="w-14 h-14 rounded-2xl bg-card-hover border border-border"
            />
            <div className="absolute -bottom-1 -right-1 bg-primary p-1 rounded-lg border-2 border-card">
              <ShieldCheck className="w-3 h-3 text-black" />
            </div>
          </div>
          <div>
            <h4 className="text-text-main font-bold">Rajesh Kumar</h4>
            <div className="flex items-center gap-1.5 text-xs text-text-muted font-semibold mt-0.5">
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              4.9 • 2,400+ Rides
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => toast.info('Initiating secure VOIP call...')}
            className="p-3 bg-white/5 hover:bg-primary/10 hover:text-primary border border-white/5 rounded-2xl transition-all"
          >
            <Phone className="w-5 h-5" />
          </button>
          <button 
            onClick={() => toast.info('Opening secure encrypted chat...')}
            className="p-3 bg-white/5 hover:bg-primary/10 hover:text-primary border border-white/5 rounded-2xl transition-all"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white/5 p-5 rounded-2xl space-y-4 border border-white/5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted font-medium">Shuttle ID</span>
          <span className="font-bold text-text-main font-mono">SH-204 (KA-01-MJ-5542)</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted font-medium">Model</span>
          <span className="font-bold text-text-main">Toyota Coaster Luxe</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted font-medium">Occupancy</span>
          <div className="flex gap-1.5">
            {[1,2,3,4].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary/60 shadow-[0_0_8px_rgba(34,197,94,0.3)]" />)}
            {[1].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/10" />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverInfoCard;
