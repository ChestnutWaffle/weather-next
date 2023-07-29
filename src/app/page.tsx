import Details from "./Details";
import TableSection from "./TableSection";
import { cookies } from "next/dist/client/components/headers";
import { geocoding } from "@/utils/location";
import { weather } from "@/utils/weather";
import { formatHourly } from "@/utils/format/hourly";
import { formatDaily } from "@/utils/format/daily";
import HourlyTable from "./HourlyTable";
import DailyTable from "./DailyTable";

export const revalidate = 60;

export default async function Home() {
  let location = "New Delhi";
  let lat = "28.6448";
  let lon = "77.216721";
  let display_name;

  const lat_lon_cookie = cookies().get("lat-lon");

  if (!!lat_lon_cookie?.value.toString()) {
    const lat_lon = JSON.parse(lat_lon_cookie.value.toString()) as {
      location: string;
      lat: string;
      lon: string;
    };

    lat = lat_lon.lat;
    lon = lat_lon.lon;
    display_name = lat_lon.location;
  } else {
    const just_location = cookies().get("location");

    console.log(just_location?.value.toString());
    const geocoding_result = await geocoding(
      just_location ? just_location.value.toString() : location
    );

    lat = geocoding_result.lat;
    lon = geocoding_result.lon;
    display_name = geocoding_result.display_name;
  }

  const { timezone, current, hourly, daily } = await weather(lat, lon);

  return (
    <main className="">
      <Details
        current={current}
        display_name={display_name}
        timezone={timezone}
      />
      <TableSection id="hourly" title="Hourly Forecast">
        <HourlyTable data={formatHourly(hourly, timezone)} />
      </TableSection>
      <TableSection id="daily" title="7 Day Forecast">
        <DailyTable data={formatDaily(daily, timezone)} />
      </TableSection>
    </main>
  );
}
