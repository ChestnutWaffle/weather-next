import {
  ClockIcon,
  CloudIcon,
  CloudinessIcon,
  DewIcon,
  EyeIcon,
  HumidityIcon,
  PrecipitationIcon,
  PressureIcon,
  SunIcon,
  TemperatureHighIcon,
  TemperatureIcon,
  WindDegreeIcon,
  WindGustIcon,
  WindSpeedIcon,
} from "@/components/Icons";
import { FormatHourlyReturn } from "@/utils/format/hourly";
import Image from "next/image";

interface Props {
  data: FormatHourlyReturn;
}

export default function HourlyTable({ data }: Props) {
  return (
    <div className="max-h-[400px] overflow-y-auto">
      <table className="w-full table-auto rounded-xl">
        <thead className="table-header-group">
          <tr className=" sticky top-0 bg-gradient-to-b from-gray-700 to-transparent">
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <ClockIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.dt}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <CloudIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.weather}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <TemperatureIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.temp}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <TemperatureHighIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.feels_like}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <PressureIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.pressure}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <HumidityIcon className="inline w-6 h-6 -ml-1 mr-2" />
                <span className="align-middle">{data.thead.humidity}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <DewIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.dew_point}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <CloudinessIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.clouds}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <WindDegreeIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.wind_deg}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <WindGustIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.wind_gust}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <WindSpeedIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.wind_speed}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <PrecipitationIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.pop}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <SunIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.uvi}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <EyeIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.visibility}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="table-row-group">
          {data.tbody.map((row, index) => (
            <tr key={index} className="text-center even:bg-gray-600">
              <td className="px-4 py-1 whitespace-nowrap">
                <p className="text-sm">{row.dt.date}</p>
                <p className="font-semibold">{row.dt.time}</p>
              </td>
              <td className="px-4 py-1 whitespace-nowrap capitalize">
                {/* {row.weather[0].description} */}
                <div className="flex flex-col justify-between items-center">
                  <Image
                    alt={row.weather[0].description}
                    src={`/${row.weather[0].icon}@4x.png`}
                    width={60}
                    height={60}
                    priority
                  />
                  <p className=" capitalize text-xs">
                    {row.weather[0].description}
                  </p>
                </div>
              </td>
              <td className="px-4 py-1 whitespace-nowrap font-bold text-2xl">
                {row.temp} &#176;C
              </td>
              <td className="px-4 py-1 whitespace-nowrap font-medium text-lg">
                {row.feels_like} &#176;C
              </td>
              <td className="px-4 py-1 whitespace-nowrap">
                {row.pressure} atm
              </td>
              <td className="px-4 py-1 whitespace-nowrap">{row.humidity} %</td>
              <td className="px-4 py-1 whitespace-nowrap">
                {row.dew_point} &#176;C
              </td>
              <td className="px-4 py-1 whitespace-nowrap">{row.clouds} %</td>
              <td className="px-4 py-1 whitespace-nowrap">
                {row.wind_deg}&#176;
              </td>
              <td className="px-4 py-1 whitespace-nowrap">
                {row.wind_gust} m/sec
              </td>
              <td className="px-4 py-1 whitespace-nowrap">
                {row.wind_speed} m/sec
              </td>
              <td className="px-4 py-1 whitespace-nowrap">
                {Number((row.pop * 100).toFixed(2))} %
              </td>
              <td className="px-4 py-1 whitespace-nowrap">{row.uvi}</td>
              <td className="px-4 py-1 whitespace-nowrap">
                {row.visibility / 1000} km
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
