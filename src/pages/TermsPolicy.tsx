
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Separator } from '@/components/ui/separator';

const TermsPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h1 className="text-gradient text-3xl md:text-4xl font-bold mb-8 leading-tight text-center">
                  Terms & Privacy Policy
                </h1>
              </ScrollReveal>
              
              <div className="prose prose-invert max-w-none">
                <ScrollReveal delay={100}>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">1. Introduction</h2>
                  <p className="text-muted-foreground mb-6">
                    Welcome to Autoikigai.tech. By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">2. Use of Services</h2>
                  <p className="text-muted-foreground mb-6">
                    Autoikigai.tech provides technology consulting and digital transformation services. Our services are available to businesses and individuals who comply with our terms and conditions. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">3. User Accounts</h2>
                  <p className="text-muted-foreground mb-6">
                    When you create an account with us, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. You must notify us immediately of any breach of security or unauthorized use of your account.
                  </p>

                  <Separator className="my-8" />

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">4. Privacy Policy</h2>
                  <p className="text-muted-foreground mb-6">
                    At Autoikigai.tech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold mb-3 mt-8">4.1 Information We Collect</h3>
                  <p className="text-muted-foreground mb-6">
                    We may collect personal information that you voluntarily provide to us when you register for an account, express an interest in obtaining information about us or our products and services, participate in activities on the website, or otherwise contact us.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold mb-3 mt-8">4.2 Use of Your Information</h3>
                  <p className="text-muted-foreground mb-6">
                    We use the information we collect for various business purposes, including to provide, maintain, and improve our services, process transactions, send you marketing communications, respond to your inquiries, and for other legitimate business purposes.
                  </p>

                  <h3 className="text-lg md:text-xl font-bold mb-3 mt-8">4.3 Disclosure of Your Information</h3>
                  <p className="text-muted-foreground mb-6">
                    We may share your information with third-party service providers who perform services on our behalf, with our business partners, in connection with a business transaction, or as required by law or to protect our rights.
                  </p>

                  <Separator className="my-8" />

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">5. Intellectual Property</h2>
                  <p className="text-muted-foreground mb-6">
                    The content, organization, graphics, design, compilation, and other matters related to the website and our services are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistributing, use, or publication of any such content is strictly prohibited without our express permission.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">6. Changes to Terms & Privacy Policy</h2>
                  <p className="text-muted-foreground mb-6">
                    We reserve the right to update or change our Terms of Service and Privacy Policy at any time. We will notify you of any changes by posting the new Terms of Service and Privacy Policy on this page. Changes are effective immediately upon posting.
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-12">7. Contact Information</h2>
                  <p className="text-muted-foreground mb-6">
                    If you have any questions or concerns about our Terms of Service or Privacy Policy, please contact us at info@autoikigai.tech.
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

export default TermsPolicy;
