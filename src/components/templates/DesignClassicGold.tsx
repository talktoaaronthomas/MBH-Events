import { InvitationData } from '@/types/invitation';

export default function DesignClassicGold({ data }: { data: InvitationData }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-mbh-black flex items-center justify-center p-8 overflow-hidden shadow-2xl">
      {/* Decorative Gold Border */}
      <div className="absolute inset-4 border border-mbh-gold/40 z-0"></div>
      <div className="absolute inset-[20px] border border-mbh-gold/20 z-0"></div>
      
      {/* Corner Ornaments */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-mbh-gold z-10"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-mbh-gold z-10"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-mbh-gold z-10"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-mbh-gold z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center flex flex-col items-center justify-center h-full w-full">
        <span className="text-mbh-gold-300 tracking-[0.3em] uppercase text-xs font-semibold mb-6">
          {data.hostName}
        </span>
        <span className="text-mbh-white-dim text-sm italic mb-2">requests the pleasure of your company at</span>
        
        <h2 className="font-heading text-4xl text-mbh-white font-bold my-8 text-gradient-gold leading-tight px-4">
          {data.title}
        </h2>
        
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-mbh-gold to-transparent mb-8"></div>
        
        <p className="text-mbh-white/80 text-sm leading-relaxed px-6 mb-8 max-h-32 overflow-hidden text-ellipsis">
          {data.message}
        </p>

        <div className="mt-auto space-y-2 text-sm text-mbh-gold-200 uppercase tracking-widest font-medium">
          <p>{data.date}</p>
          <p>{data.time}</p>
        </div>
        
        <div className="mt-8 text-xs text-mbh-white-dim uppercase tracking-wider px-6">
          <p>{data.venue}</p>
        </div>
      </div>
    </div>
  );
}
