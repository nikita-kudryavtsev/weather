import { CLOUDINESS } from '@/types.ts';

export function getIconName(cloudiness: CLOUDINESS) {
  switch (cloudiness) {
    case CLOUDINESS.CLOUDY: {
      return 'cloud';
    }
    case CLOUDINESS.RAINY: {
      return 'rain';
    }
    case CLOUDINESS.SUNNY: {
      return 'sun';
    }
    case CLOUDINESS.WINDY: {
      return 'wind';
    }
  }
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export function getFormattedWeekDay(date: Date) {
  const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const dayOfWeek = capitalize(days[date.getDay()]); // Получаем день недели (0 = воскресенье)
  const day = date.getDate(); // Число месяца
  const month = months[date.getMonth()]; // Название месяца

  return `${dayOfWeek}, ${day} ${month}`;
}

export function getDateTimeAndTimesDay(date: string) {
  if (!date) return '';
  const parsedDate = new Date(date);
  const hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();

  const dateTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

  parsedDate.getHours();
  switch (new Date(date).getHours()) {
    case 1:
  }
  let timesDay = '';
  if (hours < 6) {
    timesDay = 'Ночь';
  } else if (hours < 12) {
    timesDay = 'Утро';
  } else if (hours < 18) {
    timesDay = 'День';
  } else if (hours < 21) {
    timesDay = 'Вечер';
  } else {
    timesDay = 'Ночь';
  }
  return {
    dateTime,
    timesDay,
  };
}
