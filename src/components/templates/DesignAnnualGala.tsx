import { InvitationData } from '@/types/invitation';

export default function DesignAnnualGala({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-white flex flex-col p-10 overflow-hidden shadow-2xl border-4 border-black">
      <div className="flex-1 flex flex-col items-center justify-center text-center border border-black/10 p-6">
        <span className="text-black text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
          {data.hostName}
        </span>
        
        <h2 className="font-serif text-4xl text-black my-6 leading-none">
          {data.title}
        </h2>
        
        <div className="w-16 h-0.5 bg-black my-6"></div>
        
        <p className="text-black/70 text-sm leading-loose px-2 mb-8 font-serif italic max-h-28 overflow-hidden">
          {data.message}
        </p>

        <div className="text-xs text-black font-medium tracking-widest uppercase space-y-2 mt-auto">
          <p>{data.date}</p>
          <p>{data.time}</p>
        </div>
        
        <div className="mt-8 text-[10px] text-black/60 uppercase tracking-widest border-t border-black/10 pt-4 w-full">
          {data.venue}
        </div>
      </div>
    </div>
  );
}
