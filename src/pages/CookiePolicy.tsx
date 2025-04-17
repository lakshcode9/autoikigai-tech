
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';

const CookiePolicy = () => {
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
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h1 className="text-gradient text-3xl md:text-4xl font-bold mb-8 leading-tight text-center">
                  Cookie Policy
                </h1>
              </ScrollReveal>
              
              <div className="prose prose-invert max-w-none">
                <ScrollReveal delay={100}>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">What are Cookies?</h2>
                  <p className="text-muted-foreground mb-6">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">How We Use Cookies</h2>
                  <p className="text-muted-foreground mb-6">
                    We use cookies for several purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>Essential cookies: These are necessary for the website to function properly.</li>
                    <li>Analytical/performance cookies: These allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
                    <li>Functionality cookies: These are used to recognize you when you return to our website.</li>
                    <li>Targeting cookies: These record your visit to our website, the pages you have visited, and the links you have followed.</li>
                  </ul>

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">Third-Party Cookies</h2>
                  <p className="text-muted-foreground mb-6">
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">Controlling Cookies</h2>
                  <p className="text-muted-foreground mb-6">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">More Information</h2>
                  <p className="text-muted-foreground mb-6">
                    For more information about cookies, please visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a>.
                  </p>

                  <p className="text-muted-foreground mt-12 text-sm">
                    Last Updated: April 17, 2025
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
