export const kevinToCelsius = (kelvinT: number) => {
  // K − 273.15 = °C
  return parseFloat((kelvinT - 273.15).toFixed(1));
};
