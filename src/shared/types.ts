export enum SpotType {
  street_spot = "Street Spot",
  skatepark = "Skate Park",
  park = "Park",
  parking_lot = "Parking Lot",
  court = "Court",
  downhill = "Downhill",
  square = "Square",
  other = "Other"
}

export interface Spot {
  id: string;
  latitude: string;
  longitude: string;
  name: string;
  description: string;
  type: keyof SpotType;
  image: string;
  obstacles: string[];
}