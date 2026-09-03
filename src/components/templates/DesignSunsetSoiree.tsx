import { InvitationData } from '@/types/invitation';

export default function DesignSunsetSoiree({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-[#FF9A9E] via-[#FECFEF] to-[#FECFEF] flex flex-col p-10 overflow-hidden shadow-2xl text-[#8E4B5B]">
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full bg-white/40 rounded-3xl p-8 border border-white/60 shadow-lg">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C47184] mb-6">
          {data.hostName}
        </span>
        
        <h2 className="font-serif text-5xl font-medium mb-6 leading-tight drop-shadow-sm text-[#8E4B5B]">
          {data.title}
        </h2>
        
        <div className="w-12 h-1 bg-[#C47184] rounded-full my-4"></div>
        
        <p className="text-[#8E4B5B]/80 text-sm leading-relaxed max-h-24 overflow-hidden mb-auto font-medium">
          {data.message}
        </p>

        <div className="w-full mt-8 bg-white/50 rounded-2xl p-4">
          <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[#8E4B5B] mb-3 border-b border-[#8E4B5B]/10 pb-3">
            <span>{data.date}</span>
            <span>|</span>
            <span>{data.time}</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#C47184]">
            {data.venue}
          </div>
        </div>
      </div>
    </div>
  );
}
