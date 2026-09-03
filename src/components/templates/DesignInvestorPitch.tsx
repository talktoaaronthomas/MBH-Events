import { InvitationData } from '@/types/invitation';

export default function DesignInvestorPitch({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#F5F5F5] flex flex-col p-10 overflow-hidden shadow-2xl text-[#111]">
      <div className="absolute top-10 left-10 w-16 h-16 border-t-4 border-l-4 border-black z-0"></div>
      
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-black/50 mb-2">
            Confidential Invitation
          </h3>
          <h2 className="font-heading text-5xl font-black leading-none tracking-tight mb-8">
            {data.title}
          </h2>
          <p className="text-sm font-medium leading-relaxed max-h-32 overflow-hidden border-l-2 border-black/20 pl-4 text-black/80">
            {data.message}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-black/50 mb-1">Host</p>
            <p className="font-semibold text-sm">{data.hostName}</p>
          </div>
          
          <div className="flex gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-black/50 mb-1">Date</p>
              <p className="font-semibold text-sm">{data.date}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-black/50 mb-1">Time</p>
              <p className="font-semibold text-sm">{data.time}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-black/10">
            <p className="font-mono text-[10px] uppercase tracking-widest text-black/50 mb-1">Location</p>
            <p className="font-semibold text-sm">{data.venue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
