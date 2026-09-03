import { InvitationData } from '@/types/invitation';

export default function DesignBabyShower({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-white flex flex-col items-center justify-center p-12 overflow-hidden shadow-2xl rounded-[3rem]">
      {/* Soft floating shapes */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFF5E1] rounded-bl-[100px] z-0 opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E3F2FD] rounded-tr-[100px] z-0 opacity-80"></div>
      
      <div className="relative z-10 w-full h-full flex flex-col text-center border-2 border-dashed border-gray-200 rounded-[2rem] p-8">
        
        <h3 className="text-[#9E9E9E] font-serif text-sm italic mb-2 mt-auto">A little one is on the way!</h3>
        <p className="text-[#81C784] font-bold uppercase tracking-widest text-xs mb-8">
          Join {data.hostName}
        </p>

        <h2 className="font-heading text-4xl text-[#5C6BC0] font-black leading-tight mb-8 drop-shadow-sm">
          {data.title}
        </h2>
        
        <p className="text-gray-600 text-xs leading-loose px-2 max-h-24 overflow-hidden mb-auto">
          {data.message}
        </p>

        <div className="flex flex-col gap-2 bg-white/60 p-4 rounded-xl mt-6">
          <p className="text-[#5C6BC0] font-bold text-sm">{data.date}</p>
          <p className="text-gray-500 text-xs">{data.time}</p>
          <div className="w-8 h-px bg-gray-300 mx-auto my-2"></div>
          <p className="text-[#81C784] font-bold text-xs uppercase tracking-wider">{data.venue}</p>
        </div>

      </div>
    </div>
  );
}
