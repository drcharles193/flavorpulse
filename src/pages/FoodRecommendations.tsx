
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ThumbsUp, ThumbsDown, Bookmark, Share2 } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import FadeInSection from '@/components/ui/FadeInSection';

// Sample food recommendations data
const recommendations = [
  {
    id: 1,
    name: 'Wild-Caught Salmon',
    category: 'Protein',
    description: 'Rich in omega-3 fatty acids, which your genetics indicate you process efficiently.',
    tanScore: 9.2,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww',
    benefits: ['High quality protein', 'Omega-3 fatty acids', 'Vitamin D', 'Low in contaminants'],
    matches: ['DNA: Strong omega-3 metabolism', 'Microbiome: Supports gut diversity'],
  },
  {
    id: 2,
    name: 'Avocado',
    category: 'Healthy Fat',
    description: 'Contains monounsaturated fats that align with your metabolic profile.',
    tanScore: 8.7,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D',
    benefits: ['Healthy fats', 'Fiber', 'Potassium', 'Antioxidants'],
    matches: ['DNA: Efficient fat metabolism', 'Survey: Aligns with dietary preferences'],
  },
  {
    id: 3,
    name: 'Blueberries',
    category: 'Fruit',
    description: 'High in antioxidants that complement your DNA profile.',
    tanScore: 9.5,
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJpZXN8ZW58MHx8MHx8fDA%3D',
    benefits: ['Antioxidants', 'Low glycemic impact', 'Vitamin K', 'Fiber'],
    matches: ['DNA: Antioxidant needs', 'Microbiome: Prebiotic benefits'],
  },
  {
    id: 4,
    name: 'Greek Yogurt',
    category: 'Dairy',
    description: 'Provides probiotics that support your specific gut microbiome.',
    tanScore: 8.3,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9ndXJ0fGVufDB8fDB8fHww',
    benefits: ['Probiotics', 'Protein', 'Calcium', 'Low in lactose'],
    matches: ['Microbiome: Supports beneficial bacteria', 'Survey: Lactose tolerance indicated'],
  }
];

const FoodRecommendations = () => {
  // Function to get TAN score color
  const getTanScoreColor = (score: number) => {
    if (score >= 8) return 'bg-tan-high';
    if (score >= 4) return 'bg-tan-medium';
    return 'bg-tan-low';
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <Link to="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Dashboard
        </Link>
        
        <FadeInSection>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Personalized Food Recommendations</h1>
            <p className="text-muted-foreground">
              Based on your DNA, microbiome, and survey responses, these foods are optimal for your unique biology.
            </p>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((food, index) => (
            <FadeInSection key={food.id} delay={index * 100} direction="up">
              <GlassmorphicCard className="h-full overflow-hidden" hoverEffect borderEffect>
                <div className="flex flex-col h-full">
                  <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                    <img 
                      src={food.image} 
                      alt={food.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      <span className={`w-2.5 h-2.5 rounded-full ${getTanScoreColor(food.tanScore)}`}></span>
                      <span>TAN {food.tanScore}</span>
                    </div>
                  </div>
                  
                  <div className="mb-2 flex justify-between items-start">
                    <div>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {food.category}
                      </span>
                      <h2 className="text-xl font-bold mt-2">{food.name}</h2>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {food.description}
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Benefits:</h3>
                    <div className="flex flex-wrap gap-2">
                      {food.benefits.map((benefit, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Matches Your Profile:</h3>
                    <ul className="text-xs space-y-1 pl-4 list-disc text-muted-foreground">
                      {food.matches.map((match, i) => (
                        <li key={i}>{match}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border flex justify-between">
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full hover:bg-muted transition-colors">
                        <ThumbsUp size={16} className="text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-muted transition-colors">
                        <ThumbsDown size={16} className="text-muted-foreground" />
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full hover:bg-muted transition-colors">
                        <Bookmark size={16} className="text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-muted transition-colors">
                        <Share2 size={16} className="text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </FadeInSection>
          ))}
        </div>
        
        <FadeInSection delay={300}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to discover more personalized food options?
            </p>
            <AnimatedButton>
              Load More Recommendations
            </AnimatedButton>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default FoodRecommendations;
