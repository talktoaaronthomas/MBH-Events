import { InvitationData } from '@/types/invitation';

export default function DesignCorporateRetreat({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#E9E5DD] flex items-center justify-center p-8 overflow-hidden shadow-2xl text-[#2C4135]">
      {/* Botanical/Earthy elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#2C4135]/5 rounded-b-[100%] z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-[#2C4135]/5 rounded-t-[100%] z-0"></div>
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center border-x border-[#2C4135]/10 px-6">
        <span className="text-xs font-semibold tracking-widest uppercase mb-6 text-[#2C4135]/60">
          {data.hostName}
        </span>
        
        <h2 className="font-serif text-5xl font-medium my-6 leading-tight text-[#2C4135]">
          {data.title}
        </h2>
        
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="w-12 h-px bg-[#2C4135]/30"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C4135]/30"></div>
          <div className="w-12 h-px bg-[#2C4135]/30"></div>
        </div>
        
        <p className="text-sm leading-relaxed px-2 mb-10 max-h-32 overflow-hidden italic text-[#2C4135]/80">
          {data.message}
        </p>

        <div className="mt-auto space-y-4 w-full">
          <div className="flex justify-center items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#2C4135]/5 py-2 px-4 rounded-full">
            <span>{data.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#2C4135]/30"></span>
            <span>{data.time}</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest font-medium opacity-70">
            {data.venue}
          </p>
        </div>
      </div>
    </div>
  );
}
