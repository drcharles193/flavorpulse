
import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import { Dna, Microscope, FileText, Utensils, Camera, BarChart3 } from 'lucide-react';
import { GlowingEffect } from '../ui/glowing-effect';

const features = [
  {
    icon: <FileText className="text-primary w-8 h-8" />,
    title: 'Detailed Survey',
    description: 'Answer questions about your health, lifestyle, and preferences to start your personalization journey.',
    delay: 100
  },
  {
    icon: <Dna className="text-primary w-8 h-8" />,
    title: 'DNA Analysis',
    description: 'Discover how your genetic makeup affects your nutritional needs with our simple at-home testing kit.',
    delay: 200
  },
  {
    icon: <Microscope className="text-primary w-8 h-8" />,
    title: 'Microbiome Testing',
    description: 'Understand your gut health and how it influences your ideal food choices.',
    delay: 300
  },
  {
    icon: <Utensils className="text-primary w-8 h-8" />,
    title: 'Personalized Recommendations',
    description: 'Get AI-powered food suggestions tailored to your unique biological profile.',
    delay: 100
  },
  {
    icon: <Camera className="text-primary w-8 h-8" />,
    title: 'Food Rating System',
    description: 'Take a photo of any food and get an instant rating based on how well it matches your nutritional needs.',
    delay: 200
  },
  {
    icon: <BarChart3 className="text-primary w-8 h-8" />,
    title: 'TAN Score',
    description: 'Our proprietary rating system from 1-10 tells you exactly how suitable a food is for your body.',
    delay: 300
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Nutrition Science Meets AI Technology</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our comprehensive approach combines multiple data sources to create your personalized nutrition profile.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={index} delay={feature.delay} direction="up">
              <div className="relative h-full">
                <GlassmorphicCard className="h-full" hoverEffect borderEffect>
                  <GlowingEffect 
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="flex flex-col h-full">
                    <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </GlassmorphicCard>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
