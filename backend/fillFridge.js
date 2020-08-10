import fs from "fs";
import path from "path";

export default function fillFridge(data) {
  fs.writeFileSync(
    path.resolve(process.cwd(), "backend/theFridge.json"),
    JSON.stringify(data)
  );
}
