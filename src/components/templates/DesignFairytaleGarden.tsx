import { InvitationData } from '@/types/invitation';

export default function DesignFairytaleGarden({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-[#FAFAF8] flex flex-col items-center p-12 overflow-hidden shadow-2xl text-center">
      {/* Soft pastel gradients to mimic floral/garden vibe */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFE4E1]/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E0EEE0]/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 flex flex-col items-center h-full w-full">
        <p className="text-[#8FBC8F] font-serif text-sm italic mb-2 mt-4">
          You are warmly invited
        </p>
        <p className="text-[#CD5C5C] text-xs uppercase tracking-widest mb-8 font-semibold">
          {data.hostName}
        </p>
        
        <h2 className="font-serif text-5xl text-[#2F4F4F] font-normal mb-8 leading-tight">
          {data.title}
        </h2>
        
        <p className="text-[#556B2F] text-sm leading-relaxed px-4 max-h-32 overflow-hidden mb-auto">
          {data.message}
        </p>

        <div className="w-full flex items-center justify-center my-8 gap-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8FBC8F] to-transparent"></div>
        </div>

        <div className="text-[#2F4F4F] font-serif text-lg mb-2">
          {data.date}
        </div>
        <div className="text-[#CD5C5C] font-serif text-sm italic mb-6">
          {data.time}
        </div>
        
        <p className="text-[#556B2F] text-xs uppercase tracking-wider font-semibold">
          {data.venue}
        </p>
      </div>
    </div>
  );
}
