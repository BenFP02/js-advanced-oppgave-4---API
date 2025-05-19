import { config } from "./config.js";
import { renderPage } from "./renderPage.js";

export const toggleShinyButton = () => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Toggle Shiny";
  buttonElement.addEventListener("click", () => {
    config.filters.isShiny = !config.filters.isShiny;
    renderPage();
  });
  return buttonElement;
};
