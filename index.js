import * as fs from 'node:fs';
import path from 'node:path';
import { states } from './src/constants/state.constant.js';

const __dirname = new URL('./src', import.meta.url).pathname;

/**
 * Obtém os dados de uma cidade de um estado específico.
 * @param {string} sigla - A sigla do estado (por exemplo, 'SP', 'RJ').
 * @returns {{estado: {sigla: string, nome: string, cidades: Array<{nome: string, codigo_ibge: number}>}} | null} - Retorna os dados do estado ou null se não encontrado.
 */
const getStateData = (sigla) => {
  const filePath = path.resolve(
    __dirname,
    'data',
    `${sigla.toLowerCase()}.json`
  );

  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    return data;
  }

  return null;
};

/**
 * Obtém todas as cidades que contêm as letras fornecidas.
 * @param {string} letters - Letras que as cidades devem conter.
 * @returns {Array<{ nome: string, codigo: string, estado: string }>} - Retorna uma lista de cidades e seus estados.
 */
const getCitiesByLetters = (letters) => {
  const cities = [];

  states.forEach((stateSigla) => {
    const citiesData = getStateData(stateSigla).estado.cidades;
    if (citiesData) {
      citiesData.forEach((city) => {
        if (city.nome.toLowerCase().includes(letters.toLowerCase())) {
          cities.push({ ...city, estado: stateSigla.toUpperCase() });
        }
      });
    }
  });

  return cities;
};

/**
 * Obtém as informações de uma cidade específica.
 * @param {string} cityName - Nome da cidade que você quer buscar.
 * @returns {Array<{ nome: string, codigo: string, estado: string }>} - Retorna as informações da cidade, incluindo o estado.
 */
const getCityInfo = (cityName) => {
  const citiesInfo = [];

  states.forEach((stateSigla) => {
    const citiesData = getStateData(stateSigla).estado.cidades;
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
