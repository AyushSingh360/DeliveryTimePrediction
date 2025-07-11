import React, { useState } from 'react';
import { Calculator, MapPin, Package, Clock, User } from 'lucide-react';
import { PredictionInput } from '../types/prediction';

interface PredictionFormProps {
  onPredict: (input: PredictionInput) => void;
  isLoading: boolean;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onPredict, isLoading }) => {
  const [formData, setFormData] = useState<PredictionInput>({
    distance: '',
    preparationTime: '',
    vehicleType: 'bike',
    weatherCondition: 'clear',
    trafficCondition: 'light',
    dayOfWeek: 'monday',
    timeOfDay: 'morning',
    deliveryPersonExperience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPredict(formData);
  };

  const handleInputChange = (field: keyof PredictionInput, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-primary-100 rounded-lg">
          <Calculator className="w-5 h-5 text-primary-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Delivery Parameters
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Distance */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4" />
              <span>Distance (km)</span>
            </label>
            <input
              type="number"
              step="0.1"
              className="input-field"
              placeholder="Enter distance"
              value={formData.distance}
              onChange={(e) => handleInputChange('distance', e.target.value)}
              required
            />
          </div>

          {/* Preparation Time */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4" />
              <span>Preparation Time (min)</span>
            </label>
            <input
              type="number"
              step="1"
              className="input-field"
              placeholder="Enter preparation time"
              value={formData.preparationTime}
              onChange={(e) => handleInputChange('preparationTime', e.target.value)}
              required
            />
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Vehicle Type
            </label>
            <select
              className="select-field"
              value={formData.vehicleType}
              onChange={(e) => handleInputChange('vehicleType', e.target.value)}
            >
              <option value="bike">Bike</option>
              <option value="car">Car</option>
              <option value="scooter">Scooter</option>
            </select>
          </div>

          {/* Weather Condition */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Weather Condition
            </label>
            <select
              className="select-field"
              value={formData.weatherCondition}
              onChange={(e) => handleInputChange('weatherCondition', e.target.value)}
            >
              <option value="clear">Clear</option>
              <option value="rainy">Rainy</option>
              <option value="cloudy">Cloudy</option>
              <option value="stormy">Stormy</option>
            </select>
          </div>

          {/* Traffic Condition */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Traffic Condition
            </label>
            <select
              className="select-field"
              value={formData.trafficCondition}
              onChange={(e) => handleInputChange('trafficCondition', e.target.value)}
            >
              <option value="light">Light</option>
              <option value="moderate">Moderate</option>
              <option value="heavy">Heavy</option>
            </select>
          </div>

          {/* Day of Week */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Day of Week
            </label>
            <select
              className="select-field"
              value={formData.dayOfWeek}
              onChange={(e) => handleInputChange('dayOfWeek', e.target.value)}
            >
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
          </div>

          {/* Time of Day */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4" />
              <span>Time of Day</span>
            </label>
            <select
              className="select-field"
              value={formData.timeOfDay}
              onChange={(e) => handleInputChange('timeOfDay', e.target.value)}
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
          </div>

          {/* Delivery Person Experience */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
              <User className="w-4 h-4" />
              <span>Delivery Experience (years)</span>
            </label>
            <input
              type="number"
              step="0.1"
              className="input-field"
              placeholder="Enter experience"
              value={formData.deliveryPersonExperience}
              onChange={(e) => handleInputChange('deliveryPersonExperience', e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Predicting...</span>
            </>
          ) : (
            <>
              <Calculator className="w-4 h-4" />
              <span>Predict Delivery Time</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PredictionForm;