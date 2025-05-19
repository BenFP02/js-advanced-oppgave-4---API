import { config, renderPage, fetchPokemon } from "./index.js";

export const fetchRandomPokemonButton = () => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Fetch Random Pokemon";
  buttonElement.addEventListener("click", async () => {
    const randomNumber = Math.floor(Math.random() * 540 + 1);
    config.filters.direction = "front";
    config.pokemon = await fetchPokemon(randomNumber);
    renderPage();
  });
  return buttonElement;
};
