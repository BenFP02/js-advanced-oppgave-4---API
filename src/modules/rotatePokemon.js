import { config } from "./config.js";
import { renderPage } from "./renderPage.js";

export const rotatePokemonButton = () => {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Rotate!";
  buttonElement.addEventListener("click", () => {
    config.filters.direction =
      config.filters.direction === "front" ? "back" : "front";
    renderPage();
  });
  return buttonElement;
};
