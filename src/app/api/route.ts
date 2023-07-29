import { cities } from "@/utils/cities";
import { countries } from "@/utils/countries";
import { NextResponse } from "next/server";
import remove_accents from "remove-accents";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const loc = searchParams.get("loc");

  if (!loc) return [];

  const results = cities
    .filter((city) => {
      const cleaned = remove_accents(city.name);

      return cleaned.toLowerCase().includes(loc.toLowerCase());
    })
    .map((city) => ({
      name: city.name,
      // @ts-ignore
      country: countries[city.country] ?? "",
      lat: city.lat,
      lon: city.lng,
    }))
    .slice(0, 10);

  return NextResponse.json(results);
}
