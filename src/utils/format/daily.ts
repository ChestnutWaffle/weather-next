import { Daily } from "@/utils/weather";
import { getDateNTime } from "..";

const thead = {
  dt: "Date Time",
  weather: "Weather",
  temp: {
    avg: "Avg. Temperature",
    min: "Min. Temperature",
    max: "Max. Temperature",
  },
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
  sunrise: "Sunrise",
  sunset: "Sunset",
  moon_phase: "Moon Phase",
  moonrise: "Moonrise",
  moonset: "Moonset",
} as const;

export function formatDaily(daily: Daily, timezone: string) {
  const tbody = daily.map((row) => {
    let {
      clouds,
      dew_point,
      dt,
      feels_like,
      humidity,
      moon_phase,
      moonrise,
      moonset,
      pop,
      pressure,
      sunrise,
      sunset,
      temp,
      uvi,
      weather,
      wind_deg,
      wind_gust,
      wind_speed,
    } = row;

    const { date, time } = getDateNTime(timezone, dt);
    pressure = Number((pressure * 0.0009869233).toFixed(2));
    const sunriseTime = getDateNTime(timezone, sunrise);
    const sunsetTime = getDateNTime(timezone, sunset);
    const moonriseTime = getDateNTime(timezone, moonrise);
    const moonsetTime = getDateNTime(timezone, moonset);

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
      sunrise: sunriseTime,
      sunset: sunsetTime,
      moon_phase,
      moonrise: moonriseTime,
      moonset: moonsetTime,
      pop,
      uvi,
    };
  });

  return {
    thead,
    tbody,
  };
}

export type FormatDailyReturn = ReturnType<typeof formatDaily>;
