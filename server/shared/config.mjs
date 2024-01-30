import dotenv from "dotenv";
dotenv.config();
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../../.env") });
const Database_URL =  process.env.Database_URL;
const port =  process.env.PORT;
export {
  Database_URL,
  port
};