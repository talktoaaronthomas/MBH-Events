import { InvitationData } from '@/types/invitation';

export default function DesignRusticRomance({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#F4ECD8] flex flex-col items-center justify-center p-12 overflow-hidden shadow-2xl border-[12px] border-[#D4C3A3]/30">
      {/* Decorative leaf vectors using borders/css */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-[#8A7968] rounded-tl-full opacity-40"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-[#8A7968] rounded-br-full opacity-40"></div>

      <div className="text-center z-10 w-full flex flex-col h-full">
        <p className="text-[#8A7968] font-serif italic text-sm mb-6 mt-4">Together with their families</p>
        
        <h2 className="font-serif text-5xl text-[#5C4D42] font-semibold my-4 leading-tight">
          {data.hostName}
        </h2>
        
        <p className="text-[#8A7968] font-serif text-sm my-4">invite you to celebrate</p>
        
        <h3 className="font-serif text-2xl text-[#5C4D42] italic mb-6">
          {data.title}
        </h3>

        <div className="w-full flex items-center justify-center my-6 gap-2">
          <div className="h-px w-12 bg-[#8A7968]/40"></div>
          <span className="text-[#8A7968] text-xs">❖</span>
          <div className="h-px w-12 bg-[#8A7968]/40"></div>
        </div>
        
        <p className="text-[#5C4D42]/80 text-sm leading-relaxed px-2 font-serif max-h-24 overflow-hidden mb-auto">
          {data.message}
        </p>

        <div className="mt-8 pt-6 border-t border-[#8A7968]/20 flex flex-col items-center gap-2 font-serif text-[#5C4D42]">
          <p className="font-semibold">{data.date} <span className="mx-2 opacity-50">|</span> {data.time}</p>
          <p className="text-xs uppercase tracking-widest mt-2">{data.venue}</p>
        </div>
      </div>
    </div>
  );
}
