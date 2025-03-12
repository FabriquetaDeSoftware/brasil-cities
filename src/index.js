import * as fs from 'node:fs';
import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

const states = [
  'ac',
  'al',
  'ap',
  'am',
  'ba',
  'ce',
  'df',
  'es',
  'go',
  'ma',
  'mt',
  'ms',
  'mg',
  'pa',
  'pb',
  'pr',
  'pe',
  'pi',
  'rj',
  'rn',
  'rs',
  'ro',
  'rr',
  'sc',
  'sp',
  'se',
  'to',
];

const getStateData = (sigla) => {
  const filePath = path.resolve(
    __dirname,
    'data',
    `${sigla.toLowerCase()}.json`
  );

  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data.estado.cidades;
  }

  return null;
};

const getCitiesByLetters = (letters) => {
  const cities = [];

  states.forEach((stateSigla) => {
    const citiesData = getStateData(stateSigla);
    if (citiesData) {
      citiesData.forEach((city) => {
        if (city.nome.toLowerCase().includes(letters.toLowerCase())) {
          cities.push({ ...city, estado: stateSigla.toUpperCase() });
        }
      });
    }
  });

  console.log(cities);
  return cities;
};

const getCityInfo = (cityName) => {
  const citiesInfo = [];

  states.forEach((stateSigla) => {
    const citiesData = getStateData(stateSigla);
    if (citiesData) {
      citiesData.forEach((city) => {
        if (city.nome.toLowerCase() === cityName.toLowerCase()) {
          citiesInfo.push({ ...city, estado: stateSigla.toUpperCase() });
        }
      });
    }
  });

  return citiesInfo;
};

export { getStateData, getCitiesByLetters, getCityInfo };
