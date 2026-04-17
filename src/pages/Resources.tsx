import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";

const ALL = "All";

export default function Resources() {
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((p) => p.category)));
    return [ALL, ...cats];
  }, []);

  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <Layout>
      <Helmet>
        <title>Resources & Insights | Unity Spirit Partners</title>
        <meta name="description" content="Expert articles on AI automation, cybersecurity, document parsing, and technical SEO for operations-driven organizations." />
        <link rel="canonical" href="https://unityspiritpartners.com/resources" />
        <meta property="og:title" content="Resources & Insights | Unity Spirit Partners" />
        <meta property="og:description" content="Expert articles on AI automation, cybersecurity, document parsing, and technical SEO for operations-driven organizations." />
        <meta property="og:url" content="https://unityspiritpartners.com/resources" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://unityspiritpartners.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resources & Insights | Unity Spirit Partners" />
        <meta name="twitter:description" content="Expert articles on AI automation, cybersecurity, document parsing, and technical SEO for operations-driven organizations." />
        <meta name="twitter:image" content="https://unityspiritpartners.com/og-image.png" />
      </Helmet>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Resources</p>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Insights & <span className="text-gradient">Guides</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical insights on operations automation, security architecture, and digital transformation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="glass-card rounded-xl overflow-hidden group block h-full"
                  >
                    <img
                      src={post.heroImage}
                      alt={post.heroAlt}
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-48 object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-wider text-primary">{post.category}</span>
                      <h3 className="font-heading font-semibold text-lg mt-2 mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read article <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
