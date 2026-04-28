import { useNavigate } from 'react-router-dom';
import { Bus, MapPin, Clock, ArrowRight, TrendingUp, Zap, Star } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Dashboard = () => {
  const navigate = useNavigate();

  const nextRide = {
    shuttleId: 'SH-204',
    pickup: 'Main Gate, Sector 62',
    drop: 'HSR Layout, Block 2',
    time: '18:30',
    date: 'Today, 25 Apr',
    status: 'Scheduled',
  };

  const stats = [
    { label: 'Total Rides', value: '42', icon: Bus, trend: '+4 this week', color: 'text-primary' },
    { label: 'CO2 Saved', value: '128kg', icon: TrendingUp, trend: 'Top 5% user', color: 'text-blue-400' },
    { label: 'Elite Points', value: '2,450', icon: Star, trend: 'Gold Tier', color: 'text-yellow-400' },
  ];

  return (
    <div className="space-y-10 pb-20 md:pb-10">
      {/* Welcome Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl md:text-5xl font-black text-text-main tracking-tighter">
            Welcome back, <span className="text-primary">Harshil</span>
          </h1>
          <p className="text-text-muted text-lg font-medium">Your evening shuttle departs in <span className="text-text-main">45 minutes</span>.</p>
        </div>
        <Button 
          onClick={() => navigate('/request')} 
          className="md:h-16 h-14 px-10 text-lg shadow-[0_0_30px_rgba(34,197,94,0.2)]"
        >
          <Zap className="w-5 h-5 mr-2 fill-current" />
          Book New Ride
        </Button>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="relative group overflow-hidden">
            <div className={`absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity`}>
              <stat.icon size={80} />
            </div>
            <div className="flex items-start justify-between">
              <div className="space-y-3">
                <p className="text-sm font-bold text-text-dim uppercase tracking-widest">{stat.label}</p>
                <p className="text-4xl font-black text-text-main tracking-tight">{stat.value}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-lg bg-white/5 ${stat.color}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Next Ride Card */}
        <Card 
          title="Upcoming Journey" 
          subtitle="Your seat is reserved for SH-204"
          className="lg:col-span-2 relative overflow-hidden"
          footer={
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-text-muted">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-wider">Live tracking available</span>
              </div>
              <Button variant="secondary" onClick={() => navigate('/tracking')} className="w-full sm:w-auto px-8">
                Open Tracking
              </Button>
            </div>
          }
        >
          <div className="flex flex-col md:flex-row md:items-center gap-10 py-4">
            <div className="flex-1 relative">
              {/* Decorative line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-red-400 opacity-20" />
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="mt-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background z-10 group-hover:scale-125 transition-transform" />
                  <div>
                    <p className="text-xs font-black text-text-dim uppercase tracking-widest mb-1">Pickup Point</p>
                    <p className="text-xl font-bold text-text-main tracking-tight">{nextRide.pickup}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="mt-1.5 w-4 h-4 rounded-full border-2 border-red-400 bg-background z-10 group-hover:scale-125 transition-transform" />
                  <div>
                    <p className="text-xs font-black text-text-dim uppercase tracking-widest mb-1">Destination</p>
                    <p className="text-xl font-bold text-text-main tracking-tight">{nextRide.drop}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/[0.03] border border-white/5 rounded-[2rem] p-8 flex flex-col items-center justify-center gap-4 min-w-[180px]">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-1">
                  <Clock className="w-5 h-5" />
                  <span className="text-3xl font-black tracking-tighter tabular-nums">{nextRide.time}</span>
                </div>
                <p className="text-sm font-bold text-text-muted uppercase tracking-widest">{nextRide.date}</p>
              </div>
              <div className="h-[1px] w-12 bg-white/10" />
              <div className="text-center">
                <p className="text-[10px] font-black text-text-dim uppercase tracking-widest mb-1">Shuttle ID</p>
                <div className="px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                  <p className="font-black text-primary text-sm">{nextRide.shuttleId}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Actions / Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-black text-text-main tracking-tight px-1">Quick Links</h3>
          <Card 
            className="group cursor-pointer border-none bg-gradient-to-br from-primary/10 to-transparent hover:from-primary/20 transition-all border border-primary/10!"
            onClick={() => navigate('/history')}
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-lg font-black text-text-main">Ride History</p>
                <p className="text-sm font-medium text-text-muted">Review 42 past trips</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="bg-white/[0.02] border-white/5!">
            <div className="space-y-4">
              <h4 className="text-sm font-black text-text-dim uppercase tracking-widest">Active Routes</h4>
              <div className="space-y-3">
                {['North Hub 101', 'Tech Park 204', 'Downtown 305'].map((route) => (
                  <div 
                    key={route} 
                    onClick={() => navigate('/request', { state: { route } })}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer group/route"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary w-4 h-4 group-hover/route:scale-125 transition-transform" />
                      <span className="text-sm font-bold text-text-main tracking-tight">{route}</span>
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase">Active</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
