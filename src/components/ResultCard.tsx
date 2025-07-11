import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { PredictionResult } from '../types/prediction';

interface ResultCardProps {
  prediction: PredictionResult | null;
  isLoading: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ prediction, isLoading }) => {
  if (isLoading) {
    return (
      <div className="card">
        <div className="flex items-center justify-center py-8">
          <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!prediction) {
    return (
      <div className="card">
        <div className="text-center py-8">
          <Clock className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Ready to Predict
          </h3>
          <p className="text-gray-500 text-sm">
            Fill in the delivery parameters to get an estimated delivery time
          </p>
        </div>
      </div>
    );
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600';
    if (confidence >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getConfidenceIcon = (confidence: number) => {
    if (confidence >= 0.8) return <CheckCircle className="w-5 h-5 text-green-600" />;
    return <AlertCircle className="w-5 h-5 text-yellow-600" />;
  };

  return (
    <div className="card">
      <div className="text-center">
        <div className="p-3 bg-primary-100 rounded-full w-fit mx-auto mb-4">
          <Clock className="w-8 h-8 text-primary-600" />
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Predicted Delivery Time
        </h3>
        
        <div className="text-4xl font-bold text-primary-600 mb-4">
          {Math.round(prediction.estimatedTime)} min
        </div>
        
        <div className="flex items-center justify-center space-x-2 mb-4">
          {getConfidenceIcon(prediction.confidence)}
          <span className={`text-sm font-medium ${getConfidenceColor(prediction.confidence)}`}>
            {Math.round(prediction.confidence * 100)}% Confidence
          </span>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600">
            <div className="flex justify-between mb-2">
              <span>Range:</span>
              <span className="font-medium">
                {Math.round(prediction.estimatedTime - 5)} - {Math.round(prediction.estimatedTime + 5)} min
              </span>
            </div>
            <div className="flex justify-between">
              <span>Model Accuracy:</span>
              <span className="font-medium">±3.2 min MAE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;