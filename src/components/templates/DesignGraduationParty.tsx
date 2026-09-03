import { InvitationData } from '@/types/invitation';

export default function DesignGraduationParty({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#002147] flex flex-col p-10 overflow-hidden shadow-2xl">
      {/* Gold Academic Accents */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[#CFB53B]"></div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-[#CFB53B] rounded-b-lg"></div>

      <div className="relative z-10 flex flex-col h-full mt-12 text-center text-white">
        <h3 className="text-[#CFB53B] font-serif text-xs uppercase tracking-[0.3em] mb-2 font-bold">
          Class of 2026
        </h3>
        <p className="text-white/70 text-sm mb-8 font-light italic">
          {data.hostName} is graduating!
        </p>

        <h2 className="font-heading text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
          {data.title}
        </h2>
        
        <p className="text-white/90 text-sm leading-relaxed px-4 max-h-24 overflow-hidden border-l-4 border-[#CFB53B] text-left mx-auto mb-auto">
          {data.message}
        </p>

        <div className="bg-white text-[#002147] p-6 rounded-sm mt-8 relative">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#CFB53B]"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#CFB53B]"></div>
          
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest mb-4 border-b border-[#002147]/10 pb-2">
            <span>{data.date}</span>
            <span className="text-[#CFB53B]">•</span>
            <span>{data.time}</span>
          </div>
          <div className="text-[10px] uppercase font-bold text-center text-[#002147]/70">
            {data.venue}
          </div>
        </div>
      </div>
    </div>
  );
}
