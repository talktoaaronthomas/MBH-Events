'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { decodeInvitationData, InvitationData, TemplateId } from '@/types/invitation';
import TemplatePreview from '@/components/templates/TemplatePreview';
import { motion } from 'framer-motion';

function InviteContent() {
  const searchParams = useSearchParams();
  const templateId = (searchParams.get('t') as TemplateId) || 'classic-gold';
  const encodedData = searchParams.get('data');

  const [data, setData] = useState<InvitationData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (encodedData) {
      const decoded = decodeInvitationData(encodedData);
      if (decoded) {
        setData(decoded);
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  }, [encodedData]);

  if (error) {
    return (
      <div className="min-h-screen bg-mbh-black flex items-center justify-center p-4 text-center">
        <div className="bg-mbh-black-light border border-white/10 p-8 rounded-2xl max-w-md">
          <h1 className="text-2xl font-heading font-bold text-mbh-white mb-4">Oops!</h1>
          <p className="text-mbh-white-dim">
            This invitation link appears to be broken or invalid. Please request a new link from the host.
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-mbh-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-mbh-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mbh-black flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Decorative ambient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-mbh-gold/5 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <TemplatePreview templateId={templateId} data={data} />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 text-center relative z-10"
      >
        <p className="text-xs text-mbh-white-dim uppercase tracking-widest mb-2">Powered by</p>
        <p className="text-sm font-semibold text-mbh-gold-300">MBH Events</p>
      </motion.div>
    </div>
  );
}

export default function InvitePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-mbh-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-mbh-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <InviteContent />
    </Suspense>
  );
}
