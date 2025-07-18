import { config } from "./config.js";
import { renderPage } from "./renderPage.js";
import { fetchPokemon } from "./fetchPokemon.js";

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
