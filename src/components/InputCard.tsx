"use client";

import { cityAction, submitForm } from "@/app/actions";
import { SearchIcon } from "./Icons";
import { useEffect, useState } from "react";
import { getDateNTime } from "@/utils";

interface Props {
  timezone: string;
  date: string;
  time_: string;
}

interface SearchResult {
  name: string;
  country: string;
  lat: string;
  lon: string;
}

export function InputCard({ timezone, date, time_ }: Props) {
  const [time, setTime] = useState(time_);

  const [input, setInput] = useState("");

  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const timeInterval = setTimeout(() => {
      const { time } = getDateNTime(timezone);

      setTime(time);
    }, 1000);

    return () => clearInterval(timeInterval);
  });

  useEffect(() => {
    if (input.length < 3) return;

    fetch(`/api?loc=${input}`)
      .then((response) => response.json())
      .then((results: SearchResult[]) => setSearchResults(results))
      .catch((e) => console.log(e));
  }, [input]);

  return (
    <div className="p-4 rounded-xl shadow-lg flex-grow md:min-w-[45%] bg-gray-700 flex flex-col gap-6 max-w-2xl">
      <div>
        <p className="text-2xl">{date}</p>
        <p className="text-4xl font-semibold">{time ?? time_}</p>
      </div>
      <form className="relative" action={submitForm}>
        <div className="group">
          <input
            autoComplete="off"
            className="w-full bg-transparent py-2 px-4 pr-10 border-2 border-purple-500 rounded-lg focus:outline-none focus:outline-purple-500"
            type="text"
            name="location"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            className="absolute right-0 h-full rounded-lg p-2 active:text-purple-500 focus:outline-none focus:text-purple-500 focus:bg-gray-600/70"
          >
            <SearchIcon className="h-6 w-6" />
          </button>
          {input.length < 3 ||
            (searchResults.length !== 0 && (
              <div className="absolute top-full invisible group-focus-within:visible flex flex-col gap-1 rounded-xl mt-2 z-20 bg-gray-800 p-2  w-full shadow-xl shadow-gray-800 outline outline-2 outline-gray-700 max-h-56 lg:max-h-48 overflow-y-auto">
                {searchResults.map((city, index) => (
                  <button
                    formAction={() => cityAction(city)}
                    key={index}
                    className="px-6 py-2 flex flex-col bg-gray-700 rounded-xl"
                  >
                    <span>{city.name}</span>
                    <span>{city.country}</span>
                  </button>
                ))}
              </div>
            ))}
        </div>
      </form>
    </div>
  );
}
