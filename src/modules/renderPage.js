import { config } from "./config.js";
import { fetchRandomPokemonButton } from "./fetchRandomPokemonButton.js";
import { rotatePokemonButton } from "./rotatePokemon.js";
import { toggleShinyButton } from "./toggleShinyButton.js";
import { searchPokemonInput } from "./searchPokemonInputs.js";
import { searchPokemonButton } from "./searchPokemonButton.js";
import { pokemonImage } from "./pokemonImage.js";

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
