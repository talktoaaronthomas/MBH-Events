import { InvitationData } from '@/types/invitation';

export default function DesignRetro80s({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#1A0B2E] flex flex-col p-8 overflow-hidden shadow-2xl border-4 border-[#FF007F]">
      {/* Synthwave Sun */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-[#FFD700] to-[#FF007F] rounded-full z-0 opacity-80 shadow-[0_0_40px_rgba(255,0,127,0.5)] flex flex-col justify-end overflow-hidden">
        <div className="w-full h-1 bg-[#1A0B2E] mb-2"></div>
        <div className="w-full h-2 bg-[#1A0B2E] mb-2"></div>
        <div className="w-full h-3 bg-[#1A0B2E] mb-2"></div>
        <div className="w-full h-4 bg-[#1A0B2E]"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col h-full mt-24">
        <h2 className="font-heading text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-[#00FFFF] to-[#0080FF] drop-shadow-[2px_2px_0_#FF007F] mb-6 uppercase tracking-tight">
          {data.title}
        </h2>
        
        <div className="bg-[#1A0B2E]/80 backdrop-blur-sm p-4 rounded-xl border border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] mb-auto">
          <p className="text-[#FF007F] font-mono text-xs uppercase tracking-widest font-bold mb-1">
            Host
          </p>
          <p className="text-white text-sm font-bold tracking-wider mb-4">
            {data.hostName}
          </p>
          
          <p className="text-white/90 text-xs leading-relaxed max-h-20 overflow-hidden font-mono">
            {data.message}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <div className="bg-[#FF007F] text-white py-2 px-4 rounded transform -skew-x-12 border-2 border-white shadow-[4px_4px_0_#00FFFF]">
            <span className="font-black italic uppercase tracking-wider text-sm block transform skew-x-12">
              {data.date} • {data.time}
            </span>
          </div>
          <div className="bg-[#00FFFF] text-[#1A0B2E] py-2 px-4 rounded transform skew-x-12 border-2 border-white shadow-[4px_4px_0_#FF007F]">
            <span className="font-black italic uppercase tracking-wider text-[10px] block transform -skew-x-12 truncate">
              {data.venue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
