import { InvitationData } from '@/types/invitation';

export default function DesignSweetSixteen({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-tr from-[#FF6B6B] to-[#FF8E8B] flex flex-col p-8 overflow-hidden shadow-2xl rounded-xl">
      {/* Sparkles / Confetti */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
      <div className="absolute top-32 right-12 w-3 h-3 bg-yellow-300 rounded-full opacity-80 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-4 h-4 bg-purple-300 rounded-sm opacity-60 rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
      
      <div className="bg-white/95 backdrop-blur-md rounded-2xl w-full h-full flex flex-col p-8 text-center shadow-xl border-4 border-white">
        
        <div className="my-auto">
          <h3 className="text-[#FF6B6B] font-bold text-xs uppercase tracking-widest mb-4">
            It's a Party!
          </h3>
          
          <h2 className="font-heading text-5xl font-black text-gray-800 leading-none tracking-tight mb-2">
            {data.title}
          </h2>
          
          <p className="text-purple-500 font-bold text-lg mb-6">
            Hosted by {data.hostName}
          </p>
          
          <div className="w-12 h-1 bg-[#FF6B6B] rounded-full mx-auto mb-6"></div>
          
          <p className="text-gray-600 text-sm leading-relaxed px-2 max-h-24 overflow-hidden font-medium">
            {data.message}
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mt-6 border border-gray-100">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">
            <div className="text-right border-r border-gray-200 pr-2">{data.date}</div>
            <div className="text-left pl-2">{data.time}</div>
          </div>
          <div className="text-[10px] font-bold text-[#FF6B6B] uppercase tracking-widest mt-3">
            {data.venue}
          </div>
        </div>

      </div>
    </div>
  );
}
