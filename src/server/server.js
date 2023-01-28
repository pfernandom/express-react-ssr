const express = require("express");
const { render } = require("./render");

console.log({ render });

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public", { maxAge: "30d" }));

app.get("/", (req, res) => {
  render(req.url, res);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
