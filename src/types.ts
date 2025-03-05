export enum CLOUDINESS {
  CLOUDY = 'Облачно',
  SUNNY = 'Солнечно',
  RAINY = 'Дождливо',
  WINDY = 'Ветренно',
}

export type app_tab = 'main' | 'week';

export type app_city = 'kazan' | 'moscow' | 'krasnoyarsk' | 'krasnodar' | 'tula' | 'ufa';

export interface CitiesWeatherForecast {
  cities: {
    [cityName: string]: CityWeatherForecast;
  };
}

export interface CitiesWeatherNow {
  cities: {
    [cityName: string]: CityWeatherNow;
  };
}

export interface CitiesWeatherWeek {
  cities: {
    [cityName: string]: CityWeatherWeek;
  };
}

export interface WeatherForecast {
  datetime: string;
  temperature: number;
  cloudiness: CLOUDINESS;
  humidity: number;
  wind_speed: number;
}

export interface WeatherWeekForecast {
  day: string;
  temperature: number;
  cloudiness: CLOUDINESS;
  humidity: number;
  wind_speed: number;
}

interface CityWeatherForecast {
  name: string;
  timezone: string;
  forecast: WeatherForecast[];
}

export interface CityWeatherNow {
  name: string;
  timezone: string;
  datetime: string;
  temperature: number;
  feels_like: number;
  cloudiness: CLOUDINESS;
  humidity: number;
  wind_speed: number;
  pressure: number;
}

interface CityWeatherWeek {
  name: string;
  timezone: string;
  forecast: WeatherWeekForecast[];
}
