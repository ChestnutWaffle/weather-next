"use server";
import remove_accents from "remove-accents";
import { revalidatePath } from "next/cache";
import { cookies } from "next/dist/client/components/headers";

export async function submitForm(formData: FormData) {
  const formLocation = formData.get("location");

  if (!!formLocation) {
    cookies().delete("lat-lon");
    cookies().set("location", formLocation.toString());
  }
}

export async function cityAction(city: {
  name: string;
  country: string;
  lat: string;
  lon: string;
}) {
  const location = remove_accents(`${city.name} ${city.country}`);

  if (!!city) {
    cookies().delete("location");
    cookies().set(
      "lat-lon",
      JSON.stringify({ lat: city.lat, lon: city.lon, location })
    );
  }
}
