import Database from "better-sqlite3";

import { escape_string } from "@/utils";

type City = {
  name: string;
  country: string;
  lat: string;
  lon: string;
};

export function getCitySuggestion(city_input: string): City[] {
  const db = new Database("src/utils/db/cities.db");
  db.pragma("journal_mode = WAL");

  const rows = db
    .prepare<Row[]>(
      `SELECT * FROM CITIES WHERE COMPARE LIKE '%${escape_string(
        city_input
      )}%' LIMIT 10`
    )
    .all() as Row[];

  const results: City[] = rows.map((row) => {
    return {
      name: row.NAME,
      country: row.COUNTRY,
      lat: row.LAT,
      lon: row.LON,
    };
  });

  db.close();

  return results;
}

const example_row = {
  ID: 132741,
  NAME: "New Hyde Park",
  COMPARE: "New Hyde Park United States",
  COUNTRY_CODE: "US",
  COUNTRY: "United States",
  LAT: "40.7351",
  LON: "-73.68791",
};

type Row = typeof example_row;
