import * as React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./app";
import { DataProvider } from "./data";

const dataStr = document.querySelector("#data").textContent;

hydrateRoot(
  document.getElementById("root"),
  <DataProvider data={JSON.parse(dataStr)}>
    <App />
  </DataProvider>
);
