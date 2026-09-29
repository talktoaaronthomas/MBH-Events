'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { ArrowLeft, Copy, Check, ExternalLink, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

import { 
  InvitationData, 
  TemplateId, 
  defaultInvitationData, 
  encodeInvitationData 
} from '@/types/invitation';
import TemplatePreview from '@/components/templates/TemplatePreview';

export default function TemplateEditorPage() {
  const params = useParams();
  const router = useRouter();
  const templateId = params.id as TemplateId;

  const [isCopied, setIsCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [view, setView] = useState<'edit' | 'preview'>('edit'); // For mobile tabs

  const { register, control, watch, formState: { errors } } = useForm<InvitationData>({
    defaultValues: defaultInvitationData,
    mode: 'onChange'
  });

  const { fields: timelineFields, append: appendTimeline, remove: removeTimeline } = useFieldArray({
    control,
    name: "timeline"
  });

  // Watch all fields to update preview in real-time
  const formData = watch();

  useEffect(() => {
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
    <div className="flex flex-col gap-1">
      <label className="text-[13px] text-mbh-white-muted font-medium">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-mbh-white focus:outline-none focus:border-mbh-gold/50 focus:ring-1 focus:ring-mbh-gold/30 transition-all min-h-[72px] resize-y"
        />
      ) : type === 'checkbox' ? (
        <label className="flex items-center gap-2 cursor-pointer mt-1">
          <input
            type="checkbox"
            {...register(name)}
            className="w-4 h-4 rounded border-white/20 bg-white/5 text-mbh-gold focus:ring-mbh-gold/30"
          />
          <span className="text-sm text-mbh-white">{placeholder}</span>
        </label>
      ) : type === 'select' ? (
        <select
          {...register(name)}
          className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-mbh-white focus:outline-none focus:border-mbh-gold/50 focus:ring-1 focus:ring-mbh-gold/30 transition-all"
        >
          <option value="gold">Kasavu Gold</option>
          <option value="maroon">Temple Maroon</option>
          <option value="peacock">Peacock Blue</option>
        </select>
      ) : (
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-mbh-white focus:outline-none focus:border-mbh-gold/50 focus:ring-1 focus:ring-mbh-gold/30 transition-all"
        />
      )}
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-mbh-black pt-20 lg:pt-24 text-mbh-white overflow-hidden">
      {/* Top Bar */}
      <header className="flex-none flex items-center justify-between px-4 py-3 bg-mbh-black-card border-b border-white/10 z-10">
        <div className="flex items-center gap-4 flex-1">
          <Link 
            href="/templates" 
            className="p-2 -ml-2 text-mbh-white-dim hover:text-mbh-white hover:bg-white/5 rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-[15px] font-semibold text-mbh-white leading-tight">
              {templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              <span className="font-normal text-mbh-white-dim ml-2 hidden sm:inline">template editor</span>
            </h1>
          </div>
        </div>

        {/* Mobile Tabs */}
        <div className="flex lg:hidden bg-white/5 p-1 rounded-lg">
          <button 
            onClick={() => setView('edit')}
            className={`px-3 py-1.5 text-[13px] rounded-md transition-colors ${view === 'edit' ? 'bg-mbh-white text-mbh-black font-medium' : 'text-mbh-white-dim'}`}
          >
            Edit
          </button>
          <button 
            onClick={() => setView('preview')}
            className={`px-3 py-1.5 text-[13px] rounded-md transition-colors ${view === 'preview' ? 'bg-mbh-white text-mbh-black font-medium' : 'text-mbh-white-dim'}`}
          >
            Preview
          </button>
        </div>
      </header>

      {/* Main App Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Editor Sidebar (Left) */}
        <aside 
          className={`${view === 'edit' ? 'flex' : 'hidden'} lg:flex flex-col w-full lg:w-[420px] lg:min-w-[340px] bg-mbh-black border-r border-white/10 overflow-y-auto`}
        >
          <details className="border-b border-white/10 group" open>
            <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[15px] cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
              Colour variant
              <span className="text-mbh-white-dim group-open:hidden">+</span>
              <span className="text-mbh-white-dim hidden group-open:inline">−</span>
            </summary>
            <div className="px-5 pb-5 pt-1 grid gap-4">
              <InputField label="Theme Color" name="variant" type="select" />
            </div>
          </details>

          <details className="border-b border-white/10 group" open>
            <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[15px] cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
              Couple
              <span className="text-mbh-white-dim group-open:hidden">+</span>
              <span className="text-mbh-white-dim hidden group-open:inline">−</span>
            </summary>
            <div className="px-5 pb-5 pt-1 grid gap-4">
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Bride" name="couple.bride" placeholder="Bride's name" />
                <InputField label="Groom" name="couple.groom" placeholder="Groom's name" />
              </div>
              <InputField label="Bride's family" name="couple.brideFamily" type="textarea" />
              <InputField label="Groom's family" name="couple.groomFamily" type="textarea" />
              <InputField name="sections.family" type="checkbox" placeholder="Show family section" />
            </div>
          </details>

          <details className="border-b border-white/10 group" open>
            <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[15px] cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
              Wording
              <span className="text-mbh-white-dim group-open:hidden">+</span>
              <span className="text-mbh-white-dim hidden group-open:inline">−</span>
            </summary>
            <div className="px-5 pb-5 pt-1 grid gap-4">
              <InputField label="Opening line" name="greeting" placeholder="e.g. With the blessings of our elders" />
              <InputField label="Invitation message" name="message" type="textarea" placeholder="We joyfully invite you..." />
            </div>
          </details>

          <details className="border-b border-white/10 group" open>
            <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[15px] cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
              Date & muhurtham
              <span className="text-mbh-white-dim group-open:hidden">+</span>
              <span className="text-mbh-white-dim hidden group-open:inline">−</span>
            </summary>
            <div className="px-5 pb-5 pt-1 grid gap-4">
              <InputField label="Wedding date" name="date" type="date" />
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Muhurtham from" name="muhurtham.start" type="time" />
                <InputField label="to" name="muhurtham.end" type="time" />
              </div>
              <InputField name="sections.countdown" type="checkbox" placeholder="Show calendar and countdown" />
            </div>
          </details>

          <details className="border-b border-white/10 group">
            <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[15px] cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
              Venues
              <span className="text-mbh-white-dim group-open:hidden">+</span>
              <span className="text-mbh-white-dim hidden group-open:inline">−</span>
            </summary>
            <div className="px-5 pb-5 pt-1 grid gap-4">
              <InputField label="Ceremony venue" name="ceremony.venue" />
              <InputField label="Ceremony address" name="ceremony.address" />
              
              <div className="border-t border-white/10 pt-4 mt-2">
                <InputField name="reception.enabled" type="checkbox" placeholder="Add a reception" />
              </div>
              
              {formData?.reception?.enabled && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <InputField label="Reception date" name="reception.date" type="date" />
                    <InputField label="Time" name="reception.time" type="time" />
                  </div>
                  <InputField label="Reception venue" name="reception.venue" />
                  <InputField label="Reception address" name="reception.address" />
                </>
              )}
            </div>
          </details>
          
          <details className="border-b border-white/10 group">
            <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[15px] cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
              Dress code
              <span className="text-mbh-white-dim group-open:hidden">+</span>
              <span className="text-mbh-white-dim hidden group-open:inline">−</span>
            </summary>
            <div className="px-5 pb-5 pt-1 grid gap-4">
              <InputField name="dress.enabled" type="checkbox" placeholder="Show dress code" />
              {formData?.dress?.enabled && (
                <InputField label="Note for guests" name="dress.text" type="textarea" />
              )}
            </div>
          </details>

          <details className="border-b border-white/10 group">
            <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[15px] cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
              Programme
              <span className="text-mbh-white-dim group-open:hidden">+</span>
              <span className="text-mbh-white-dim hidden group-open:inline">−</span>
            </summary>
            <div className="px-5 pb-5 pt-1 grid gap-4">
              <InputField name="sections.timeline" type="checkbox" placeholder="Show programme" />
              
              {formData?.sections?.timeline && (
                <div className="grid gap-3 mt-2">
                  {timelineFields.map((field, index) => (
                    <div key={field.id} className="flex gap-2 items-center bg-white/5 p-2 rounded-md border border-white/10">
                      <div className="w-24">
                        <input
                          type="time"
                          {...register(`timeline.${index}.time` as const)}
                          className="w-full bg-transparent border border-white/20 rounded px-2 py-1 text-sm text-mbh-white"
                        />
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          {...register(`timeline.${index}.title` as const)}
                          placeholder="What happens"
                          className="w-full bg-transparent border border-white/20 rounded px-2 py-1 text-sm text-mbh-white"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeTimeline(index)}
                        className="text-red-400 hover:text-red-300 p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    onClick={() => appendTimeline({ time: '12:00', title: 'New item' })}
                    className="flex items-center justify-center gap-2 w-full py-2 border border-white/10 rounded-md text-sm hover:bg-white/5 transition-colors"
                  >
                    <Plus size={16} /> Add Item
                  </button>
                </div>
              )}
            </div>
          </details>

          <details className="border-b border-white/10 group" open>
            <summary className="flex items-center justify-between px-5 py-4 font-semibold text-[15px] cursor-pointer list-none select-none hover:bg-white/5 transition-colors">
              Guest Link
              <span className="text-mbh-white-dim group-open:hidden">+</span>
              <span className="text-mbh-white-dim hidden group-open:inline">−</span>
            </summary>
            <div className="px-5 pb-5 pt-1 grid gap-4">
              <p className="text-[13px] text-mbh-white-dim leading-relaxed">
                Your invitation updates in real-time. Copy the link below to share it with your guests.
              </p>
              
              <div className="bg-white/5 border border-white/10 border-dashed rounded-md p-3">
                <p className="text-[13px] text-mbh-white font-mono break-all line-clamp-2">
                  {shareUrl || 'Generating link...'}
                </p>
              </div>

              <div className="flex gap-2 mt-1">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-mbh-white text-mbh-black text-[13px] font-semibold rounded-md hover:bg-gray-200 transition-colors"
                >
                  {isCopied ? <Check size={14} /> : <Copy size={14} />}
                  {isCopied ? 'Copied' : 'Copy'}
                </button>
                <button
                  type="button"
                  onClick={handlePreviewLink}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white/10 border border-white/10 text-[13px] font-semibold rounded-md hover:bg-white/20 transition-colors"
                >
                  <ExternalLink size={14} />
                  Test Link
                </button>
              </div>
            </div>
          </details>
          
          <div className="p-10"></div> {/* Extra padding at bottom for scrolling */}
        </aside>

        {/* Stage (Right/Preview) */}
        <main 
          className={`${view === 'preview' ? 'flex' : 'hidden'} lg:flex flex-1 overflow-y-auto bg-[#141615] items-center justify-center p-6 lg:p-10 relative`}
        >
          {/* Subtle background for the stage area */}
          <div className="absolute inset-0 bg-gradient-to-br from-mbh-gold/5 to-transparent opacity-50 pointer-events-none"></div>
          
          {/* Phone Frame */}
          <div className="w-full max-w-[410px] h-[min(800px,95%)] bg-[#1a1a1a] rounded-[28px] p-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative z-10 flex flex-col">
            <div className="w-full flex-1 bg-white rounded-[20px] overflow-hidden relative">
              <div className="absolute inset-0 overflow-y-auto hide-scrollbar">
                <TemplatePreview 
                  templateId={templateId} 
                  data={formData as InvitationData} 
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Hide scrollbar for the phone frame inner content */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
