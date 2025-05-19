import { config } from "./config.js";

// input felt, og knapp
export const searchPokemonInput = () => {
  const inputElement = document.createElement("input");
  inputElement.placeholder = "Name or ID here...";
  inputElement.addEventListener("input", () => {
    config.inputSearchField = inputElement.value;
  });
  return inputElement;
};
