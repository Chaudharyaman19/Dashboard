const express = require("express");
const app = express();

app.use(
  "/static",
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js") || path.endsWith(".mjs")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
