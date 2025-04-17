
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';

const Blog = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h1 className="text-gradient text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Our Blog
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-muted-foreground text-lg mb-12">
                  We're working hard to bring you insightful content about technology, business growth, and innovation.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="bg-card border border-white/5 rounded-lg p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                  <p className="text-muted-foreground">
                    Our blog is currently under development. Check back soon for articles, tutorials, and insights from our team of experts.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
