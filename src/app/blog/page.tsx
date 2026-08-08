import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/ui/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal';
import { blogPosts, getBlogCategories } from '@/data/blog-posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Event insights, industry trends, and expert advice from MBH Events. Stay informed about the latest in corporate events, luxury weddings, and experiential design.',
};

export default function BlogPage() {
  const categories = getBlogCategories();

  return (
    <>
      <Hero
        tagline="Insights & Inspiration"
        title="The MBH Events Blog"
        subtitle="Industry trends, event inspiration, and expert insights from our team of event professionals."
        bgImage="/images/blog-hero.jpg"
        size="medium"
      />

      <section className="py-20 lg:py-28">
        <div className="container-mbh">
          {/* Categories */}
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-mbh-purple/20 text-mbh-purple-300 border border-mbh-purple/30 cursor-pointer">
                All Posts
              </span>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-mbh-white-dim border border-white/10 hover:border-mbh-purple/30 hover:text-mbh-purple-300 cursor-pointer transition-all duration-200"
                >
                  {cat}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Blog Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-white/5 bg-mbh-black-card overflow-hidden hover:border-mbh-purple/20 transition-all duration-300"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mbh-black-card to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-mbh-purple/80 text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-mbh-white-dim mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-mbh-white group-hover:text-mbh-purple-300 transition-colors mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-mbh-white-dim leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-medium text-mbh-purple-300 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
