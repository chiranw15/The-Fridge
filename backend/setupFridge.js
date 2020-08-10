const fs = require("fs");
const path = require("path");
const addSeconds = require("date-fns/addSeconds");

function setupFridge() {
  const defaultList = [
    {
      name: "banana",
      expiresIn: addSeconds(new Date(), 20),
      id: "f09797cb-0f4b-4177-acd5-284dd506a444",
    },
    {
      name: "djoghurtrrrr",
      expiresIn: addSeconds(new Date(), 500),
      id: "943f5814-b449-4af6-973e-9e5cd6919baa",
    },
  ];

  fs.writeFileSync(
    path.resolve(process.cwd(), "backend/theFridge.json"),
    JSON.stringify(defaultList)
  );
}

setupFridge();
