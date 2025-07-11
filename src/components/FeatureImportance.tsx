import React from 'react';
import { BarChart3 } from 'lucide-react';

const FeatureImportance: React.FC = () => {
  const features = [
    { name: 'Distance', importance: 0.35, color: 'bg-primary-500' },
    { name: 'Prep Time', importance: 0.20, color: 'bg-blue-400' },
    { name: 'Traffic', importance: 0.25, color: 'bg-red-400' },
    { name: 'Weather', importance: 0.15, color: 'bg-yellow-400' },
    { name: 'Vehicle Type', importance: 0.12, color: 'bg-green-400' },
    { name: 'Experience', importance: 0.08, color: 'bg-purple-400' }
  ];

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-gray-100 rounded-lg">
          <BarChart3 className="w-5 h-5 text-gray-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Feature Importance
        </h3>
      </div>
      
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-20 text-sm text-gray-600 text-right">
              {feature.name}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${feature.color} transition-all duration-500`}
                style={{ width: `${feature.importance * 100}%` }}
              />
            </div>
            <div className="w-12 text-sm text-gray-500 text-right">
              {Math.round(feature.importance * 100)}%
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          Feature importance shows how much each factor influences delivery time predictions.
        </p>
      </div>
    </div>
  );
};

export default FeatureImportance;