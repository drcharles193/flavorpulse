
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedButton from '../ui/AnimatedButton';
import FadeInSection from '../ui/FadeInSection';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-30%] top-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-[-20%] bottom-[-5%] -z-10 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeInSection delay={100} direction="up">
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Personalized Nutrition at Your Fingertips
              </span>
            </FadeInSection>

            <FadeInSection delay={200} direction="up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Nutrition Tailored to Your <span className="text-primary">Unique Biology</span>
              </h1>
            </FadeInSection>

            <FadeInSection delay={300} direction="up">
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Unlock the power of personalized nutrition with NutriSync. Our app analyzes your DNA, microbiome, 
                and lifestyle to provide food recommendations specifically tailored to your body's needs.
              </p>
            </FadeInSection>

            <FadeInSection delay={400} direction="up">
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signin">
                  <AnimatedButton 
                    size="lg" 
                    className="w-full sm:w-auto text-base font-medium"
                    icon={<ArrowRight size={18} />}
                  >
                    Start Free Trial
                  </AnimatedButton>
                </Link>
                <Link to="/#how-it-works">
                  <AnimatedButton 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto text-base font-medium"
                  >
                    Learn More
                  </AnimatedButton>
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection delay={500} direction="up">
              <p className="mt-4 text-sm text-muted-foreground">
                No credit card required for trial. Cancel anytime.
              </p>
            </FadeInSection>
          </div>

          {/* Hero Image */}
          <FadeInSection delay={300} direction="left" className="flex-1">
            <div className="relative w-full h-full">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass p-4 shadow-lg">
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 aspect-square flex items-center justify-center">
                  <div className="text-center p-8 animate-float">
                    <div className="mx-auto w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    </div>
                    <p className="text-foreground font-medium">App Screenshot Coming Soon</p>
                    <p className="text-sm text-muted-foreground mt-2">Your personalized food recommendations visualized</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-20 h-20 bg-accent/30 rounded-full blur-xl" />
              <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/4 w-16 h-16 bg-secondary/30 rounded-full blur-lg" />
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default Hero;
