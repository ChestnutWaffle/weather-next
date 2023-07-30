import Details from "./Details";
import TableSection from "./TableSection";
import { cookies } from "next/dist/client/components/headers";
import { geocodingForward } from "@/utils/location";
import { weather } from "@/utils/weather";
import { formatHourly } from "@/utils/format/hourly";
import { formatDaily } from "@/utils/format/daily";
import HourlyTable from "./HourlyTable";
import DailyTable from "./DailyTable";
import { Metadata } from "next";
import { getLatLonDisplayName } from "@/utils/lat_lon_disp";
import CurrentLoc from "@/components/CurrentLocation";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Weather - Next",
  description:
    "Weather App - Gets it's data from Open Weather Map API and other geocoding api to locate and fetch weather information.\nIt uses Next.js App Router",

  icons: {
    icon: "/03d@4x.png",
  },
};

export default async function Home() {
  const { display_name, lat, lon } = await getLatLonDisplayName();

  const { timezone, current, hourly, daily } = await weather(lat, lon);

  return (
    <main>
      <CurrentLoc />
      <Details
        current={current}
        display_name={display_name}
        timezone={timezone}
      />
      <TableSection id="hourly" title="Hourly Forecast">
        <HourlyTable data={formatHourly(hourly, timezone)} />
      </TableSection>
      <TableSection id="daily" title="7 Day Forecast" className="pb-8">
        <DailyTable data={formatDaily(daily, timezone)} />
      </TableSection>
    </main>
  );
}
