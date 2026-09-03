import { InvitationData } from '@/types/invitation';

export default function DesignSummerBBQ({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#FFECA1] flex flex-col items-center justify-between p-8 overflow-hidden shadow-2xl border-8 border-[#FF7043]">
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFB74D] rounded-full mix-blend-multiply opacity-40 -translate-y-1/2 translate-x-1/4 blur-xl"></div>
      
      <div className="relative z-10 text-center flex flex-col h-full w-full">
        <div className="bg-[#FF7043] text-white text-xs font-black uppercase tracking-widest py-1 px-4 inline-block mx-auto rounded-full mb-8 transform -rotate-2">
          {data.hostName} Invites You
        </div>
        
        <h2 className="font-heading text-6xl text-[#E64A19] font-black uppercase leading-[0.85] mb-6 transform rotate-1 drop-shadow-sm">
          {data.title}
        </h2>
        
        <p className="text-[#D84315] font-medium text-sm leading-snug px-4 max-h-24 overflow-hidden mb-auto">
          {data.message}
        </p>

        <div className="bg-white rounded-3xl p-6 shadow-md border-4 border-[#FFCC80] w-full transform -rotate-1 mt-6">
          <div className="flex justify-center items-center gap-4 mb-4 text-[#E64A19] font-black uppercase">
            <span className="text-lg">{data.date}</span>
            <span className="text-xl opacity-50">@</span>
            <span className="text-lg">{data.time}</span>
          </div>
          <div className="border-t-2 border-dashed border-[#FFCC80] pt-4">
            <p className="text-[#FF7043] text-[10px] uppercase font-bold tracking-widest mb-1">Where to go</p>
            <p className="text-[#D84315] font-bold text-sm truncate">{data.venue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
