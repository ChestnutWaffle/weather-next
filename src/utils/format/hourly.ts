import { Hourly } from "@/utils/weather";
import { getDateNTime } from "@/utils";

const thead = {
  dt: "Date Time",
  weather: "Weather",
  temp: "Temperature",
  feels_like: "Feels Like",
  pressure: "Pressure",
  humidity: "Humidity",
  dew_point: "Dew Point",
  clouds: "Cloudiness",
  wind_deg: "Wind Degree",
  wind_gust: "Wind Gust",
  wind_speed: "Wind Speed",
  pop: "Probability of Precipitation",
  uvi: "UV Index",
  visibility: "Visibility",
} as const;

export function formatHourly(hourly: Hourly, timezone: string) {
  const tbody = hourly.map((row) => {
    let {
      clouds,
      dew_point,
      dt,
      feels_like,
      humidity,
      pop,
      pressure,
      temp,
      uvi,
      visibility,
      weather,
      wind_deg,
      wind_gust,
      wind_speed,
    } = row;

    const { date, time } = getDateNTime(timezone, dt);
    pressure = Number((pressure * 0.0009869233).toFixed(2));

    return {
      dt: { date, time },
      weather,
      temp,
      feels_like,
      pressure,
      humidity,
      dew_point,
      clouds,
      wind_deg,
      wind_gust,
      wind_speed,
      pop,
      uvi,
      visibility,
    };
  });

  return {
    thead,
    tbody,
  };
}

export type FormatHourlyReturn = ReturnType<typeof formatHourly>;
