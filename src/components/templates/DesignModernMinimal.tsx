import { InvitationData } from '@/types/invitation';

export default function DesignModernMinimal({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#0f0f0f] flex flex-col justify-between p-12 overflow-hidden shadow-2xl border border-white/5">
      {/* Minimalist Graphic Element */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-start h-full">
        <div className="mb-auto">
          <p className="text-mbh-white-dim text-xs font-mono uppercase tracking-[0.2em] mb-4">
            {data.date} • {data.time}
          </p>
          <h2 className="font-heading text-5xl text-mbh-white font-bold leading-none tracking-tight mb-6">
            {data.title}
          </h2>
          <div className="h-1 w-12 bg-mbh-white mb-6"></div>
          <p className="text-mbh-white/70 text-sm leading-relaxed max-h-32 overflow-hidden text-ellipsis font-light">
            {data.message}
          </p>
        </div>

        <div className="w-full mt-12">
          <p className="text-mbh-white text-xs uppercase tracking-widest mb-1 opacity-50">Host</p>
          <p className="text-mbh-white text-sm font-medium mb-6">{data.hostName}</p>
          
          <p className="text-mbh-white text-xs uppercase tracking-widest mb-1 opacity-50">Location</p>
          <p className="text-mbh-white text-sm font-medium">{data.venue}</p>
        </div>
      </div>
    </div>
  );
}
