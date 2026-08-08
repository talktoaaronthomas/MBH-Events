'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().optional(),
  budgetRange: z.string().optional(),
  guestCount: z.string().optional(),
  message: z.string().min(10, 'Please provide some details about your event'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  preSelectedEventType?: string;
  compact?: boolean;
}

const eventTypes = [
  'Corporate Conference',
  'Gala Dinner & Awards',
  'Product Launch',
  'Luxury Wedding',
  'Destination Wedding',
  'Private Celebration',
  'Exhibition & Brand Activation',
  'Concert & Entertainment',
  'Corporate Retreat',
  'Other',
];

const budgetRanges = [
  'Under $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000+',
  'Prefer to Discuss',
];

export default function InquiryForm({ preSelectedEventType, compact = false }: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      eventType: preSelectedEventType || '',
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClasses =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-mbh-white placeholder:text-mbh-white-dim/50 focus:border-mbh-purple/50 focus:ring-1 focus:ring-mbh-purple/30 focus:outline-none transition-all duration-200';
  const errorClasses = 'text-xs text-red-400 mt-1';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-mbh-white mb-2">
          Thank You!
        </h3>
        <p className="text-sm text-mbh-white-dim">
          We&apos;ve received your inquiry and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-5`}>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-mbh-white/80 mb-1.5">
            Full Name *
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            placeholder="John Doe"
            className={inputClasses}
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-mbh-white/80 mb-1.5">
            Email Address *
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            placeholder="john@company.com"
            className={inputClasses}
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-mbh-white/80 mb-1.5">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            id="phone"
            type="tel"
            placeholder="+971 50 123 4567"
            className={inputClasses}
          />
          {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-mbh-white/80 mb-1.5">
            Event Type *
          </label>
          <select
            {...register('eventType')}
            id="eventType"
            className={`${inputClasses} appearance-none cursor-pointer`}
          >
            <option value="" className="bg-mbh-black">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type} className="bg-mbh-black">
                {type}
              </option>
            ))}
          </select>
          {errors.eventType && <p className={errorClasses}>{errors.eventType.message}</p>}
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-mbh-white/80 mb-1.5">
            Event Date
          </label>
          <input
            {...register('eventDate')}
            id="eventDate"
            type="date"
            className={inputClasses}
          />
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium text-mbh-white/80 mb-1.5">
            Budget Range
          </label>
          <select
            {...register('budgetRange')}
            id="budgetRange"
            className={`${inputClasses} appearance-none cursor-pointer`}
          >
            <option value="" className="bg-mbh-black">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-mbh-black">
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Guest Count */}
        {!compact && (
          <div className="sm:col-span-2">
            <label htmlFor="guestCount" className="block text-sm font-medium text-mbh-white/80 mb-1.5">
              Estimated Guest Count
            </label>
            <input
              {...register('guestCount')}
              id="guestCount"
              type="text"
              placeholder="e.g. 200-300 guests"
              className={inputClasses}
            />
          </div>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-mbh-white/80 mb-1.5">
          Tell Us About Your Event *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={compact ? 3 : 5}
          placeholder="Share your vision, goals, and any specific requirements..."
          className={`${inputClasses} resize-none`}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>

      {/* Error state */}
      {status === 'error' && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
          <AlertCircle size={16} />
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-glow w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-semibold text-white inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Inquiry
          </>
        )}
      </button>
    </form>
  );
}
