import React from "react";

export function ButtonConsole() {
  return (
    <button
      className="button-style"
      onClick={() => console.log("Botão clicado")}
    >
      Imprimir no console
    </button>
  );
}
