
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedButton from '@/components/ui/AnimatedButton';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import FadeInSection from '@/components/ui/FadeInSection';

// Survey questions data
const surveyQuestions = [
  {
    id: 1,
    question: 'What is your primary goal for using NutriSync?',
    options: [
      'Improve overall health',
      'Weight management',
      'Increase energy',
      'Address food sensitivities',
      'Optimize athletic performance',
      'Other'
    ]
  },
  {
    id: 2,
    question: 'Do you have any known food allergies or intolerances?',
    options: [
      'No known allergies',
      'Lactose intolerance',
      'Gluten sensitivity',
      'Nut allergies',
      'Shellfish allergies',
      'Other'
    ]
  },
  {
    id: 3,
    question: 'How would you describe your current diet?',
    options: [
      'Omnivore (eat everything)',
      'Vegetarian',
      'Vegan',
      'Pescatarian',
      'Keto/Low-carb',
      'Paleo',
      'Other'
    ]
  },
  {
    id: 4,
    question: 'How often do you exercise?',
    options: [
      'Rarely',
      '1-2 times per week',
      '3-4 times per week',
      '5+ times per week',
      'Multiple times daily'
    ]
  },
  {
    id: 5,
    question: 'How would you rate your daily stress levels?',
    options: [
      'Very low',
      'Low',
      'Moderate',
      'High',
      'Very high'
    ]
  }
];

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      // Save current answer
      setAnswers({
        ...answers,
        [surveyQuestions[currentQuestion].id]: selectedOption
      });
      
      // Move to next question or complete
      if (currentQuestion < surveyQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setIsCompleted(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[surveyQuestions[currentQuestion - 1].id] || null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link to="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Dashboard
        </Link>

        {!isCompleted ? (
          <FadeInSection>
            <GlassmorphicCard className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-muted">
                <div 
                  className="h-full bg-primary transition-all duration-500" 
                  style={{ width: `${((currentQuestion + 1) / surveyQuestions.length) * 100}%` }}
                ></div>
              </div>
              
              <div className="pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    Question {currentQuestion + 1} of {surveyQuestions.length}
                  </span>
                </div>
                
                <h1 className="text-2xl font-bold mb-6">
                  {surveyQuestions[currentQuestion].question}
                </h1>
                
                <div className="space-y-3 mb-8">
                  {surveyQuestions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      className={`w-full p-4 rounded-lg text-left transition-all ${
                        selectedOption === option
                          ? 'bg-primary/10 border border-primary'
                          : 'bg-muted/50 hover:bg-muted/80 border border-transparent'
                      }`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      <div className="flex items-center">
                        <div 
                          className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                            selectedOption === option 
                              ? 'border-primary bg-primary/20' 
                              : 'border-muted-foreground'
                          }`}
                        >
                          {selectedOption === option && (
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                          )}
                        </div>
                        <span className="ml-3">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <AnimatedButton
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className={currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                  >
                    Previous
                  </AnimatedButton>
                  
                  <AnimatedButton
                    onClick={handleNext}
                    disabled={!selectedOption}
                    className={!selectedOption ? 'opacity-50 cursor-not-allowed' : ''}
                  >
                    {currentQuestion === surveyQuestions.length - 1 ? 'Complete' : 'Next'}
                    <ArrowRight size={16} className="ml-2" />
                  </AnimatedButton>
                </div>
              </div>
            </GlassmorphicCard>
          </FadeInSection>
        ) : (
          <FadeInSection>
            <GlassmorphicCard className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-4">Survey Completed!</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Thank you for completing the survey. Your responses have been saved and will be used to personalize your nutrition recommendations.
              </p>
              
              <Link to="/dashboard">
                <AnimatedButton size="lg">
                  Return to Dashboard
                </AnimatedButton>
              </Link>
            </GlassmorphicCard>
          </FadeInSection>
        )}
      </div>
    </div>
  );
};

export default Survey;
