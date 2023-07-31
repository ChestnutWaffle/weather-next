"use server";
import { cookies } from "next/dist/client/components/headers";
import { COOKIES_KEYS } from "@/utils/cookie";

export async function submitForm(formData: FormData) {
  const formLocation = formData.get("location");

  if (!!formLocation) {
    cookies().delete(COOKIES_KEYS.LAT_LON);
    cookies().delete(COOKIES_KEYS.CURRENT_LOCATION);
    cookies().set(COOKIES_KEYS.JUST_LOCATION, formLocation.toString());
  }
}

export async function cityAction(city: {
  name: string;
  country: string;
  lat: string;
  lon: string;
}) {
  if (!!city) {
    cookies().delete(COOKIES_KEYS.JUST_LOCATION);
    cookies().delete(COOKIES_KEYS.CURRENT_LOCATION);
    cookies().set(
      COOKIES_KEYS.LAT_LON,
      JSON.stringify({
        lat: city.lat,
        lon: city.lon,
        name: city.name,
        country: city.country,
      })
    );
  }
}

export async function currentLocationAction(lat: string, lon: string) {
  if (!!lat && !!lon) {
    cookies().delete(COOKIES_KEYS.JUST_LOCATION);
    cookies().delete(COOKIES_KEYS.LAT_LON);
    cookies().set(COOKIES_KEYS.CURRENT_LOCATION, JSON.stringify({ lat, lon }));
  }
}
