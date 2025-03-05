import { defineStore } from 'pinia';
import type { app_city, CityWeatherNow, WeatherForecast, WeatherWeekForecast } from '@/types.ts';

export const useAppStore = defineStore('app', {
  state: () => ({
    selectedCity: 'kazan' as app_city,
    weatherNowInCities: {} as Record<string, CityWeatherNow>,
    weekForecast: {} as WeatherWeekForecast[],
    dayForecast: {} as WeatherForecast[],
  }),
  getters: {
    weatherNowInCurrentCity: (state) => {
      return state.weatherNowInCities?.[state.selectedCity];
    },
    weatherNowExcludeCurrentCity: (state) => {
      return (
        state.weatherNowInCities &&
        Object.fromEntries(
          Object.entries(state.weatherNowInCities)?.filter(([key, _]) => key !== state.selectedCity)
        )
      );
    },
  },
  actions: {
    selectCity(payload: app_city) {
      this.selectedCity = payload;
    },
    setWeatherNowInCities(payload: Record<string, CityWeatherNow>) {
      this.weatherNowInCities = payload;
    },
    setWeekForecast(payload: WeatherWeekForecast[]) {
      this.weekForecast = payload;
    },
    setDayForecast(payload: WeatherForecast[]) {
      this.dayForecast = payload;
    },
  },
});
