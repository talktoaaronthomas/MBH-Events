'use client';

import { useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoBackground({ url }: { url: string }) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div 
        className={`absolute inset-0 w-[150%] h-[150%] md:w-[120%] md:h-[120%] lg:w-[120%] lg:h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
      >
        <ReactPlayer
          url={url}
          playing
          muted
          loop
          playsinline
          controls={false}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: { modestbranding: 1, rel: 0, iv_load_policy: 3, disablekb: 1 }
            }
          }}
          onReady={() => setIsReady(true)}
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
}
