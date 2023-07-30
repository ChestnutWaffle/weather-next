"use client";

import { currentLocationAction } from "@/app/actions";
import React, { useState } from "react";
import { LoadingIcon } from "./Icons";

const CurrentLoc = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const geoSuccess = async (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;

    await currentLocationAction(latitude.toString(), longitude.toString());

    setIsLoading(false);
  };

  const geoError = async (error: GeolocationPositionError) => {
    setIsLoading(false);
    setIsError(true);
  };

  const getLoc = () => {
    setIsError(false);
    setIsLoading(true);

    const geo = navigator.geolocation;
    geo.getCurrentPosition(geoSuccess, geoError);
  };

  if (isLoading) {
    return (
      <section className="pt-8 pb-4 px-6 md:px-12 text-gray-300">
        <div className="bg-gray-700 w-full flex flex-row gap-2 justify-between items-center rounded-2xl shadow-lg p-4">
          <div className="min-w-0 break-words w-full">
            <h3 className="font-bold mb-2">
              Trying to retrieve location information
            </h3>
            <p className="text-xs">Please wait...</p>
          </div>
          <button
            type="button"
            className="px-4 py-1 rounded-lg bg-purple-700 shadow-sm shadow-purple-700 active:bg-purple-800 focus:outline-none focus:shadow-lg focus:shadow-purple-800"
          >
            <LoadingIcon className="w-5 h-5 animate-spin" />
          </button>
        </div>
      </section>
    );
  }

  if (!isLoading && isError) {
    return (
      <section className="pt-8 pb-4 px-6 sm:px-12 text-red-400">
        <div className="bg-gray-700 w-full flex flex-row gap-2 justify-between items-center rounded-2xl shadow-lg p-4">
          <div className="min-w-0 break-words w-full">
            <h3 className="font-bold mb-2">
              Could not retrieve location information
            </h3>
            <p className="text-xs">
              Please reset Location permission in site settings and Reload the
              page to Try Again,
            </p>
            <p className="text-xs">
              Or turn on location services on your device if it has been turned
              off and Try Again
            </p>
          </div>
          <button
            type="button"
            className="px-4 py-1 rounded-lg text-gray-100 bg-red-500 shadow-sm shadow-red-500 active:bg-red-600 focus:outline-none focus:shadow-lg focus:shadow-red-600"
            onClick={getLoc}
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-8 pb-4 px-6 md:px-12 text-gray-300">
      <div className="bg-gray-700 w-full flex flex-row gap-2 justify-between items-center rounded-2xl shadow-lg p-4">
        <div className="min-w-0 break-words w-full">
          <h3 className="font-bold mb-2">Find weather at your location</h3>
          <p className="text-xs">
            Click the button and grant location permission to find weather at
            your location
          </p>
        </div>
        <button
          type="button"
          className="px-4 py-1 rounded-lg bg-purple-700 shadow-sm shadow-purple-700 active:bg-purple-800 focus:outline-none focus:shadow-lg focus:shadow-purple-800"
          onClick={getLoc}
        >
          Go
        </button>
      </div>
    </section>
  );
};

export default CurrentLoc;
