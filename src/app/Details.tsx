import { getDateNTime } from "@/utils";

import Image from "next/image";
import { Current } from "@/utils/weather";
import {
  HumidityIcon,
  PressureIcon,
  TemperatureIcon,
  WindSpeedIcon,
} from "@/components/Icons";
import { InputCard } from "@/components/InputCard";

interface Props {
  timezone: string;
  display_name: string;
  current: Current;
}

export default async function Details({
  timezone,
  display_name,
  current,
}: Props) {
  const { date, time } = getDateNTime(timezone);

  return (
    <section className="py-4 px-6 md:px-12 text-gray-300">
      <div className="flex flex-col md:flex-row gap-8 justify-center rounded-xl">
        <InputCard date={date} timezone={timezone} time_={time} />
        <div className="p-4 rounded-xl shadow-lg shadow-purple-600/30 flex-grow bg-purple-700 flex flex-col sm:flex-row justify-evenly">
          <div className="flex flex-col justify-between items-center">
            <Image
              alt={current.weather[0].description}
              src={`/${current.weather[0].icon}@4x.png`}
              width={200}
              height={200}
              priority
            />
            <p className="text-center capitalize">
              {current.weather[0].description}
            </p>
          </div>
          <div className="flex flex-col p-2 pr-4 gap-2">
            <p className="text-xl font-bold">
              {display_name.length > 60
                ? display_name.substring(0, 60) + "..."
                : display_name}
            </p>
            <p className="text-lg flex gap-2 items-center">
              <TemperatureIcon className="inline w-6 h-6" />
              {current.temp} &#176;C
            </p>
            <p>Feels like {current.feels_like} &#176;C</p>
            <p className="text-lg flex gap-2 items-center">
              <PressureIcon className="inline w-6 h-6" />
              {(current.pressure * 0.0009869233).toFixed(2)} atm
            </p>
            <p className="text-lg flex gap-2 items-center">
              <HumidityIcon className="inline w-8 h-8 -ml-1" />
              {current.humidity} %
            </p>
            <p className="text-lg flex gap-2 items-center">
              <WindSpeedIcon className="inline w-6 h-6" />
              {current.wind_speed} m/sec
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
