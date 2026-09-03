'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowLeft, Copy, Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';

import { 
  InvitationData, 
  TemplateId, 
  defaultInvitationData, 
  encodeInvitationData 
} from '@/types/invitation';
import TemplatePreview from '@/components/templates/TemplatePreview';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required').max(50, 'Title is too long'),
  hostName: z.string().min(1, 'Host name is required').max(50, 'Host name is too long'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  venue: z.string().min(1, 'Venue is required').max(100, 'Venue is too long'),
  message: z.string().max(300, 'Message is too long'),
});

export default function TemplateEditorPage() {
  const params = useParams();
  const router = useRouter();
  const templateId = params.id as TemplateId;

  const [isCopied, setIsCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  const { register, watch, formState: { errors } } = useForm<InvitationData>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultInvitationData,
    mode: 'onChange'
  });

  // Watch all fields to update preview in real-time
  const formData = watch();

  useEffect(() => {
    // Generate the shareable URL whenever the form data changes
    if (typeof window !== 'undefined') {
      const encodedData = encodeInvitationData(formData as InvitationData);
      const url = `${window.location.origin}/invite?t=${templateId}&data=${encodedData}`;
      setShareUrl(url);
    }
  }, [formData, templateId]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePreviewLink = () => {
    window.open(shareUrl, '_blank');
  };

  const InputField = ({ label, name, type = 'text', placeholder }: any) => (
    <div className="mb-5">
      <label className="block text-sm font-medium text-mbh-white-muted mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          rows={4}
          className="w-full bg-mbh-black-light border border-white/10 rounded-lg px-4 py-3 text-mbh-white focus:outline-none focus:border-mbh-gold/50 focus:ring-1 focus:ring-mbh-gold/30 transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className="w-full bg-mbh-black-light border border-white/10 rounded-lg px-4 py-3 text-mbh-white focus:outline-none focus:border-mbh-gold/50 focus:ring-1 focus:ring-mbh-gold/30 transition-all"
        />
      )}
      {errors[name as keyof InvitationData] && (
        <p className="text-red-400 text-xs mt-2">
          {errors[name as keyof InvitationData]?.message}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-12 lg:pt-32 bg-mbh-black flex flex-col">
      <div className="container-mbh flex-1 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/templates" 
            className="inline-flex items-center gap-2 text-sm font-medium text-mbh-white-dim hover:text-mbh-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Templates
          </Link>
          <h1 className="font-heading text-2xl font-bold text-mbh-white hidden sm:block">
            Customize Invitation
          </h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1">
          
          {/* Left Pane: Editor */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="bg-mbh-black-card border border-white/5 rounded-2xl p-6 sm:p-8 flex-1">
              <h2 className="text-xl font-semibold text-mbh-white mb-6">Event Details</h2>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <div className="sm:col-span-2">
                    <InputField label="Event Title" name="title" placeholder="e.g. You're Invited" />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label="Host Name" name="hostName" placeholder="e.g. John Doe & Family" />
                  </div>
                  <InputField label="Date" name="date" placeholder="e.g. December 31, 2026" />
                  <InputField label="Time" name="time" placeholder="e.g. 8:00 PM" />
                  <div className="sm:col-span-2">
                    <InputField label="Venue / Location" name="venue" placeholder="e.g. The Grand Ballroom, Dubai" />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label="Personal Message" name="message" type="textarea" placeholder="Add a welcome message or extra details..." />
                  </div>
                </div>
              </form>

            </div>

            {/* Share Actions */}
            <div className="mt-6 bg-mbh-gold/5 border border-mbh-gold/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-mbh-gold-300 mb-2">Share Invitation</h3>
              <p className="text-sm text-mbh-white-dim mb-6">
                Your invitation is updated in real-time. Copy the link below to share it with your guests. No sign-up required!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopyLink}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-mbh-gold hover:bg-mbh-gold-400 text-white font-semibold rounded-lg transition-colors"
                >
                  {isCopied ? <Check size={18} /> : <Copy size={18} />}
                  {isCopied ? 'Copied!' : 'Copy Link'}
                </button>
                <button
                  onClick={handlePreviewLink}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-mbh-white font-semibold rounded-lg transition-colors"
                >
                  <ExternalLink size={18} />
                  Test Link
                </button>
              </div>
            </div>
          </div>

          {/* Right Pane: Live Preview */}
          <div className="w-full lg:w-1/2 sticky top-32 h-fit">
            <div className="bg-mbh-black-light border border-white/5 rounded-2xl p-8 flex items-center justify-center min-h-[600px] shadow-inner">
               <div className="w-full max-w-sm transform transition-all duration-300 hover:scale-[1.02]">
                 <TemplatePreview 
                   templateId={templateId} 
                   data={formData as InvitationData} 
                 />
               </div>
            </div>
            <p className="text-center text-xs text-mbh-white-dim mt-4">
              Live Preview
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
