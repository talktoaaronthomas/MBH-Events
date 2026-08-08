'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials, Testimonial } from '@/data/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Quote icon */}
      <div className="flex justify-center mb-8">
        <div className="w-14 h-14 rounded-full bg-mbh-purple/10 border border-mbh-purple/20 flex items-center justify-center">
          <Quote size={24} className="text-mbh-purple-300" />
        </div>
      </div>

      {/* Testimonial */}
      <div className="relative min-h-[220px] flex items-center justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any as any }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-mbh-white/90 leading-relaxed font-light italic mb-8 px-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
              <span className="font-heading text-base font-semibold text-mbh-white">
                {t.name}
              </span>
              <span className="text-sm text-mbh-white-dim">
                {t.role}
                {t.company && `, ${t.company}`}
              </span>
              <span className="text-xs text-mbh-purple-300 font-medium mt-1">
                {t.eventType}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-white/10 hover:border-mbh-purple/40 flex items-center justify-center text-mbh-white-dim hover:text-mbh-white transition-all duration-300 hover:bg-mbh-purple/10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-8 bg-mbh-purple'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-white/10 hover:border-mbh-purple/40 flex items-center justify-center text-mbh-white-dim hover:text-mbh-white transition-all duration-300 hover:bg-mbh-purple/10"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

