import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const loc = searchParams.get("loc");

  if (!loc) return [];

  const compare_string = `%${loc.toLowerCase()}%`;

  const { rows } =
    await sql`SELECT name, country, lat, lon FROM cities WHERE compare LIKE ${compare_string} LIMIT 10;`;

  const results = rows.map((row) => {
    return {
      name: row.name,
      country: row.country,
      lat: row.lat,
      lon: row.lon,
    };
  });

  return NextResponse.json(results);
}
