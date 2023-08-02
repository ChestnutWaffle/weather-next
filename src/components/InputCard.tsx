"use client";

import { cityAction, submitForm } from "@/app/actions";
import { SearchIcon } from "./Icons";
import { useEffect, useState } from "react";
import { getDateNTime } from "@/utils";
import { useDebounce } from "./hooks/useDebounce";

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

  const debouncedInput = useDebounce(input, 300);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeInterval = setTimeout(() => {
      const { time } = getDateNTime(timezone);

      setTime(time);
    }, 1000);

    return () => clearInterval(timeInterval);
  });

  useEffect(() => {
    async function fetchSuggestions(debouncedInput: string) {
      if (debouncedInput.length < 3) return;

      setIsLoading(true);
      const response = await fetch(`/api?loc=${debouncedInput}`);
      const results = (await response.json()) as SearchResult[];
      setSearchResults(results);
      setIsLoading(false);
    }

    fetchSuggestions(debouncedInput);
  }, [debouncedInput]);

  return (
    <div className="p-4 rounded-xl shadow-lg flex-grow md:min-w-[45%] bg-gray-700 flex flex-col gap-6 max-w-2xl">
      <div>
        <p className="text-2xl">{date}</p>
        <p className="text-4xl font-semibold">{time ?? time_}</p>
      </div>
      <form className="relative" action={submitForm}>
        <div className="group">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            autoComplete="off"
            className="w-full bg-transparent py-2 px-4 pr-10 border-2 border-purple-500 rounded-lg focus:outline-none focus:outline-purple-500"
            type="text"
            name="location"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            id="search-button"
            aria-label="Search Button"
            type="submit"
            className="absolute right-0 h-full rounded-lg p-2 active:text-purple-500 focus:outline-none focus:text-purple-500 focus:bg-gray-600/70"
          >
            <SearchIcon className="h-6 w-6" />
          </button>
          {debouncedInput.length >= 3 && (
            <div className="absolute top-full invisible group-focus-within:visible flex flex-col gap-1 rounded-xl mt-2 z-20 bg-gray-800 p-2  w-full shadow-xl shadow-gray-800 outline outline-2 outline-gray-700 max-h-56 lg:max-h-48 overflow-y-auto">
              {isLoading
                ? "Loading"
                : searchResults.length !== 0
                ? searchResults.map((city, index) => (
                    <button
                      formAction={() => cityAction(city)}
                      key={index}
                      className="px-6 py-2 flex flex-col bg-gray-700 rounded-xl"
                    >
                      <span>{city.name}</span>
                      <span>{city.country}</span>
                    </button>
                  ))
                : "None"}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
