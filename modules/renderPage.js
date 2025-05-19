import { config } from "./config.js";
import {
  fetchRandomPokemonButton,
  rotatePokemonButton,
  toggleShinyButton,
  searchPokemonInput,
  searchPokemonButton,
  pokemonImage,
} from "./index.js";

export const renderPage = (pokemon) => {
  config.pokemonContainer.innerHTML = "";

  if (config.pokemon) {
    config.pokemonContainer.appendChild(pokemonImage());
  }

  config.pokemonContainer.append(
    fetchRandomPokemonButton(),
    rotatePokemonButton(),
    toggleShinyButton(),
    searchPokemonInput(),
    searchPokemonButton()
  );
};
