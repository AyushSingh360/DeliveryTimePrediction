import React from 'react';
import Header from './components/Header';
import PredictionForm from './components/PredictionForm';
import ResultCard from './components/ResultCard';
import FeatureImportance from './components/FeatureImportance';
import { usePrediction } from './hooks/usePrediction';

function App() {
  const { prediction, isLoading, predict } = usePrediction();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Prediction Form */}
          <div className="lg:col-span-2">
            <PredictionForm onPredict={predict} isLoading={isLoading} />
          </div>
          
          {/* Results */}
          <div className="space-y-6">
            <ResultCard prediction={prediction} isLoading={isLoading} />
            <FeatureImportance />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;