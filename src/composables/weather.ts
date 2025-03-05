import { WEATHER_DAY_FORECAST, WEATHER_NOW_IN_CITIES, WEATHER_ON_WEEK } from '@/mocks/weather.ts';
import { useAppStore } from '@/stores/app.ts';
import { ref } from 'vue';

export const useWeather = () => {
  const appStore = useAppStore();

  const weatherInCities = ref<any>({});

  const setWeatherNowInCities = () => {
    appStore.setWeatherNowInCities(WEATHER_NOW_IN_CITIES.cities);
  };

  const setWeekForecast = () => {
    appStore.setWeekForecast(WEATHER_ON_WEEK.cities?.[appStore.selectedCity]?.forecast);
  };

  const setDayForecast = () => {
    appStore.setDayForecast(WEATHER_DAY_FORECAST.cities?.[appStore.selectedCity]?.forecast);
  };

  return {
    weatherInCities,
    setWeatherNowInCities,
    setWeekForecast,
    setDayForecast,
  };
};
