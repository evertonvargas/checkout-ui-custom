import React from "react";
import { createRoot } from "react-dom";
import App from "../components/ButtonConsole"; // Ajuste o caminho conforme necessário

window.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  document.querySelector(".container").append(div);

  const root = createRoot(div);
  root.render(<App />);
});
