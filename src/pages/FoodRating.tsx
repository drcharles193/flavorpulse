
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Upload, BarChart3, Info } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import FadeInSection from '@/components/ui/FadeInSection';

const FoodRating = () => {
  const [activeTab, setActiveTab] = useState<'upload' | 'camera'>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<null | {
    score: number;
    name: string;
    category: string;
    analysis: string;
    nutritionalHighlights: string[];
    personalized: boolean;
  }>(null);
  
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setAnalysisResult(null);
    }
  };
  
  const handleCameraCapture = () => {
    // In a real app, this would connect to the device camera
    alert("Camera functionality would be implemented in the full version");
  };
  
  const handleAnalyzeFood = () => {
    if (previewUrl) {
      setIsAnalyzing(true);
      
      // Simulate API call with a timeout
      setTimeout(() => {
        // Mock response - in a real app, this would come from the AI analysis
        setAnalysisResult({
          score: 7.8,
          name: 'Mixed Berry Smoothie Bowl',
          category: 'Breakfast',
          analysis: 'This smoothie bowl is a good match for your nutritional profile. The berries provide antioxidants that align with your DNA markers, and the yogurt base contains probiotics beneficial for your gut microbiome. Consider adding more protein to improve the overall score.',
          nutritionalHighlights: [
            'Rich in antioxidants',
            'Contains probiotics',
            'Good source of fiber',
            'Moderate sugar content'
          ],
          personalized: true
        });
        setIsAnalyzing(false);
      }, 2500);
    }
  };
  
  const getTanScoreColor = (score: number) => {
    if (score >= 8) return 'bg-tan-high';
    if (score >= 4) return 'bg-tan-medium';
    return 'bg-tan-low';
  };
  
  const getTanScoreLabel = (score: number) => {
    if (score >= 8) return 'Excellent Match';
    if (score >= 4) return 'Good Match';
    return 'Poor Match';
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link to="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Dashboard
        </Link>
        
        <FadeInSection>
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Analyze Your Food</h1>
            <p className="text-muted-foreground">
              Upload or take a photo of your food to get a personalized TAN Score and nutritional analysis.
            </p>
          </div>
        </FadeInSection>
        
        <FadeInSection delay={100}>
          <GlassmorphicCard>
            {/* Tab Navigation */}
            <div className="flex border-b border-border mb-6">
              <button
                className={`flex items-center px-4 py-2 border-b-2 font-medium text-sm ${
                  activeTab === 'upload'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('upload')}
              >
                <Upload size={16} className="mr-2" />
                Upload Photo
              </button>
              <button
                className={`flex items-center px-4 py-2 border-b-2 font-medium text-sm ${
                  activeTab === 'camera'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveTab('camera')}
              >
                <Camera size={16} className="mr-2" />
                Take Photo
              </button>
            </div>
            
            {/* Upload Tab Content */}
            {activeTab === 'upload' && (
              <div className="mb-6">
                <div 
                  className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => document.getElementById('food-upload')?.click()}
                >
                  <input
                    type="file"
                    id="food-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-medium mb-1">Click to upload a food photo</p>
                  <p className="text-sm text-muted-foreground">
                    or drag and drop an image file
                  </p>
                  <p className="text-xs text-muted-foreground mt-4">
                    Supports JPG, PNG, HEIC up to 10MB
                  </p>
                </div>
              </div>
            )}
            
            {/* Camera Tab Content */}
            {activeTab === 'camera' && (
              <div className="mb-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-medium mb-4">Take a photo of your food</p>
                  <AnimatedButton onClick={handleCameraCapture}>
                    <Camera size={16} className="mr-2" />
                    Open Camera
                  </AnimatedButton>
                </div>
              </div>
            )}
            
            {/* Preview and Analysis */}
            {previewUrl && (
              <div className="mt-6">
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Preview</h3>
                  <div className="relative rounded-lg overflow-hidden w-full h-64">
                    <img 
                      src={previewUrl} 
                      alt="Food preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {!analysisResult && !isAnalyzing && (
                  <div className="flex justify-center">
                    <AnimatedButton onClick={handleAnalyzeFood}>
                      <BarChart3 size={16} className="mr-2" />
                      Analyze Food
                    </AnimatedButton>
                  </div>
                )}
                
                {isAnalyzing && (
                  <div className="text-center py-8">
                    <div className="inline-block w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                    <p>Analyzing your food...</p>
                  </div>
                )}
              </div>
            )}
            
            {/* Analysis Results */}
            {analysisResult && (
              <FadeInSection className="mt-8 border-t border-border pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">{analysisResult.name}</h2>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {analysisResult.category}
                  </span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center ${getTanScoreColor(analysisResult.score)} bg-opacity-20`}>
                    <div className={`w-16 h-16 rounded-full ${getTanScoreColor(analysisResult.score)} flex items-center justify-center text-white font-bold text-2xl`}>
                      {analysisResult.score.toFixed(1)}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="font-semibold text-lg">TAN Score</h3>
                    <p className="font-medium text-sm">
                      {getTanScoreLabel(analysisResult.score)}
                    </p>
                    {analysisResult.personalized && (
                      <p className="text-xs flex items-center mt-1 text-muted-foreground">
                        <Info size={12} className="mr-1" />
                        Based on your personal profile
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Analysis</h3>
                  <p className="text-muted-foreground text-sm">
                    {analysisResult.analysis}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Nutritional Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.nutritionalHighlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-4 border-t border-border flex justify-between">
                  <AnimatedButton variant="outline" onClick={() => {
                    setSelectedFile(null);
                    setPreviewUrl(null);
                    setAnalysisResult(null);
                  }}>
                    Analyze Another Food
                  </AnimatedButton>
                  <AnimatedButton>
                    Save to Journal
                  </AnimatedButton>
                </div>
              </FadeInSection>
            )}
          </GlassmorphicCard>
        </FadeInSection>
      </div>
    </div>
  );
};

export default FoodRating;
