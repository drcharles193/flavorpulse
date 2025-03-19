
import React from 'react';
import { Check } from 'lucide-react';
import AnimatedButton from '../ui/AnimatedButton';
import FadeInSection from '../ui/FadeInSection';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with a free trial and upgrade to our full service to unlock personalized nutrition insights.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Trial */}
          <FadeInSection delay={100} direction="up">
            <GlassmorphicCard className="h-full border border-border" hoverEffect>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Free Trial</span>
                  <h3 className="mt-4 text-2xl font-bold">1 Month Free</h3>
                  <p className="mt-2 text-muted-foreground">Get started with basic features</p>
                  
                  <div className="mt-6 pb-6 border-b border-border">
                    <span className="text-2xl font-bold">$0</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Full Survey Access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Basic Food Recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">5 Food Analysis Scans</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link to="/signin">
                    <AnimatedButton className="w-full" variant="outline">
                      Start Free Trial
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </GlassmorphicCard>
          </FadeInSection>
          
          {/* Monthly Subscription */}
          <FadeInSection delay={200} direction="up">
            <GlassmorphicCard className="h-full border-2 border-primary relative" hoverEffect>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Most Popular
                </span>
              </div>
              
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Monthly</span>
                  <h3 className="mt-4 text-2xl font-bold">Premium</h3>
                  <p className="mt-2 text-muted-foreground">Full access to all features</p>
                  
                  <div className="mt-6 pb-6 border-b border-border">
                    <span className="text-2xl font-bold">$9.99</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">All Free Trial Features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Advanced AI Food Recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Unlimited Food Analysis Scans</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Progress Tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Premium Support</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link to="/signin">
                    <AnimatedButton className="w-full">
                      Subscribe Now
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </GlassmorphicCard>
          </FadeInSection>
          
          {/* Testing Kits */}
          <FadeInSection delay={300} direction="up">
            <GlassmorphicCard className="h-full border border-border" hoverEffect>
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Add-Ons</span>
                  <h3 className="mt-4 text-2xl font-bold">Testing Kits</h3>
                  <p className="mt-2 text-muted-foreground">One-time purchases</p>
                  
                  <div className="mt-6 pb-6 border-b border-border">
                    <span className="text-2xl font-bold">From $99</span>
                    <span className="text-muted-foreground ml-1">/kit</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">DNA Analysis Kit ($149)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Microbiome Testing Kit ($99)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Complete Bundle ($199)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Free Shipping</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="ml-2">Lab Analysis Included</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Link to="/signin">
                    <AnimatedButton className="w-full" variant="outline">
                      View Testing Kits
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </GlassmorphicCard>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
