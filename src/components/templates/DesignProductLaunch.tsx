import { InvitationData } from '@/types/invitation';

export default function DesignProductLaunch({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-black flex items-center justify-center p-8 overflow-hidden shadow-2xl">
      {/* Neon Accents */}
      <div className="absolute top-1/4 -left-12 w-32 h-64 bg-fuchsia-600/30 blur-[60px] rounded-full mix-blend-screen"></div>
      <div className="absolute bottom-1/4 -right-12 w-32 h-64 bg-cyan-600/30 blur-[60px] rounded-full mix-blend-screen"></div>
      
      <div className="relative z-10 w-full text-center">
        <div className="mb-8">
          <span className="text-white font-black text-6xl tracking-tighter mix-blend-overlay opacity-20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            LAUNCH
          </span>
          <h2 className="font-heading text-4xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 font-extrabold uppercase tracking-tight relative z-10">
            {data.title}
          </h2>
        </div>
        
        <p className="text-white/80 text-sm font-light leading-relaxed px-4 mb-10 max-h-24 overflow-hidden">
          {data.message}
        </p>
        
        <div className="inline-block border border-white/20 rounded-2xl p-4 backdrop-blur-md bg-white/5 w-full mb-6">
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-[10px] text-fuchsia-400 uppercase tracking-widest font-bold">When</p>
              <p className="text-white text-xs mt-1">{data.date}</p>
              <p className="text-white/60 text-xs">{data.time}</p>
            </div>
            <div>
              <p className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">Where</p>
              <p className="text-white text-xs mt-1 truncate">{data.venue}</p>
            </div>
          </div>
        </div>
        
        <p className="text-white/40 text-[10px] uppercase tracking-widest">
          Hosted by <span className="text-white/80">{data.hostName}</span>
        </p>
      </div>
    </div>
  );
}
