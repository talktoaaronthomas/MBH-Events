import { InvitationData } from '@/types/invitation';

export default function DesignMinimalistLove({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-white flex flex-col p-12 overflow-hidden shadow-2xl">
      <div className="w-full h-full flex flex-col justify-between">
        
        {/* Top left minimalist host */}
        <div className="text-left">
          <p className="font-serif text-[10px] text-gray-400 uppercase tracking-widest mb-1">Host</p>
          <p className="font-serif text-sm text-gray-800">{data.hostName}</p>
        </div>
        
        {/* Center massive title */}
        <div className="text-center">
          <h2 className="font-serif text-6xl text-black font-light tracking-tight leading-none mb-6">
            {data.title}
          </h2>
          <div className="w-4 h-4 bg-black mx-auto rounded-full mb-6"></div>
          <p className="font-serif text-sm text-gray-500 italic px-8 max-h-24 overflow-hidden">
            {data.message}
          </p>
        </div>

        {/* Bottom grid for details */}
        <div className="grid grid-cols-2 gap-4 text-left border-t border-gray-100 pt-6">
          <div>
            <p className="font-serif text-[10px] text-gray-400 uppercase tracking-widest mb-1">When</p>
            <p className="font-serif text-sm text-black">{data.date}</p>
            <p className="font-serif text-xs text-gray-500 mt-1">{data.time}</p>
          </div>
          <div>
            <p className="font-serif text-[10px] text-gray-400 uppercase tracking-widest mb-1">Where</p>
            <p className="font-serif text-sm text-black line-clamp-3 leading-snug">{data.venue}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
