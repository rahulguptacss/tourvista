import fs from "fs";
import path from "path";
import type { AppData } from "../types";

export function getAppData(): AppData {
  const filePath = path.join(process.cwd(), "components", "data", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as AppData;
}
