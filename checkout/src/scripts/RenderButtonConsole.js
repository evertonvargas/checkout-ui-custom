import React from "react";
import { createRoot } from "react-dom";
import { ButtonConsole } from "../components/ButtonConsole";

window.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  document.querySelector(".container").append(div);

  const root = createRoot(div);
  root.render(<ButtonConsole />);
});
