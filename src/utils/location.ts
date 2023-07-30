import { env } from "@/env";

const position_stack_url = "http://api.positionstack.com/v1/forward";

export async function position(loc: string) {
  const geoResponse = await fetch(
    `${position_stack_url}?access_key=${env.POSITION_STACK_API_KEY}&query=${loc}`
  );

  const posData = (await geoResponse.json()) as typeof position_example;

  console.log(posData);

  const required = posData.data[0];

  return required;
}

const position_example = {
  data: [
    {
      latitude: 38.897675,
      longitude: -77.036547,
      label: "1600 Pennsylvania Avenue NW, Washington, DC, USA",
      name: "1600 Pennsylvania Avenue NW",
      type: "address",
      number: "1600",
      street: "Pennsylvania Avenue NW",
      postal_code: "20500",
      confidence: 1,
      region: "District of Columbia",
      region_code: "DC",
      administrative_area: null,
      neighbourhood: "White House Grounds",
      country: "United States",
      country_code: "US",
      map_url: "http://map.positionstack.com/38.897675,-77.036547",
    },
  ],
};

const geoForwardUrl =
  "https://forward-reverse-geocoding.p.rapidapi.com/v1/search";

export async function geocodingForward(loc: string) {
  const response = await fetch(
    `${geoForwardUrl}?q=${loc}&limit=1&accept-language=en&polygon_threshold=0.0`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": env.RAPID_API_KEY,
        "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
      },
      next: {
        revalidate: 60,
      },
    }
  );
  const result = (await response.json()) as typeof geocoding_forward_example;

  return result[0];
}

const geocoding_forward_example = [
  {
    importance: 0.211,
    licence:
      "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
    class: "tourism",
    osm_id: 1037910808,
    display_name:
      "ECIL Guest House, ECIL Guest House road, DAE Colony, Ward 2 Dr A S Rao Nagar, Greater Hyderabad Municipal Corporation East Zone, Hyderabad, Uppal mandal, Medchal–Malkajgiri District, Telangana, 500040, India",
    osm_type: "way",
    lon: "78.57493432394372",
    place_id: 297904089,
    boundingbox: ["17.4641106", "17.4646506", "78.5746963", "78.5753004"],
    lat: "17.464324599999998",
    type: "guest_house",
  },
];

const geoReverseUrl =
  "https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse";

export async function geocodingReverse(lat: string, lon: string) {
  const response = await fetch(
    `${geoReverseUrl}?lat=${lat}&lon=${lon}&accept-language=en&polygon_threshold=0.0&limit=1'`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": env.RAPID_API_KEY,
        "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
      },
      next: {
        revalidate: 60,
      },
    }
  );
  const result = (await response.json()) as typeof geocoding_reverse_example;

  return result;
}

const geocoding_reverse_example = {
  licence:
    "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
  osm_id: 122604,
  address: {
    state: "Illinois",
    country: "United States",
    city: "Chicago",
    country_code: "us",
    county: "Cook County",
  },
  osm_type: "relation",
  boundingbox: ["41.644531", "42.0230396", "-87.940101", "-87.5240812"],
  place_id: 284897611,
  lat: "41.8755616",
  lon: "-87.6244212",
  display_name: "Chicago, Cook County, Illinois, United States",
};
