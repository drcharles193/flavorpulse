
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Dna, Microscope, ChevronRight, User, Settings, LogOut } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import FadeInSection from '@/components/ui/FadeInSection';

const Dashboard = () => {
  const [hasCompletedSurvey, setHasCompletedSurvey] = useState(false);
  const [hasDnaResults, setHasDnaResults] = useState(false);
  const [hasMicrobiomeResults, setHasMicrobiomeResults] = useState(false);
  
  // This would be determined by your authentication and data logic
  const userHasRecommendations = hasCompletedSurvey && (hasDnaResults || hasMicrobiomeResults);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Dashboard Header */}
      <header className="glass border-b border-border/40 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            NutriSync
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Settings size={20} className="text-muted-foreground" />
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <User size={16} className="text-primary" />
              </div>
              <span className="text-sm font-medium">User</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <FadeInSection>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome to Your NutriSync Dashboard</h1>
          <p className="text-muted-foreground mb-8">Begin your journey to personalized nutrition.</p>
        </FadeInSection>
        
        {!userHasRecommendations ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Survey Card */}
            <FadeInSection delay={100}>
              <GlassmorphicCard className="h-full" hoverEffect borderEffect>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Nutrition Survey</h2>
                  <p className="text-muted-foreground flex-grow">
                    Start with our comprehensive survey to help us understand your health, lifestyle, and food preferences.
                  </p>
                  <div className="mt-6">
                    <Link to="/survey">
                      <AnimatedButton className="w-full group">
                        <span>Start Survey</span>
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </GlassmorphicCard>
            </FadeInSection>
            
            {/* DNA Test Card */}
            <FadeInSection delay={200}>
              <GlassmorphicCard className="h-full" hoverEffect borderEffect>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Dna className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">DNA Analysis</h2>
                  <p className="text-muted-foreground flex-grow">
                    Order your DNA test kit to uncover how your genetics influence your ideal nutrition choices.
                  </p>
                  <div className="mt-6">
                    <Link to="/dna-kit">
                      <AnimatedButton variant="outline" className="w-full group">
                        <span>Order DNA Kit</span>
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </GlassmorphicCard>
            </FadeInSection>
            
            {/* Microbiome Test Card */}
            <FadeInSection delay={300}>
              <GlassmorphicCard className="h-full" hoverEffect borderEffect>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Microscope className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Microbiome Test</h2>
                  <p className="text-muted-foreground flex-grow">
                    Analyze your gut health with our microbiome test kit to optimize your food choices for digestive health.
                  </p>
                  <div className="mt-6">
                    <Link to="/microbiome-kit">
                      <AnimatedButton variant="outline" className="w-full group">
                        <span>Order Microbiome Kit</span>
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </GlassmorphicCard>
            </FadeInSection>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Food Recommendations Card */}
            <FadeInSection delay={100}>
              <GlassmorphicCard className="h-full" hoverEffect borderEffect>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Food Recommendations</h2>
                  <p className="text-muted-foreground flex-grow">
                    Discover foods that are perfectly matched to your unique biological profile.
                  </p>
                  <div className="mt-6">
                    <Link to="/food-recommendations">
                      <AnimatedButton className="w-full group">
                        <span>View Recommendations</span>
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </GlassmorphicCard>
            </FadeInSection>
            
            {/* Food Rating Card */}
            <FadeInSection delay={200}>
              <GlassmorphicCard className="h-full" hoverEffect borderEffect>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Food Rating</h2>
                  <p className="text-muted-foreground flex-grow">
                    Take a photo of any food and get an instant TAN Score based on your personal nutrition profile.
                  </p>
                  <div className="mt-6">
                    <Link to="/food-rating">
                      <AnimatedButton className="w-full group">
                        <span>Rate Food</span>
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </GlassmorphicCard>
            </FadeInSection>
          </div>
        )}
        
        {/* Additional Dashboard Sections */}
        <div className="mt-12">
          <FadeInSection>
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FadeInSection delay={100}>
              <GlassmorphicCard>
                <h3 className="font-medium mb-2">Survey</h3>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${hasCompletedSurvey ? 'bg-green-500' : 'bg-muted'}`}></div>
                  <span className="text-sm text-muted-foreground">{hasCompletedSurvey ? 'Completed' : 'Not Started'}</span>
                </div>
              </GlassmorphicCard>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <GlassmorphicCard>
                <h3 className="font-medium mb-2">DNA Analysis</h3>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${hasDnaResults ? 'bg-green-500' : 'bg-muted'}`}></div>
                  <span className="text-sm text-muted-foreground">{hasDnaResults ? 'Results Ready' : 'Not Ordered'}</span>
                </div>
              </GlassmorphicCard>
            </FadeInSection>
            
            <FadeInSection delay={300}>
              <GlassmorphicCard>
                <h3 className="font-medium mb-2">Microbiome Analysis</h3>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${hasMicrobiomeResults ? 'bg-green-500' : 'bg-muted'}`}></div>
                  <span className="text-sm text-muted-foreground">{hasMicrobiomeResults ? 'Results Ready' : 'Not Ordered'}</span>
                </div>
              </GlassmorphicCard>
            </FadeInSection>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
