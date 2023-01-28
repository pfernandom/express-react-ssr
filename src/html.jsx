import React from "react";
import App from "./app";
import { DataProvider } from "./data";

export function Html({ data }) {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="index.css" />
      </head>
      <pre id="data" style={{ display: "none" }}>
        {JSON.stringify(data)}
      </pre>
      <body>
        <div id="root">
          <DataProvider data={data}>
            <App />
          </DataProvider>
        </div>
      </body>
    </html>
  );
}
