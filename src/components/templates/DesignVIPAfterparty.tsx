import { InvitationData } from '@/types/invitation';

export default function DesignVIPAfterparty({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#0A0A0A] flex flex-col p-12 overflow-hidden shadow-2xl border border-white/10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col justify-between h-full w-full">
        <div className="text-right border-r-2 border-white/20 pr-4">
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 mb-1">
            Access Granted
          </h3>
          <p className="font-sans text-sm font-bold text-white tracking-wider">
            {data.hostName}
          </p>
        </div>

        <div className="my-auto">
          <h2 className="font-heading text-6xl text-white font-black uppercase tracking-tighter leading-none mb-6">
            {data.title}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed font-light max-h-24 overflow-hidden pl-4 border-l border-white/20">
            {data.message}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-6 border-t border-white/10">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-1">Date</p>
            <p className="text-white text-xs font-semibold">{data.date}</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-1">Time</p>
            <p className="text-white text-xs font-semibold">{data.time}</p>
          </div>
          <div className="col-span-2">
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-1">Location / Venue</p>
            <p className="text-white text-xs font-semibold truncate">{data.venue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
