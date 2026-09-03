import { InvitationData } from '@/types/invitation';

export default function DesignGoldenAnniversary({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#FCFBF8] flex flex-col items-center justify-center p-8 overflow-hidden shadow-2xl border-[16px] border-[#D4AF37]">
      <div className="absolute inset-2 border-2 border-dashed border-[#D4AF37]/50 z-0"></div>

      <div className="relative z-10 text-center w-full h-full flex flex-col items-center justify-center p-6 bg-white/90">
        
        <div className="w-16 h-16 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mb-6 shadow-sm">
          <span className="text-[#D4AF37] font-serif text-xl italic">50</span>
        </div>

        <h3 className="text-[#8B7D74] font-serif uppercase tracking-widest text-xs mb-4">
          {data.hostName}
        </h3>
        
        <h2 className="font-serif text-4xl text-[#333] font-bold mb-6 leading-tight">
          {data.title}
        </h2>
        
        <div className="w-1/2 h-px bg-[#D4AF37]/50 my-4"></div>
        
        <p className="text-[#555] font-serif text-sm leading-loose px-4 max-h-32 overflow-hidden italic mb-8">
          {data.message}
        </p>

        <div className="mt-auto flex flex-col gap-3 font-serif uppercase tracking-widest text-[#D4AF37] font-bold text-xs">
          <p>{data.date}</p>
          <p>{data.time}</p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-[#D4AF37]/20 w-full text-center">
          <p className="text-[10px] text-[#8B7D74] uppercase tracking-widest font-semibold">
            {data.venue}
          </p>
        </div>

      </div>
    </div>
  );
}
