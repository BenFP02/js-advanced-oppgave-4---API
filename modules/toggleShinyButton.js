import { config, renderPage } from "./index.js";

export const toggleShinyButton = () => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Toggle Shiny";
  buttonElement.addEventListener("click", () => {
    config.filters.isShiny = !config.filters.isShiny;
    renderPage();
  });
  return buttonElement;
};
