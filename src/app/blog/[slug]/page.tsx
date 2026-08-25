import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero Image */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 gradient-overlay-gold" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mbh-black to-transparent" />
      </div>

      {/* Article */}
      <article className="relative -mt-32 pb-20 lg:pb-28">
        <div className="container-mbh">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal variant="fadeUp">
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm text-mbh-white-dim hover:text-mbh-gold-300 transition-colors mb-6"
                >
                  <ArrowLeft size={14} />
                  Back to Blog
                </Link>

                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-mbh-gold/20 text-mbh-gold-300 border border-mbh-gold/30 mb-4">
                  {post.category}
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-mbh-white leading-tight mb-6">
                  {post.title}
                </h1>

                <div className="flex items-center gap-6 text-sm text-mbh-white-dim">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <span className="text-mbh-white">{post.author}</span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="prose prose-invert prose-lg max-w-none 
                [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-mbh-white [&_h2]:mt-12 [&_h2]:mb-4
                [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-mbh-white [&_h3]:mt-8 [&_h3]:mb-3
                [&_p]:text-mbh-white-muted [&_p]:leading-relaxed [&_p]:mb-4
                [&_li]:text-mbh-white-muted [&_li]:leading-relaxed
                [&_strong]:text-mbh-white
                [&_hr]:border-white/10 [&_hr]:my-8
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
              ">
                {post.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return <h2 key={i}>{line.replace('## ', '')}</h2>;
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i}>{line.replace('### ', '')}</h3>;
                  }
                  if (line.startsWith('- **')) {
                    const match = line.match(/^- \*\*(.+?)\*\*\s*[-—]\s*(.+)$/);
                    if (match) {
                      return (
                        <p key={i}>
                          <strong>{match[1]}</strong> — {match[2]}
                        </p>
                      );
                    }
                  }
                  if (line.startsWith('- ')) {
                    return <p key={i}>• {line.replace('- ', '')}</p>;
                  }
                  if (line.startsWith('---')) {
                    return <hr key={i} />;
                  }
                  if (line.trim() === '') return null;
                  return <p key={i}>{line}</p>;
                })}
              </div>
            </ScrollReveal>

            {/* Tags */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-mbh-white-dim border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 lg:py-28 border-t border-white/5">
          <div className="container-mbh">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-mbh-white text-center mb-12">
              More from Our Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((related) => (
                <ScrollReveal key={related.slug} variant="fadeUp">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group block rounded-2xl border border-white/5 bg-mbh-black-card overflow-hidden hover:border-mbh-gold/20 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-mbh-white group-hover:text-mbh-gold-300 transition-colors mb-2 leading-tight">
                        {related.title}
                      </h3>
                      <span className="text-sm text-mbh-gold-300 inline-flex items-center gap-1">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
