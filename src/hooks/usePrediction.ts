import { useState } from 'react';
import { PredictionInput, PredictionResult } from '../types/prediction';

export const usePrediction = () => {
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const predict = async (input: PredictionInput) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock prediction logic based on the input parameters
    const baseTime = parseFloat(input.distance) * 2.5; // Base time from distance
    
    // Add preparation time to the base calculation
    const prepTime = parseFloat(input.preparationTime) || 0;
    
    // Adjust for vehicle type
    const vehicleMultiplier = {
      bike: 1.0,
      scooter: 0.9,
      car: 1.2
    }[input.vehicleType] || 1.0;
    
    // Adjust for weather
    const weatherMultiplier = {
      clear: 1.0,
      cloudy: 1.1,
      rainy: 1.3,
      stormy: 1.5
    }[input.weatherCondition] || 1.0;
    
    // Adjust for traffic
    const trafficMultiplier = {
      light: 1.0,
      moderate: 1.2,
      heavy: 1.5
    }[input.trafficCondition] || 1.0;
    
    // Adjust for time of day
    const timeMultiplier = {
      morning: 1.1,
      afternoon: 1.0,
      evening: 1.2,
      night: 0.9
    }[input.timeOfDay] || 1.0;
    
    // Adjust for experience (more experience = faster delivery)
    const experienceMultiplier = Math.max(0.8, 1 - (parseFloat(input.deliveryPersonExperience) * 0.02));
    
    const deliveryTime = baseTime * vehicleMultiplier * weatherMultiplier * trafficMultiplier * timeMultiplier * experienceMultiplier;
    const estimatedTime = deliveryTime + prepTime; // Add preparation time to delivery time
    
    // Calculate confidence based on various factors
    const confidence = Math.min(0.95, 0.7 + (parseFloat(input.deliveryPersonExperience) * 0.02) + (input.weatherCondition === 'clear' ? 0.1 : 0));
    
    const result: PredictionResult = {
      estimatedTime: Math.max(5, estimatedTime), // Minimum 5 minutes
      confidence,
      factors: {
        distance: parseFloat(input.distance),
        weather: input.weatherCondition,
        traffic: input.trafficCondition,
        vehicle: input.vehicleType
      }
    };
    
    setPrediction(result);
    setIsLoading(false);
  };

  return { prediction, isLoading, predict };
};