const fs = require("fs");
const path = require("path");

export default function getItems() {
  let data = fs.readFileSync(
    path.resolve(process.cwd(), "backend/theFridge.json")
  );
  const theFridge = JSON.parse(data);
  return theFridge;
}
