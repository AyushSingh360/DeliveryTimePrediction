import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-100 rounded-xl">
              <Clock className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Delivery Time Predictor
              </h1>
              <p className="text-gray-500 text-sm">
                AI-powered delivery time estimation
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4" />
            <span>ML Model Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;