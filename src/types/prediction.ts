export interface PredictionInput {
  distance: string;
  preparationTime: string;
  vehicleType: 'bike' | 'car' | 'scooter';
  weatherCondition: 'clear' | 'rainy' | 'cloudy' | 'stormy';
  trafficCondition: 'light' | 'moderate' | 'heavy';
  dayOfWeek: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  deliveryPersonExperience: string;
}

export interface PredictionResult {
  estimatedTime: number;
  confidence: number;
  factors: {
    distance: number;
    weather: string;
    traffic: string;
    vehicle: string;
  };
}