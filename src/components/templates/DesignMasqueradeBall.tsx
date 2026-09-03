import { InvitationData } from '@/types/invitation';

export default function DesignMasqueradeBall({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#2A0845] flex flex-col p-10 overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,65,165,0.4)_0%,transparent_70%)]"></div>
      
      {/* Decorative Ornate Corners */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-2xl"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-2xl"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-2xl"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-2xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        <p className="text-[#D4AF37] font-serif italic text-sm mb-2">Hosted in mystery by</p>
        <p className="text-[#E6E6FA] text-xs uppercase tracking-widest font-semibold mb-8">
          {data.hostName}
        </p>
        
        <h2 className="font-serif text-5xl text-[#D4AF37] font-normal mb-8 leading-tight drop-shadow-md">
          {data.title}
        </h2>
        
        <div className="flex items-center justify-center w-full mb-8">
          <div className="h-px w-1/3 bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
          <div className="w-2 h-2 rotate-45 bg-[#D4AF37] mx-2"></div>
          <div className="h-px w-1/3 bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
        </div>
        
        <p className="text-[#E6E6FA]/80 text-sm leading-relaxed px-6 max-h-24 overflow-hidden mb-auto font-light italic">
          {data.message}
        </p>

        <div className="flex flex-col gap-3 text-[#D4AF37] font-medium tracking-widest uppercase text-xs">
          <span>{data.date}</span>
          <span className="opacity-50">Midnight approaches at {data.time}</span>
        </div>
        
        <p className="text-[#E6E6FA] text-[10px] uppercase tracking-[0.2em] mt-8 pt-6 border-t border-[#D4AF37]/20 w-full px-4">
          {data.venue}
        </p>
      </div>
    </div>
  );
}
