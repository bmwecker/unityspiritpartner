import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import { ArrowRight, Clock, User, Calendar, ChevronRight, Phone, ArrowLeft } from "lucide-react";
import SocialShareButtons from "@/components/SocialShareButtons";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/resources" replace />;

  const related = getRelatedPosts(post.relatedSlugs);
  const canonicalUrl = `https://unityspiritpartners.com/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.heroImage,
    author: { "@type": "Organization", name: "Unity Spirit Partners" },
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    description: post.metaDescription,
    publisher: {
      "@type": "Organization",
      name: "Unity Spirit Partners",
      url: "https://unityspiritpartners.com",
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Unity Spirit Partners</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.heroImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.heroImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article className="usp-blog">
        {/* Hero */}
        <header className="relative pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={post.heroImage}
              alt={post.heroAlt}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/resources" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft size={14} /> Back to Resources
              </Link>
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 max-w-4xl leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User size={14} /> Unity Spirit Team</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.datePublished).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="container mx-auto px-4 lg:px-8 max-w-4xl pb-24">
          {/* TOC */}
          <nav className="glass-card rounded-2xl p-6 mb-12">
            <h2 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Table of Contents</h2>
            <ol className="space-y-2">
              {post.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors group">
                    <span className="text-primary/60 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          {post.sections.map((section, i) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mb-12 scroll-mt-24"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-gradient">{section.title}</h2>
              {section.content.map((p, pi) => (
                <p key={pi} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
              {section.imageIndex !== undefined && post.sectionImages[section.imageIndex] && (
                <img
                  src={post.sectionImages[section.imageIndex].src}
                  alt={post.sectionImages[section.imageIndex].alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl mt-6 mb-2 border border-border/30 opacity-80"
                />
              )}
            </motion.section>
          ))}

          {/* Social Share */}
          <div className="flex justify-end mb-8">
            <SocialShareButtons url={canonicalUrl} title={post.title} />
          </div>

          {/* Key Takeaways */}
          <aside className="glass-card rounded-2xl p-8 mb-12 border-l-4 border-primary">
            <h2 className="font-heading font-bold text-lg mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              {post.takeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ChevronRight className="text-primary shrink-0 mt-0.5" size={16} />
                  {t}
                </li>
              ))}
            </ul>
          </aside>

          {/* CTA */}
          <section className="glass-card rounded-2xl p-8 mb-16 text-center bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="font-heading font-bold text-2xl mb-3">Ready to Automate?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Get in touch to discuss automation for your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="gradient" size="lg" asChild>
                <a href="tel:+13658558777" className="flex items-center gap-2">
                  <Phone size={16} /> Call +1 (365) 855-8777
                </a>
              </Button>
            </div>
          </section>

          {/* Author */}
          <footer className="glass-card rounded-2xl p-6 mb-16 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
              USP
            </div>
            <div>
              <p className="font-heading font-semibold text-sm">Unity Spirit Team</p>
              <p className="text-xs text-muted-foreground">Operations technology experts specializing in security-first automation systems.</p>
              <a href="mailto:team@unityspiritpartners.com" className="text-xs text-primary hover:text-primary/80 transition-colors">team@unityspiritpartners.com</a>
            </div>
          </footer>

          {/* Related Posts */}
          {related.length > 0 && (
            <section>
              <h2 className="font-heading font-bold text-2xl mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="glass-card rounded-xl overflow-hidden group block"
                  >
                    <img
                      src={r.heroImage}
                      alt={r.heroAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-40 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="p-5">
                      <span className="text-xs uppercase tracking-wider text-primary">{r.category}</span>
                      <h3 className="font-heading font-semibold text-sm mt-1 mb-2 line-clamp-2">{r.title}</h3>
                      <span className="text-primary text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </Layout>
  );
}
