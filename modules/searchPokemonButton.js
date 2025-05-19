import { config, renderPage, fetchPokemon } from "./index.js";

export const searchPokemonButton = () => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Search";
  buttonElement.addEventListener("click", async () => {
    config.pokemon = await fetchPokemon(config.inputSearchField);
    renderPage();
  });
  return buttonElement;
};
