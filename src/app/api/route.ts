import { getCitySuggestion } from "@/utils/db/suggestions";
import { NextResponse } from "next/server";
import remove_accents from "remove-accents";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const loc = searchParams.get("loc");

  if (!loc) return [];

  const results = getCitySuggestion(remove_accents(loc.toLowerCase()));

  return NextResponse.json(results);
}
