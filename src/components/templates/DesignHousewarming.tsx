import { InvitationData } from '@/types/invitation';

export default function DesignHousewarming({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#E8E1D9] flex flex-col p-10 overflow-hidden shadow-2xl">
      {/* House outline pattern background */}
      <div className="absolute inset-0 opacity-[0.03] z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDVMMCAyMGgydjE1aDEydi0xMGg0djEwaDEydi0xNWgyTDIwIDV6IiBmaWxsPSIjMDAwIi8+PC9zdmc+')] bg-repeat"></div>
      
      <div className="relative z-10 bg-[#FAF9F6] w-full h-full p-8 flex flex-col text-center shadow-md border-t-[16px] border-[#8C6D53]">
        
        <p className="text-[#8C6D53] font-serif text-sm italic mb-2 mt-4">We've moved!</p>
        <p className="text-[#594A3C] font-semibold text-xs uppercase tracking-widest mb-8">
          {data.hostName}
        </p>
        
        <h2 className="font-serif text-4xl text-[#3A2E24] font-medium mb-6 leading-tight">
          {data.title}
        </h2>
        
        <p className="text-[#594A3C]/80 text-sm leading-relaxed px-4 max-h-32 overflow-hidden italic mb-auto">
          {data.message}
        </p>

        <div className="mt-8 border-t border-[#8C6D53]/20 pt-6 flex flex-col gap-4">
          <div className="flex justify-center items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#594A3C]">
            <span>{data.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D53]/50"></span>
            <span>{data.time}</span>
          </div>
          <div className="bg-[#8C6D53]/10 p-3 rounded text-[10px] uppercase font-bold tracking-widest text-[#594A3C]">
            {data.venue}
          </div>
        </div>
        
      </div>
    </div>
  );
}
