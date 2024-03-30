export type ClimbingType = {
  id: number;
  name: string;
};

export type SearchValues = {
  location: number[];
  depatureDate: string;
  climbingType: any;
  rockType: string;
  gradeRange: string[];
  driveLength: number[];
};

export type Coords = {
  lng: string;
  lat: string;
};


export interface Crag {
  cragID: number;
  name: string;
  country: string;
  faces: string;
  location: string;
  osx: string;
  osy: string;
  rockType: string;
  routeCount: number;
  ukcURL: string;
  climbingType: ClimbingType[];
  distance: number;
  cragInfo?: CragInfo;
  routes?: Route[];
  cragStats?: CragStats;
};

export interface CragInfo {
  cragID: number;
  img: string;
  features: string;
  approach: string;
  accessType: number;
  accessNote: string;
}
export interface CragStats {
  cragID: number;
  beginner: number;
  advanced: number;
  experienced: number;
  expert: number;
  elite: number;
  mainClimbingType: string;
  avgStars: GLfloat;
}

export interface Route {
  cragID: number;
  name: string;
  grade: string;
  climbingType: number;
  stars: number;
  logs: number;
}


export type WeatherDataDay = {
  precipitation_hours: number[];
  precipitation_probability_max: number[];
  precipitation_sum: number[];
  rain_sum: number[];
  sunrise: string[];
  sunset: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
};

export interface SearchState {
  location: string;
  coords: Coords;
  departureDate: string;
  daysFromNow: number;
  climbingType: string[];
  rockType: string[];
  numOfRoutes: number[];
  distRange: number[];
}


export type SearchModalProps = {
  setSearchState: Function;
  searchState: SearchState;
  basicFilter: Function;
  setFilteredCrags: Function;
  fetchCrags: (lng: string, lat: string, distRange: number[]) => Promise<void>;
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
};
