
import ScrollReveal from "../animations/ScrollReveal";

const ScaleSection = () => {
  return (
    <section className="section bg-card relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 items-center">
          <ScrollReveal animation="left">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Scale fast and get new clients <span className="text-gradient">predictably.</span>
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-press-start">1. We use AI carefully, to fill in the blanks.</h3>
                  <p className="text-muted-foreground text-lg">
                    AI is terrible at writing entire emails, and people can easily detect when it's
                    used. But, AI is great at writing tightly-constrained variables. We place
                    these variables inside thoughtful templates written by humans, ensuring
                    that each email feels personal and unique.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-press-start">2. We target by pain, not persona.</h3>
                  <p className="text-muted-foreground text-lg">
                    We'll scour the internet to find buyers that actually have the pain your
                    product solves (ex. open job roles, customer reviews, company news, job
                    changes, and more). Then, we reach out to them with our aligned offer.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-press-start">3. We give you a single control center for >75 inboxes</h3>
                  <p className="text-muted-foreground text-lg">
                    Gone are the volume bottlenecks of 1 SDR = 1 inbox. When you work with
                    us, you send at whatever scale you'd like to send at.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="right" delay={200}>
            <div className="relative rounded-lg border border-white/10 overflow-hidden shadow-xl">
              <img 
                src="https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66ddd94dae04b9432ae7bc66_Untitled%20design%20(24).png"
                alt="Email inbox interface showing lead generation" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ScaleSection;
