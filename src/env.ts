export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSITION_STACK_API_KEY: string | undefined;
      OPEN_WEATHER_MAP_API_KEY: string | undefined;
      RAPID_API_KEY: string | undefined;
    }
  }
}

if (!process.env.OPEN_WEATHER_MAP_API_KEY) {
  throw new Error("Could not find Open Weather Map API Key");
}
if (!process.env.POSITION_STACK_API_KEY) {
  throw new Error("Could not find Position Stack API Key");
}
if (!process.env.RAPID_API_KEY) {
  throw new Error("Could not find Rapid API Key");
}

export const env = {
  OPEN_WEATHER_MAP_API_KEY: process.env.OPEN_WEATHER_MAP_API_KEY,
  POSITION_STACK_API_KEY: process.env.POSITION_STACK_API_KEY,
  RAPID_API_KEY: process.env.RAPID_API_KEY,
};
