import { InvitationData } from '@/types/invitation';

export default function DesignExecutiveSummit({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#0A192F] flex flex-col p-8 overflow-hidden shadow-2xl border-t-8 border-[#64FFDA]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#64FFDA]/10 rounded-bl-full blur-2xl"></div>
      <div className="text-left mt-8 flex-1 z-10">
        <h3 className="text-[#64FFDA] text-xs font-mono uppercase tracking-[0.15em] mb-4">Executive Briefing</h3>
        <h2 className="font-heading text-4xl text-white font-bold leading-tight mb-8">
          {data.title}
        </h2>
        <div className="space-y-4 text-[#8892B0] text-sm">
          <p className="border-l-2 border-[#64FFDA] pl-4 max-h-24 overflow-hidden">{data.message}</p>
        </div>
      </div>
      <div className="border-t border-[#112240] pt-6 z-10 space-y-2">
        <div className="flex justify-between text-xs font-mono text-[#CCD6F6]">
          <span className="opacity-70">DATE</span>
          <span>{data.date}</span>
        </div>
        <div className="flex justify-between text-xs font-mono text-[#CCD6F6]">
          <span className="opacity-70">TIME</span>
          <span>{data.time}</span>
        </div>
        <div className="flex justify-between text-xs font-mono text-[#CCD6F6]">
          <span className="opacity-70">VENUE</span>
          <span className="truncate max-w-[60%] text-right">{data.venue}</span>
        </div>
        <div className="flex justify-between text-xs font-mono text-[#64FFDA] pt-2">
          <span className="opacity-70">HOST</span>
          <span className="truncate max-w-[60%] text-right">{data.hostName}</span>
        </div>
      </div>
    </div>
  );
}
