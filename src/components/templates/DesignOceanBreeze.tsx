import { InvitationData } from '@/types/invitation';

export default function DesignOceanBreeze({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#F0F8FF] flex flex-col items-center p-10 overflow-hidden shadow-2xl">
      {/* Watercolor splash effect using CSS gradients */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-bl from-[#B0E0E6]/60 to-transparent blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-[#ADD8E6]/60 to-transparent blur-xl"></div>
      
      {/* Frame */}
      <div className="absolute inset-4 border border-[#87CEEB]/50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#4682B4] mb-8">
          {data.hostName}
        </h3>
        
        <h2 className="font-serif text-5xl text-[#000080] font-light italic mb-8 leading-tight px-4">
          {data.title}
        </h2>
        
        <p className="text-[#4682B4] text-sm leading-loose px-4 max-h-32 overflow-hidden mb-auto">
          {data.message}
        </p>

        <div className="w-16 h-px bg-[#87CEEB] my-8"></div>

        <div className="flex flex-col gap-1 text-[#000080] font-medium tracking-wide">
          <p className="uppercase text-sm">{data.date}</p>
          <p className="text-xs opacity-70">{data.time}</p>
        </div>
        
        <p className="text-[#4682B4] text-[10px] uppercase tracking-widest mt-8 px-6">
          {data.venue}
        </p>
      </div>
    </div>
  );
}
