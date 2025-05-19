import { config, renderPage } from "./index.js";

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
