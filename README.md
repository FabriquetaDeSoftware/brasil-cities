# Brasil Cities

A JavaScript library for working with Brazilian state and city data, making it easy to search and manipulate information about states, cities, and their IBGE codes.

## Installation

To install the library, use npm:

```bash
$ npm install brasil-cities
```

## Features

The library provides functions for:

- Retrieving data for a specific state by its abbreviation.
- Searching for cities by name or state abbreviation.
- Retrieving detailed information about cities, such as name and IBGE code.

## Usage

### 1. **Get State Data**

To get the data for a state, including its cities and abbreviation, use the `getStateData` function.

```javascript
import { getStateData } from 'brasil-cities';

const state = getStateData('SP');
console.log(state);
```

#### Example Response:

```json
{
  "sigla": "SP",
  "nome": "São Paulo",
  "cidades": [
    { "nome": "São Paulo", "codigo_ibge": 3550308 },
    { "nome": "Campinas", "codigo_ibge": 3509502 }
    // other cities
  ]
}
```

### 2. **Search Cities by Letters**

To find cities whose names contain a specific letter or sequence of letters, use the `getCitiesByLetters` function.

```javascript
import { getCitiesByLetters } from 'brasil-cities';

const cities = getCitiesByLetters('Camp');
console.log(cities);
```

#### Example Response:

```json
[
  { "nome": "Campinas", "codigo_ibge": 3509502, "estado": "SP" },
  { "nome": "Campo Grande", "codigo_ibge": 5002704, "estado": "MS" }
]
```

### 3. **Get City Information**

To retrieve details about a specific city, such as name and IBGE code, use the `getCityInfo` function.

```javascript
import { getCityInfo } from 'brasil-cities';

const cityInfo = getCityInfo('São Paulo');
console.log(cityInfo);
```

#### Example Response:

```json
[{ "nome": "São Paulo", "codigo_ibge": 3550308, "estado": "SP" }]
```

## Types and Type Support

The library is written with type support to ease usage and avoid errors. The functions accept and return the following types:

- `sigla`: A string representing the state abbreviation (e.g., 'SP').
- `nome`: A string representing the state (e.g., 'São Paulo').
- `cidade`: An object containing `nome` (string) and `codigo_ibge` (number).

## Contributing

If you would like to contribute to the library, feel free to open a pull request or create an issue if you encounter any problems.

### Steps to Contribute:

1. Fork this repository.
2. Create a branch for your feature (`git checkout -b my-feature`).
3. Make the necessary changes.
4. Commit your changes with `git commit -m 'Add new feature'`.
5. Push to your fork (`git push origin my-feature`).
6. Open a pull request.

## License

This library is licensed under the [MIT License](LICENSE).

### Customizations

- **Package Name**: Replace `brasil-cities` with the actual name of your library.
- **Response Examples**: Adjust the response examples to match the exact format of your data if it differs.

This `README.md` includes sections for installation, basic usage, examples, contributing, and license information.
