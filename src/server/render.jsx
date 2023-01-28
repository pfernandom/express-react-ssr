import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Html } from "../html";

const ABORT_DELAY = 2000;

export async function render(url, res) {
  res.socket.on("error", (error) => {
    console.error("Fatal", error);
  });
  let didError = false;
  const data = { name: "Pedro" };
  const stream = renderToPipeableStream(
    React.createElement(Html, { data: data }, null),
    {
      bootstrapScripts: ["index.js"],
      onShellReady() {
        res.statusCode = didError ? 500 : 200;
        res.setHeader("Content-type", "text/html");
        stream.pipe(res);
      },
      onError(x) {
        didError = true;
        console.error(x);
      },
    }
  );
  setTimeout(() => stream.abort(), ABORT_DELAY);
}
