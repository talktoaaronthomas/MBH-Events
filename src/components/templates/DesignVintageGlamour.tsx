import { InvitationData } from '@/types/invitation';

export default function DesignVintageGlamour({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#111] flex flex-col items-center p-8 overflow-hidden shadow-2xl border border-[#D4AF37]/30">
      {/* Art Deco Line Art Frame */}
      <div className="absolute inset-6 border border-[#D4AF37] z-0"></div>
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-8 border-b border-[#D4AF37] z-0"></div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-8 border-t border-[#D4AF37] z-0"></div>
      <div className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-24 border-r border-[#D4AF37] z-0"></div>
      <div className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-24 border-l border-[#D4AF37] z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-between w-full h-full text-center py-6">
        <div>
          <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-medium">
            Join Us
          </p>
          <div className="flex items-center justify-center gap-2 my-4">
            <div className="w-8 h-px bg-[#D4AF37]"></div>
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]"></div>
            <div className="w-8 h-px bg-[#D4AF37]"></div>
          </div>
          <h2 className="font-heading text-4xl text-[#FDFBF6] font-bold tracking-wider uppercase leading-tight px-4 mt-2 mb-4">
            {data.title}
          </h2>
          <p className="text-[#D4AF37] text-sm uppercase tracking-widest font-semibold mb-6">
            Hosted by {data.hostName}
          </p>
        </div>

        <p className="text-[#FDFBF6]/80 text-xs leading-loose px-6 max-h-24 overflow-hidden italic">
          {data.message}
        </p>

        <div className="flex flex-col items-center gap-4 mt-8 w-full px-8">
          <div className="flex justify-between w-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest border-b border-[#D4AF37]/30 pb-2">
            <span>Date</span>
            <span>{data.date}</span>
          </div>
          <div className="flex justify-between w-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest border-b border-[#D4AF37]/30 pb-2">
            <span>Time</span>
            <span>{data.time}</span>
          </div>
          <div className="pt-2 w-full text-[#FDFBF6] text-[10px] uppercase tracking-[0.2em]">
            {data.venue}
          </div>
        </div>
      </div>
    </div>
  );
}
