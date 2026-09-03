import { InvitationData } from '@/types/invitation';

export default function DesignNeonNights({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#090014] flex flex-col items-center justify-center p-10 overflow-hidden shadow-2xl">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)_scale(3)] opacity-40"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-600/30 blur-[80px] rounded-full z-0"></div>

      <div className="relative z-10 w-full h-full flex flex-col items-center text-center">
        <div className="w-full flex justify-between items-center mb-10 border-b border-cyan-500/30 pb-4">
          <span className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase">
            {data.date}
          </span>
          <span className="text-cyan-400 font-mono text-[10px] tracking-widest uppercase">
            {data.time}
          </span>
        </div>
        
        <h2 className="font-heading text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 drop-shadow-[0_0_15px_rgba(255,0,255,0.5)] mb-6">
          {data.title}
        </h2>
        
        <p className="text-fuchsia-200/80 text-sm leading-relaxed mb-auto max-h-24 overflow-hidden border-l-2 border-fuchsia-500 pl-4 font-light">
          {data.message}
        </p>

        <div className="mt-10 bg-black/60 border border-fuchsia-500/50 rounded-xl p-4 w-full backdrop-blur-sm shadow-[0_0_20px_rgba(255,0,255,0.2)]">
          <p className="text-fuchsia-500 font-mono text-[10px] uppercase tracking-widest mb-1">Host</p>
          <p className="text-white text-sm font-bold mb-4">{data.hostName}</p>
          
          <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest mb-1">Location</p>
          <p className="text-white text-sm font-bold truncate">{data.venue}</p>
        </div>
      </div>
    </div>
  );
}
