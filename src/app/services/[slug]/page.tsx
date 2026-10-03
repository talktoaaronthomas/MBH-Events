import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollHighlightText from '@/components/ui/ScrollHighlightText';

import InquiryForm from '@/components/ui/InquiryForm';
import CTABand from '@/components/ui/CTABand';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { services, getServiceBySlug, getRelatedServices } from '@/data/services';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CapabilitiesCarousel from '@/components/ui/CapabilitiesCarousel';


interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.relatedSlugs);

  return (
    <>
      {['luxury-weddings', 'corporate-events', 'event-planning', 'creative-design', 'production-technical', 'talent-entertainment', 'event-staffing', 'logistics-hospitality', 'exhibitions-activations', 'event-rentals'].includes(service.slug) && (
        <link rel="preload" as="video" href={`/videos/${service.slug}.mp4`} type="video/mp4" />
      )}
      {service.slug === 'event-planning' && (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
          /* Apply pastel blue variables to the whole page */
          :root {
            --color-mbh-gold: #A7C7E7 !important;
            --color-mbh-gold-300: #D6E6F4 !important;
            --color-mbh-gold-400: #C5DDF1 !important;
            --color-mbh-gold-600: #89B4D9 !important;
            --color-mbh-gold-950: #1C2B36 !important;
          }

          /* Force all headings to use pastel blue */
          .content-wrapper h1, 
          .content-wrapper h2, 
          .content-wrapper h3, 
          .content-wrapper h4 {
            color: #A7C7E7 !important;
          }
          
          /* Soft pastel blue for text elements to match the theme */
          .content-wrapper .text-white, 
          .content-wrapper .text-mbh-white,
          .content-wrapper p {
            color: #EAF4FC !important;
          }

          .content-wrapper .text-mbh-white-dim {
            color: #C5DDF1 !important;
          }

          /* Services & Capabilities Cards AND Related Cards */
          .content-wrapper .services-card:hover,
          .content-wrapper .related-card:hover {
            border-color: rgba(167, 199, 231, 0.4) !important;
          }
          
          /* Buttons */
          .btn-glow {
            box-shadow: 0 0 20px rgba(167, 199, 231, 0.3) !important;
          }
          .btn-glow:hover {
            box-shadow: 0 0 40px rgba(167, 199, 231, 0.6), 0 0 80px rgba(167, 199, 231, 0.2) !important;
          }
          
          /* Form Fields */
          .content-wrapper form input,
          .content-wrapper form select,
          .content-wrapper form textarea {
            border-color: rgba(167, 199, 231, 0.4) !important;
          }
          .content-wrapper form input:focus,
          .content-wrapper form select:focus,
          .content-wrapper form textarea:focus {
            border-color: rgba(167, 199, 231, 0.8) !important;
            box-shadow: 0 0 0 1px rgba(167, 199, 231, 0.3) !important;
          }

          /* --- Hero Specific Overrides --- */
          /* Override the hardcoded gradient overlay */
          .gradient-overlay-gold {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.5) 0%,
              rgba(28, 43, 54, 0.4) 50%,
              rgba(10, 10, 10, 0.7) 100%
            ) !important;
          }
          
          /* Override Hero button animation and hardcoded purple shadows */
          @keyframes glow-pulse-blue {
            0%, 100% { box-shadow: 0 0 20px rgba(167, 199, 231, 0.4); }
            50% { box-shadow: 0 0 40px rgba(167, 199, 231, 0.7), 0 0 60px rgba(167, 199, 231, 0.3); }
          }
          
          /* Override any hardcoded Tailwind shadow classes in Hero */
          [class*="shadow-[0_0_20px_rgba(168,85,247,"] {
            box-shadow: 0 0 20px rgba(167, 199, 231, 0.4) !important;
          }
          [class*="shadow-[0_0_15px_rgba(168,85,247,"] {
            box-shadow: 0 0 15px rgba(167, 199, 231, 0.2) !important;
          }
          
          /* Override the pulse animation for Hero elements */
          .animate-\\[glow-pulse_3s_ease-in-out_infinite\\] {
            animation: glow-pulse-blue 3s ease-in-out infinite !important;
          }
        `}} />
        </>
      )}
      {service.slug === 'creative-design' && (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
          /* Apply pastel orange variables to the whole page */
          :root {
            --color-mbh-gold: #FAC898 !important;
            --color-mbh-gold-300: #FFE4C4 !important;
            --color-mbh-gold-400: #FFDAB9 !important;
            --color-mbh-gold-600: #F4A460 !important;
            --color-mbh-gold-950: #331C0D !important;
          }

          /* Force all headings to use pastel orange */
          .content-wrapper h1, 
          .content-wrapper h2, 
          .content-wrapper h3, 
          .content-wrapper h4 {
            color: #FAC898 !important;
          }
          
          /* Soft pastel orange tint for text elements to match the theme */
          .content-wrapper .text-white, 
          .content-wrapper .text-mbh-white,
          .content-wrapper p {
            color: #FFF2E6 !important;
          }

          .content-wrapper .text-mbh-white-dim {
            color: #FFE4C4 !important;
          }

          /* Services & Capabilities Cards AND Related Cards */
          .content-wrapper .services-card:hover,
          .content-wrapper .related-card:hover {
            border-color: rgba(250, 200, 152, 0.4) !important;
          }
          
          /* Buttons */
          .btn-glow {
            box-shadow: 0 0 20px rgba(250, 200, 152, 0.3) !important;
          }
          .btn-glow:hover {
            box-shadow: 0 0 40px rgba(250, 200, 152, 0.6), 0 0 80px rgba(250, 200, 152, 0.2) !important;
          }
          
          /* Form Fields */
          .content-wrapper form input,
          .content-wrapper form select,
          .content-wrapper form textarea {
            border-color: rgba(250, 200, 152, 0.4) !important;
          }
          .content-wrapper form input:focus,
          .content-wrapper form select:focus,
          .content-wrapper form textarea:focus {
            border-color: rgba(250, 200, 152, 0.8) !important;
            box-shadow: 0 0 0 1px rgba(250, 200, 152, 0.3) !important;
          }

          /* --- Hero Specific Overrides --- */
          /* Override the hardcoded gradient overlay */
          .gradient-overlay-gold {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.5) 0%,
              rgba(51, 28, 13, 0.4) 50%,
              rgba(10, 10, 10, 0.7) 100%
            ) !important;
          }
          
          /* Override Hero button animation and hardcoded purple shadows */
          @keyframes glow-pulse-orange {
            0%, 100% { box-shadow: 0 0 20px rgba(250, 200, 152, 0.4); }
            50% { box-shadow: 0 0 40px rgba(250, 200, 152, 0.7), 0 0 60px rgba(250, 200, 152, 0.3); }
          }
          
          /* Override any hardcoded Tailwind shadow classes in Hero */
          [class*="shadow-[0_0_20px_rgba(168,85,247,"] {
            box-shadow: 0 0 20px rgba(250, 200, 152, 0.4) !important;
          }
          [class*="shadow-[0_0_15px_rgba(168,85,247,"] {
            box-shadow: 0 0 15px rgba(250, 200, 152, 0.2) !important;
          }
          
          /* Override the pulse animation for Hero elements */
          .animate-\\[glow-pulse_3s_ease-in-out_infinite\\] {
            animation: glow-pulse-orange 3s ease-in-out infinite !important;
          }
        `}} />
        </>
      )}
      {service.slug === 'production-technical' && (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
          /* Apply pastel green variables to the whole page */
          :root {
            --color-mbh-gold: #A8E6CF !important;
            --color-mbh-gold-300: #D4F3E6 !important;
            --color-mbh-gold-400: #C1ECD8 !important;
            --color-mbh-gold-600: #7BC8A4 !important;
            --color-mbh-gold-950: #1A3326 !important;
          }

          /* Force all headings to use pastel green */
          .content-wrapper h1, 
          .content-wrapper h2, 
          .content-wrapper h3, 
          .content-wrapper h4 {
            color: #A8E6CF !important;
          }
          
          /* Soft pastel green tint for text elements to match the theme */
          .content-wrapper .text-white, 
          .content-wrapper .text-mbh-white,
          .content-wrapper p {
            color: #F0FDF6 !important;
          }

          .content-wrapper .text-mbh-white-dim {
            color: #D4F3E6 !important;
          }

          /* Services & Capabilities Cards AND Related Cards */
          .content-wrapper .services-card:hover,
          .content-wrapper .related-card:hover {
            border-color: rgba(168, 230, 207, 0.4) !important;
          }
          
          /* Buttons */
          .btn-glow {
            box-shadow: 0 0 20px rgba(168, 230, 207, 0.3) !important;
          }
          .btn-glow:hover {
            box-shadow: 0 0 40px rgba(168, 230, 207, 0.6), 0 0 80px rgba(168, 230, 207, 0.2) !important;
          }
          
          /* Form Fields */
          .content-wrapper form input,
          .content-wrapper form select,
          .content-wrapper form textarea {
            border-color: rgba(168, 230, 207, 0.4) !important;
          }
          .content-wrapper form input:focus,
          .content-wrapper form select:focus,
          .content-wrapper form textarea:focus {
            border-color: rgba(168, 230, 207, 0.8) !important;
            box-shadow: 0 0 0 1px rgba(168, 230, 207, 0.3) !important;
          }

          /* --- Hero Specific Overrides --- */
          /* Override the hardcoded gradient overlay */
          .gradient-overlay-gold {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.5) 0%,
              rgba(26, 51, 38, 0.4) 50%,
              rgba(10, 10, 10, 0.7) 100%
            ) !important;
          }
          
          /* Override Hero button animation and hardcoded purple shadows */
          @keyframes glow-pulse-green {
            0%, 100% { box-shadow: 0 0 20px rgba(168, 230, 207, 0.4); }
            50% { box-shadow: 0 0 40px rgba(168, 230, 207, 0.7), 0 0 60px rgba(168, 230, 207, 0.3); }
          }
          
          /* Override any hardcoded Tailwind shadow classes in Hero */
          [class*="shadow-[0_0_20px_rgba(168,85,247,"] {
            box-shadow: 0 0 20px rgba(168, 230, 207, 0.4) !important;
          }
          [class*="shadow-[0_0_15px_rgba(168,85,247,"] {
            box-shadow: 0 0 15px rgba(168, 230, 207, 0.2) !important;
          }
          
          /* Override the pulse animation for Hero elements */
          .animate-\\[glow-pulse_3s_ease-in-out_infinite\\] {
            animation: glow-pulse-green 3s ease-in-out infinite !important;
          }
        `}} />
        </>
      )}
      {service.slug === 'talent-entertainment' && (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
          /* Apply pastel red variables to the whole page */
          :root {
            --color-mbh-gold: #FF6961 !important;
            --color-mbh-gold-300: #FFB3B0 !important;
            --color-mbh-gold-400: #FF9B97 !important;
            --color-mbh-gold-600: #E65A54 !important;
            --color-mbh-gold-950: #331513 !important;
          }

          /* Force all headings to use pastel red */
          .content-wrapper h1, 
          .content-wrapper h2, 
          .content-wrapper h3, 
          .content-wrapper h4 {
            color: #FF6961 !important;
          }
          
          /* Soft pastel red tint for text elements to match the theme */
          .content-wrapper .text-white, 
          .content-wrapper .text-mbh-white,
          .content-wrapper p {
            color: #FFF0F0 !important;
          }

          .content-wrapper .text-mbh-white-dim {
            color: #FFB3B0 !important;
          }

          /* Services & Capabilities Cards AND Related Cards */
          .content-wrapper .services-card:hover,
          .content-wrapper .related-card:hover {
            border-color: rgba(255, 105, 97, 0.4) !important;
          }
          
          /* Buttons */
          .btn-glow {
            box-shadow: 0 0 20px rgba(255, 105, 97, 0.3) !important;
          }
          .btn-glow:hover {
            box-shadow: 0 0 40px rgba(255, 105, 97, 0.6), 0 0 80px rgba(255, 105, 97, 0.2) !important;
          }
          
          /* Form Fields */
          .content-wrapper form input,
          .content-wrapper form select,
          .content-wrapper form textarea {
            border-color: rgba(255, 105, 97, 0.4) !important;
          }
          .content-wrapper form input:focus,
          .content-wrapper form select:focus,
          .content-wrapper form textarea:focus {
            border-color: rgba(255, 105, 97, 0.8) !important;
            box-shadow: 0 0 0 1px rgba(255, 105, 97, 0.3) !important;
          }

          /* --- Hero Specific Overrides --- */
          /* Override the hardcoded gradient overlay */
          .gradient-overlay-gold {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.5) 0%,
              rgba(51, 21, 19, 0.4) 50%,
              rgba(10, 10, 10, 0.7) 100%
            ) !important;
          }
          
          /* Override Hero button animation and hardcoded purple shadows */
          @keyframes glow-pulse-red {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 105, 97, 0.4); }
            50% { box-shadow: 0 0 40px rgba(255, 105, 97, 0.7), 0 0 60px rgba(255, 105, 97, 0.3); }
          }
          
          /* Override any hardcoded Tailwind shadow classes in Hero */
          [class*="shadow-[0_0_20px_rgba(168,85,247,"] {
            box-shadow: 0 0 20px rgba(255, 105, 97, 0.4) !important;
          }
          [class*="shadow-[0_0_15px_rgba(168,85,247,"] {
            box-shadow: 0 0 15px rgba(255, 105, 97, 0.2) !important;
          }
          
          /* Override the pulse animation for Hero elements */
          .animate-\\[glow-pulse_3s_ease-in-out_infinite\\] {
            animation: glow-pulse-red 3s ease-in-out infinite !important;
          }
        `}} />
        </>
      )}
      {service.slug === 'event-staffing' && (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
          /* Apply pastel violet variables to the whole page */
          :root {
            --color-mbh-gold: #CBAACB !important;
            --color-mbh-gold-300: #E6D7E6 !important;
            --color-mbh-gold-400: #D9C1D9 !important;
            --color-mbh-gold-600: #A67CA6 !important;
            --color-mbh-gold-950: #261A26 !important;
          }

          /* Force all headings to use pastel violet */
          .content-wrapper h1, 
          .content-wrapper h2, 
          .content-wrapper h3, 
          .content-wrapper h4 {
            color: #CBAACB !important;
          }
          
          /* Soft pastel violet tint for text elements to match the theme */
          .content-wrapper .text-white, 
          .content-wrapper .text-mbh-white,
          .content-wrapper p {
            color: #F7F2F7 !important;
          }

          .content-wrapper .text-mbh-white-dim {
            color: #E6D7E6 !important;
          }

          /* Services & Capabilities Cards AND Related Cards */
          .content-wrapper .services-card:hover,
          .content-wrapper .related-card:hover {
            border-color: rgba(203, 170, 203, 0.4) !important;
          }
          
          /* Buttons */
          .btn-glow {
            box-shadow: 0 0 20px rgba(203, 170, 203, 0.3) !important;
          }
          .btn-glow:hover {
            box-shadow: 0 0 40px rgba(203, 170, 203, 0.6), 0 0 80px rgba(203, 170, 203, 0.2) !important;
          }
          
          /* Form Fields */
          .content-wrapper form input,
          .content-wrapper form select,
          .content-wrapper form textarea {
            border-color: rgba(203, 170, 203, 0.4) !important;
          }
          .content-wrapper form input:focus,
          .content-wrapper form select:focus,
          .content-wrapper form textarea:focus {
            border-color: rgba(203, 170, 203, 0.8) !important;
            box-shadow: 0 0 0 1px rgba(203, 170, 203, 0.3) !important;
          }

          /* --- Hero Specific Overrides --- */
          /* Override the hardcoded gradient overlay */
          .gradient-overlay-gold {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.5) 0%,
              rgba(38, 26, 38, 0.4) 50%,
              rgba(10, 10, 10, 0.7) 100%
            ) !important;
          }
          
          /* Override Hero button animation and hardcoded purple shadows */
          @keyframes glow-pulse-violet {
            0%, 100% { box-shadow: 0 0 20px rgba(203, 170, 203, 0.4); }
            50% { box-shadow: 0 0 40px rgba(203, 170, 203, 0.7), 0 0 60px rgba(203, 170, 203, 0.3); }
          }
          
          /* Override any hardcoded Tailwind shadow classes in Hero */
          [class*="shadow-[0_0_20px_rgba(168,85,247,"] {
            box-shadow: 0 0 20px rgba(203, 170, 203, 0.4) !important;
          }
          [class*="shadow-[0_0_15px_rgba(168,85,247,"] {
            box-shadow: 0 0 15px rgba(203, 170, 203, 0.2) !important;
          }
          
          /* Override the pulse animation for Hero elements */
          .animate-\\[glow-pulse_3s_ease-in-out_infinite\\] {
            animation: glow-pulse-violet 3s ease-in-out infinite !important;
          }
        `}} />
        </>
      )}
      {service.slug === 'logistics-hospitality' && (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
          /* Apply pastel pink variables to the whole page */
          :root {
            --color-mbh-gold: #FFD1DC !important;
            --color-mbh-gold-300: #FFEBF0 !important;
            --color-mbh-gold-400: #FFDEE6 !important;
            --color-mbh-gold-600: #E69CAB !important;
            --color-mbh-gold-950: #332226 !important;
          }

          /* Force all headings to use pastel pink */
          .content-wrapper h1, 
          .content-wrapper h2, 
          .content-wrapper h3, 
          .content-wrapper h4 {
            color: #FFD1DC !important;
          }
          
          /* Soft pastel pink tint for text elements to match the theme */
          .content-wrapper .text-white, 
          .content-wrapper .text-mbh-white,
          .content-wrapper p {
            color: #FFF7F9 !important;
          }

          .content-wrapper .text-mbh-white-dim {
            color: #FFEBF0 !important;
          }

          /* Services & Capabilities Cards AND Related Cards */
          .content-wrapper .services-card:hover,
          .content-wrapper .related-card:hover {
            border-color: rgba(255, 209, 220, 0.4) !important;
          }
          
          /* Buttons */
          .btn-glow {
            box-shadow: 0 0 20px rgba(255, 209, 220, 0.3) !important;
          }
          .btn-glow:hover {
            box-shadow: 0 0 40px rgba(255, 209, 220, 0.6), 0 0 80px rgba(255, 209, 220, 0.2) !important;
          }
          
          /* Form Fields */
          .content-wrapper form input,
          .content-wrapper form select,
          .content-wrapper form textarea {
            border-color: rgba(255, 209, 220, 0.4) !important;
          }
          .content-wrapper form input:focus,
          .content-wrapper form select:focus,
          .content-wrapper form textarea:focus {
            border-color: rgba(255, 209, 220, 0.8) !important;
            box-shadow: 0 0 0 1px rgba(255, 209, 220, 0.3) !important;
          }

          /* --- Hero Specific Overrides --- */
          /* Override the hardcoded gradient overlay */
          .gradient-overlay-gold {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.5) 0%,
              rgba(51, 34, 38, 0.4) 50%,
              rgba(10, 10, 10, 0.7) 100%
            ) !important;
          }
          
          /* Override Hero button animation and hardcoded purple shadows */
          @keyframes glow-pulse-pink {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 209, 220, 0.4); }
            50% { box-shadow: 0 0 40px rgba(255, 209, 220, 0.7), 0 0 60px rgba(255, 209, 220, 0.3); }
          }
          
          /* Override any hardcoded Tailwind shadow classes in Hero */
          [class*="shadow-[0_0_20px_rgba(168,85,247,"] {
            box-shadow: 0 0 20px rgba(255, 209, 220, 0.4) !important;
          }
          [class*="shadow-[0_0_15px_rgba(168,85,247,"] {
            box-shadow: 0 0 15px rgba(255, 209, 220, 0.2) !important;
          }
          
          /* Override the pulse animation for Hero elements */
          .animate-\\[glow-pulse_3s_ease-in-out_infinite\\] {
            animation: glow-pulse-pink 3s ease-in-out infinite !important;
          }
        `}} />
        </>
      )}
      {service.slug === 'exhibitions-activations' && (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
          /* Apply pastel grey variables to the whole page */
          :root {
            --color-mbh-gold: #D1D5DB !important;
            --color-mbh-gold-300: #F3F4F6 !important;
            --color-mbh-gold-400: #E5E7EB !important;
            --color-mbh-gold-600: #9CA3AF !important;
            --color-mbh-gold-950: #111827 !important;
          }

          /* Force all headings to use pastel grey */
          .content-wrapper h1, 
          .content-wrapper h2, 
          .content-wrapper h3, 
          .content-wrapper h4 {
            color: #D1D5DB !important;
          }
          
          /* Soft pastel grey tint for text elements to match the theme */
          .content-wrapper .text-white, 
          .content-wrapper .text-mbh-white,
          .content-wrapper p {
            color: #F9FAFB !important;
          }

          .content-wrapper .text-mbh-white-dim {
            color: #F3F4F6 !important;
          }

          /* Services & Capabilities Cards AND Related Cards */
          .content-wrapper .services-card:hover,
          .content-wrapper .related-card:hover {
            border-color: rgba(209, 213, 219, 0.4) !important;
          }
          
          /* Buttons */
          .btn-glow {
            box-shadow: 0 0 20px rgba(209, 213, 219, 0.3) !important;
          }
          .btn-glow:hover {
            box-shadow: 0 0 40px rgba(209, 213, 219, 0.6), 0 0 80px rgba(209, 213, 219, 0.2) !important;
          }
          
          /* Form Fields */
          .content-wrapper form input,
          .content-wrapper form select,
          .content-wrapper form textarea {
            border-color: rgba(209, 213, 219, 0.4) !important;
          }
          .content-wrapper form input:focus,
          .content-wrapper form select:focus,
          .content-wrapper form textarea:focus {
            border-color: rgba(209, 213, 219, 0.8) !important;
            box-shadow: 0 0 0 1px rgba(209, 213, 219, 0.3) !important;
          }

          /* --- Hero Specific Overrides --- */
          /* Override the hardcoded gradient overlay */
          .gradient-overlay-gold {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.5) 0%,
              rgba(17, 24, 39, 0.4) 50%,
              rgba(10, 10, 10, 0.7) 100%
            ) !important;
          }
          
          /* Override Hero button animation and hardcoded purple shadows */
          @keyframes glow-pulse-grey {
            0%, 100% { box-shadow: 0 0 20px rgba(209, 213, 219, 0.4); }
            50% { box-shadow: 0 0 40px rgba(209, 213, 219, 0.7), 0 0 60px rgba(209, 213, 219, 0.3); }
          }
          
          /* Override any hardcoded Tailwind shadow classes in Hero */
          [class*="shadow-[0_0_20px_rgba(168,85,247,"] {
            box-shadow: 0 0 20px rgba(209, 213, 219, 0.4) !important;
          }
          [class*="shadow-[0_0_15px_rgba(168,85,247,"] {
            box-shadow: 0 0 15px rgba(209, 213, 219, 0.2) !important;
          }
          
          /* Override the pulse animation for Hero elements */
          .animate-\\[glow-pulse_3s_ease-in-out_infinite\\] {
            animation: glow-pulse-grey 3s ease-in-out infinite !important;
          }
        `}} />
        </>
      )}
      {service.slug === 'event-rentals' && (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
          /* Apply pastel white variables to the whole page */
          :root {
            --color-mbh-gold: #F5F5F5 !important;
            --color-mbh-gold-300: #FFFFFF !important;
            --color-mbh-gold-400: #FAFAFA !important;
            --color-mbh-gold-600: #D4D4D4 !important;
            --color-mbh-gold-950: #171717 !important;
          }

          /* Force all headings to use pastel white */
          .content-wrapper h1, 
          .content-wrapper h2, 
          .content-wrapper h3, 
          .content-wrapper h4 {
            color: #F5F5F5 !important;
          }
          
          /* Soft pastel white tint for text elements to match the theme */
          .content-wrapper .text-white, 
          .content-wrapper .text-mbh-white,
          .content-wrapper p {
            color: #FFFFFF !important;
          }

          .content-wrapper .text-mbh-white-dim {
            color: #FAFAFA !important;
          }

          /* Services & Capabilities Cards AND Related Cards */
          .content-wrapper .services-card:hover,
          .content-wrapper .related-card:hover {
            border-color: rgba(245, 245, 245, 0.4) !important;
          }
          
          /* Buttons */
          .btn-glow {
            box-shadow: 0 0 20px rgba(245, 245, 245, 0.3) !important;
          }
          .btn-glow:hover {
            box-shadow: 0 0 40px rgba(245, 245, 245, 0.6), 0 0 80px rgba(245, 245, 245, 0.2) !important;
          }
          
          /* Form Fields */
          .content-wrapper form input,
          .content-wrapper form select,
          .content-wrapper form textarea {
            border-color: rgba(245, 245, 245, 0.4) !important;
          }
          .content-wrapper form input:focus,
          .content-wrapper form select:focus,
          .content-wrapper form textarea:focus {
            border-color: rgba(245, 245, 245, 0.8) !important;
            box-shadow: 0 0 0 1px rgba(245, 245, 245, 0.3) !important;
          }

          /* --- Hero Specific Overrides --- */
          /* Override the hardcoded gradient overlay */
          .gradient-overlay-gold {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.5) 0%,
              rgba(23, 23, 23, 0.4) 50%,
              rgba(10, 10, 10, 0.7) 100%
            ) !important;
          }
          
          /* Override Hero button animation and hardcoded purple shadows */
          @keyframes glow-pulse-white {
            0%, 100% { box-shadow: 0 0 20px rgba(245, 245, 245, 0.4); }
            50% { box-shadow: 0 0 40px rgba(245, 245, 245, 0.7), 0 0 60px rgba(245, 245, 245, 0.3); }
          }
          
          /* Override any hardcoded Tailwind shadow classes in Hero */
          [class*="shadow-[0_0_20px_rgba(168,85,247,"] {
            box-shadow: 0 0 20px rgba(245, 245, 245, 0.4) !important;
          }
          [class*="shadow-[0_0_15px_rgba(168,85,247,"] {
            box-shadow: 0 0 15px rgba(245, 245, 245, 0.2) !important;
          }
          
          /* Override the pulse animation for Hero elements */
          .animate-\\[glow-pulse_3s_ease-in-out_infinite\\] {
            animation: glow-pulse-white 3s ease-in-out infinite !important;
          }
        `}} />
        </>
      )}
      {service.slug === 'luxury-weddings' && (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
            body {
              background-color: #FBE9C7 !important;
            }
          
          /* Apply variables only within content-wrapper so Hero and Navbar stay white */
          .content-wrapper {
            --color-mbh-gold: #2E2618 !important;
            --color-mbh-gold-300: #2E2618 !important;
            --color-mbh-gold-400: #2E2618 !important;
            --color-mbh-gold-600: #2E2618 !important;
            --color-mbh-white: #2E2618 !important;
            --color-mbh-white-dim: rgba(46, 38, 24, 0.8) !important;
            --color-mbh-black-card: #FBE9C7 !important;
            --color-mbh-black: #FBE9C7 !important;
            --color-mbh-black-light: #FBE9C7 !important;
            --color-mbh-gold-950: #FBE9C7 !important;
            --color-white: #2E2618 !important;
          }

          /* Force all headings and text elements to use the dark color */
          .content-wrapper .text-white, 
          .content-wrapper .text-mbh-white, 
          .content-wrapper .text-mbh-white-dim, 
          .content-wrapper h1, 
          .content-wrapper h2, 
          .content-wrapper h3, 
          .content-wrapper h4, 
          .content-wrapper p, 
          .content-wrapper span {
            color: #2E2618 !important;
          }

          /* Services & Capabilities Cards AND Related Cards */
          .content-wrapper .services-card,
          .content-wrapper .related-card {
            background-color: #2E2618 !important;
            border-color: rgba(250, 250, 250, 0.1) !important;
          }
          .content-wrapper .services-card h3,
          .content-wrapper .services-card p,
          .content-wrapper .services-card span,
          .content-wrapper .services-card .text-mbh-white,
          .content-wrapper .services-card .text-mbh-white-dim,
          .content-wrapper .related-card h4,
          .content-wrapper .related-card p,
          .content-wrapper .related-card span,
          .content-wrapper .related-card .text-mbh-white,
          .content-wrapper .related-card .text-mbh-gold-300 {
            color: #FAFAFA !important;
          }
          
          /* Form CTA Buttons */
          .content-wrapper .btn-glow,
          .content-wrapper .btn-glow * {
            color: #FAFAFA !important;
          }
          .content-wrapper form .btn-glow {
            box-shadow: none !important;
          }
          .content-wrapper form .btn-glow::after {
            display: none !important;
          }
          
          /* Form Fields */
          .content-wrapper form input,
          .content-wrapper form select,
          .content-wrapper form textarea {
            border-color: rgba(139, 109, 56, 0.4) !important;
          }
          .content-wrapper form input:focus,
          .content-wrapper form select:focus,
          .content-wrapper form textarea:focus {
            border-color: rgba(139, 109, 56, 0.8) !important;
            box-shadow: 0 0 0 1px rgba(139, 109, 56, 0.3) !important;
          }
          
          /* Ensure gradient sections have the correct background */
          .content-wrapper .gradient-section {
            background: #FBE9C7 !important;
          }
          
          /* Override borders */
          .content-wrapper .border-white\\/5 {
            border-color: rgba(46, 38, 24, 0.1) !important;
          }
        `}} />
        </>
      )}
      {['event-planning', 'creative-design', 'production-technical', 'talent-entertainment', 'event-staffing', 'logistics-hospitality', 'exhibitions-activations', 'event-rentals'].includes(service.slug) && (
        <style dangerouslySetInnerHTML={{ __html: `
          body .btn-glow,
          body .btn-glow *,
          .content-wrapper .btn-glow,
          .content-wrapper .btn-glow * {
            color: var(--color-mbh-gold-950) !important;
          }
        `}} />
      )}
      {/* Hero */}
      <Hero
        tagline={service.emoji + ' ' + service.title}
        title={service.tagline}
        subtitle={service.shortDescription}
        ctaText="Get a Quote"
        ctaHref="#inquiry"
        bgImage={['luxury-weddings', 'corporate-events', 'event-planning', 'creative-design', 'production-technical', 'talent-entertainment', 'event-staffing', 'logistics-hospitality', 'exhibitions-activations', 'event-rentals'].includes(service.slug) ? undefined : service.heroImage}
        videoEmbed={
          ['luxury-weddings', 'corporate-events', 'event-planning', 'creative-design', 'production-technical', 'talent-entertainment', 'event-staffing', 'logistics-hospitality', 'exhibitions-activations', 'event-rentals'].includes(service.slug) ? (
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
              poster={service.heroImage}
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src={`/videos/${service.slug}.mp4`} type="video/mp4" />
            </video>
          ) : undefined
        }
        size="large"
      />

      <div className="content-wrapper">
        {/* Schema markup */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.fullDescription,
            provider: {
              '@type': 'LocalBusiness',
              name: 'MBH Events',
            },
          }),
        }}
      />

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-mbh-white mb-6">
                  About This Service
                </h2>
                <div className="accent-line mx-auto" />
              </div>
            </ScrollReveal>
            <ScrollHighlightText text={service.fullDescription} />
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <SectionHeading
            label="What's Included"
            title="Services & Capabilities"
            subtitle="Everything we deliver as part of this service line."
          />

          {['corporate-events', 'luxury-weddings'].includes(service.slug) ? (
            <CapabilitiesCarousel 
              includedServices={service.includedServices}
              slug={service.slug}
              galleryImages={service.galleryImages}
            />
          ) : (
            <div className="relative w-full overflow-hidden flex group py-4">
              <div className="flex gap-6 animate-[scroll-marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max px-3">
                {[...service.includedServices, ...service.includedServices].map((item, index) => (
                  <div key={`${item.title}-${index}`} className="w-[320px] md:w-[450px] shrink-0">
                    <div className="services-card rounded-xl border border-white/5 bg-mbh-black-card overflow-hidden hover:border-mbh-gold/20 transition-all duration-300 h-full group/card flex flex-col">
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="font-heading text-xl font-semibold text-mbh-white mb-3 flex items-start gap-2">
                          <CheckCircle size={20} className="text-mbh-gold-300 flex-shrink-0 mt-1" />
                          {item.title}
                        </h3>
                        <p className="text-sm text-mbh-white-dim leading-relaxed whitespace-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Process */}
      <section className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <SectionHeading
            label="Our Approach"
            title="How We Work"
            subtitle="A proven process that ensures exceptional outcomes."
          />

          <div className="max-w-3xl mx-auto">
            {service.process.map((step, index) => (
              <ScrollReveal key={step.step} variant="fadeUp" delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full bg-mbh-gold/10 border border-mbh-gold/30 flex items-center justify-center font-heading font-bold text-lg flex-shrink-0 ${service.slug === 'luxury-weddings' ? 'text-black' : 'text-mbh-gold-300'}`}>
                      {index + 1}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="w-[1px] flex-1 bg-gradient-to-b from-mbh-gold/30 to-transparent mt-3" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-heading text-lg font-semibold text-mbh-white mb-2">
                      {step.step}
                    </h3>
                    <p className="text-sm text-mbh-white-dim leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          <SectionHeading
            label="Why Us"
            title="Why Choose MBH Events"
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.whyChooseUs.map((reason, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-4 p-5 md:p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                  <CheckCircle size={20} className="text-mbh-gold flex-shrink-0 mt-0.5" />
                  <span className="text-base text-mbh-white/90 leading-relaxed">{reason}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 lg:py-28 border-t border-white/5">
          <div className="container-mbh">
            <SectionHeading
              label="Related Services"
              title="You Might Also Need"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((related) => (
                <ScrollReveal key={related.slug} variant="fadeUp">
                  <Link
                    href={`/services/${related.slug}`}
                    className="related-card relative flex flex-col p-5 md:p-6 rounded-xl border border-white/5 bg-mbh-black-card hover:border-mbh-gold/30 transition-all duration-300 group overflow-hidden aspect-square"
                  >
                    <Image
                      src={related.heroImage}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mbh-black-card via-mbh-black-card/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />
                    
                    <div className="relative z-10 mt-auto">
                      <h4 className="font-heading text-base sm:text-lg font-semibold text-mbh-white group-hover:text-mbh-gold-300 transition-colors mb-3 drop-shadow-md">
                        {related.title}
                      </h4>
                      <span className="text-xs font-semibold text-mbh-gold-300 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 lg:py-28 gradient-section">
        <div className="container-mbh">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              label="Get Started"
              title={`Inquire About ${service.title}`}
              subtitle="Tell us about your event and we'll create a tailored proposal."
            />
            <div className="p-8 rounded-2xl border border-white/5 bg-mbh-black-card">
              <InquiryForm preSelectedEventType={service.title} />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
