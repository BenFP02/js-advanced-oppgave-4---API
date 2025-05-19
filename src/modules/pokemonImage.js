import { config } from "./config.js";

export const pokemonImage = () => {
  const imgElement = document.createElement("img");
  if (config.filters.direction === "front") {
    imgElement.src = config.filters.isShiny
      ? config.pokemon.sprites.front_shiny
      : config.pokemon.sprites.front_default;
  } else {
    imgElement.src = config.filters.isShiny
      ? config.pokemon.sprites.back_shiny
      : config.pokemon.sprites.back_default;
  }
  imgElement.height = 200;
  imgElement.width = 200;
  return imgElement;
};
