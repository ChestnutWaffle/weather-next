import {
  AvgTemperatureIcon,
  ClockIcon,
  CloudIcon,
  CloudinessIcon,
  DewIcon,
  HumidityIcon,
  MaxTemperatureIcon,
  MinTemperatureIcon,
  MoonRiseIcon,
  MoonSetIcon,
  PrecipitationIcon,
  PressureIcon,
  SummaryIcon,
  SunIcon,
  SunRiseIcon,
  SunSetIcon,
  TemperatureHighIcon,
  WindDegreeIcon,
  WindGustIcon,
  WindSpeedIcon,
} from "@/components/Icons";
import { MoonFirstQuandrantIcon, MoonPhase } from "@/components/MoonIcons";
import { FormatDailyReturn } from "@/utils/format/daily";
import Image from "next/image";

interface Props {
  data: FormatDailyReturn;
}

export default function DailyTable({ data }: Props) {
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
                <AvgTemperatureIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.temp.avg}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <MinTemperatureIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.temp.min}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <MaxTemperatureIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.temp.max}</span>
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
                <SunRiseIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.sunrise}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <SunSetIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.sunset}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <MoonFirstQuandrantIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.moon_phase}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <MoonRiseIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.moonrise}</span>
              </div>
            </th>
            <th>
              <div className="capitalize shadow-lg rounded-xl px-4 py-2 whitespace-nowrap bg-gray-800">
                <MoonSetIcon className="inline w-6 h-6 mr-2" />
                <span className="align-middle">{data.thead.moonset}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="table-row-group">
          {data.tbody.map((row, index) => (
            <tr key={index} className="text-center even:bg-gray-600">
              <td className="px-4 py-1 whitespace-nowrap">
                <p className="font-semibold">{row.dt.date}</p>
                {/* <p className="font-semibold">{row.dt.time}</p> */}
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
              <td className="px-4 py-1 whitespace-nowrap text-2xl font-bold">
                <p> {((row.temp.min + row.temp.max) / 2).toFixed(2)} &#176;C</p>
              </td>
              <td className="px-4 py-1 whitespace-nowrap text-lg font-medium">
                <p> {row.temp.min} &#176;C</p>
              </td>
              <td className="px-4 py-1 whitespace-nowrap text-lg font-medium">
                <p> {row.temp.max} &#176;C</p>
              </td>
              <td className="px-4 py-1 whitespace-nowrap font-medium text-lg">
                <p>{row.feels_like.day} &#176;C</p>
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
                <p className="font-semibold">{row.sunrise.time}</p>
              </td>
              <td className="px-4 py-1 whitespace-nowrap">
                <p className="font-semibold">{row.sunset.time}</p>
              </td>
              <td className="px-4 py-1 whitespace-nowrap">
                <div>
                  <MoonPhase phase={row.moon_phase} />
                </div>
              </td>
              <td className="px-4 py-1 whitespace-nowrap">
                <p className="font-semibold">{row.moonrise.time}</p>
              </td>
              <td className="px-4 py-1 whitespace-nowrap">
                <p className="font-semibold">{row.moonset.time}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
