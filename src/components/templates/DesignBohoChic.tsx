import { InvitationData } from '@/types/invitation';

export default function DesignBohoChic({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#F7F3EE] flex flex-col items-center justify-center p-10 overflow-hidden shadow-2xl">
      {/* Terracotta arch shape */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[85%] bg-[#E88E73] rounded-t-full z-0 opacity-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] h-[80%] border-t border-l border-r border-[#E88E73]/30 rounded-t-full z-0"></div>
      
      <div className="relative z-10 text-center w-full h-full flex flex-col items-center">
        <p className="text-[#C57C66] font-serif italic text-lg mb-8 mt-4">
          Join us for
        </p>
        
        <h2 className="font-serif text-5xl text-[#5A4B43] font-normal mb-8 leading-tight tracking-wide">
          {data.title}
        </h2>
        
        <p className="text-[#8B7D74] text-xs uppercase tracking-[0.2em] mb-auto font-medium">
          With {data.hostName}
        </p>
        
        <p className="text-[#5A4B43]/80 text-sm leading-relaxed px-6 my-8 max-h-24 overflow-hidden italic font-serif">
          {data.message}
        </p>

        <div className="flex items-center justify-center gap-6 text-[#C57C66] font-medium uppercase tracking-widest text-xs mb-6">
          <span>{data.date}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E88E73]/50"></span>
          <span>{data.time}</span>
        </div>
        
        <div className="w-3/4 h-px bg-[#E88E73]/20 mb-6"></div>
        
        <p className="text-[#8B7D74] text-xs uppercase tracking-widest font-semibold pb-4">
          {data.venue}
        </p>
      </div>
    </div>
  );
}
