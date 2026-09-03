import { InvitationData } from '@/types/invitation';

export default function DesignStartupMixer({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#FF4F00] flex flex-col p-8 overflow-hidden shadow-2xl">
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FF7F3F] rounded-full mix-blend-screen opacity-50 blur-xl"></div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="bg-black text-white px-4 py-2 self-start transform -rotate-2 font-black uppercase tracking-wider text-sm shadow-[4px_4px_0_rgba(0,0,0,0.2)] mb-8">
          {data.hostName} Presents
        </div>
        
        <h2 className="font-heading text-6xl text-white font-black leading-[0.9] tracking-tighter uppercase drop-shadow-md">
          {data.title}
        </h2>
        
        <p className="text-white/90 font-medium mt-6 text-sm max-h-24 overflow-hidden border-l-4 border-black pl-4">
          {data.message}
        </p>

        <div className="mt-auto bg-white text-black p-6 rounded-xl shadow-[8px_8px_0_rgba(0,0,0,1)] border-2 border-black transform rotate-1">
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-bold uppercase tracking-wider">
            <div className="text-black/50">Date</div>
            <div className="text-right">{data.date}</div>
            <div className="text-black/50">Time</div>
            <div className="text-right">{data.time}</div>
            <div className="text-black/50">Venue</div>
            <div className="text-right truncate">{data.venue}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
