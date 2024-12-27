import axios from "axios";

// const API_URL_BASE = "https://swapi.py4e.com/api/";
const API_URL_people = "https://swapi.py4e.com/api/people/";
const API_URL_planets = "https://swapi.py4e.com/api/planets/";
const API_URL_species = "https://swapi.py4e.com/api/species/";
const API_URL_films = "https://swapi.py4e.com/api/films/";
const API_URL_starships = "https://swapi.py4e.com/api/starships/";
const API_URL_vehicles = "https://swapi.py4e.com/api/vehicles/";

// characters
export const fetchCharacters = async () => {
  const { data } = await axios.get(API_URL_people);
  return data.results.map((character) => ({
    name: character.name,
    image: `https://starwars-visualguide.com/assets/img/characters/${
      character.url.split("/")[5]
    }.jpg`, // Imágenes representativas
    gender: character.gender,
  }));
};

// planets
export const fetchPlanets = async () => {
  const { data } = await axios.get(API_URL_planets);
  return data.results.map((planet) => ({
    name: planet.name,
    image: `https://starwars-visualguide.com/assets/img/planets/${
      planet.url.split("/")[5]
    }.jpg`, // Imágenes representativas
  }));
};

// species
export const fetchSpecies = async () => {
  const { data } = await axios.get(API_URL_species);
  return data.results.map((species) => ({
    name: species.name,
    image: `https://starwars-visualguide.com/assets/img/species/${
      species.url.split("/")[5]
    }.jpg`, // Imágenes representativas
  }));
};

// films
export const fetchFilms = async () => {
  const { data } = await axios.get(API_URL_films);
  return data.results.map((film) => ({
    name: film.title,
    image: `https://starwars-visualguide.com/assets/img/films/${
      film.url.split("/")[5]
    }.jpg`, // Imágenes representativas
    opening_crawl: film.opening_crawl.split(".")[0],
  }));
};

// starships
export const fetchStarships = async () => {
  const { data } = await axios.get(API_URL_starships);
  return data.results.map((starship) => ({
    name: starship.name,
    image: `https://starwars-visualguide.com/assets/img/starships/${
      starship.url.split("/")[5]
    }.jpg`, // Imágenes representativas
  }));
};

// vehicles
export const fetchVehicles = async () => {
  const { data } = await axios.get(API_URL_vehicles);
  return data.results.map((vehicle) => ({
    name: vehicle.name,
    image: `https://starwars-visualguide.com/assets/img/vehicles/${
      vehicle.url.split("/")[5]
    }.jpg`, // Imágenes representativas
  }));
};

// Funcion para mis propias cartas la cual creo de manera local

export const categoryMap = {
  characters: fetchCharacters,
  planets: fetchPlanets,
  species: fetchSpecies,
  films: fetchFilms,
  starships: fetchStarships,
  vehicles: fetchVehicles,
};
