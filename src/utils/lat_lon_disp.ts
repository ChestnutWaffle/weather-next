import { geocodingForward, geocodingReverse } from "@/utils/location";
import { cookies } from "next/dist/client/components/headers";
import { COOKIES_KEYS } from "./cookie";

const defaultValue = {
  display_name: "New Delhi",
  lat: "28.6448",
  lon: "77.216721",
};

export async function getLatLonDisplayName() {
  let { display_name, lat, lon } = defaultValue;

  const lat_lon_cookie = cookies().get(COOKIES_KEYS.LAT_LON);
  const just_location_cookie = cookies().get(COOKIES_KEYS.JUST_LOCATION);
  const current_location_cookie = cookies().get(COOKIES_KEYS.CURRENT_LOCATION);

  if (!!lat_lon_cookie?.value.toString()) {
    const lat_lon = JSON.parse(lat_lon_cookie.value.toString()) as {
      country: string;
      name: string;
      lat: string;
      lon: string;
    };

    lat = lat_lon.lat;
    lon = lat_lon.lon;
    display_name = `${lat_lon.name}, ${lat_lon.country}`;
  } else if (!!just_location_cookie?.value.toString()) {
    const geocoding_result = await geocodingForward(
      just_location_cookie
        ? just_location_cookie.value.toString()
        : display_name
    );

    lat = geocoding_result.lat;
    lon = geocoding_result.lon;
    display_name = geocoding_result.display_name;
  } else if (!!current_location_cookie?.value.toString()) {
    const lat_lon = JSON.parse(current_location_cookie.value.toString()) as {
      lat: string;
      lon: string;
    };

    const geocoding_reverse_result = await geocodingReverse(
      lat_lon.lat,
      lat_lon.lon
    );
    lat = geocoding_reverse_result.lat;
    lon = geocoding_reverse_result.lon;
    display_name = geocoding_reverse_result.display_name;
  }

  return {
    display_name,
    lat,
    lon,
  };
}
