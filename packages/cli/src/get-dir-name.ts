import { dirname } from "path";
import { fileURLToPath } from "url";

// // Don't move from this file, needs to take the reference
export const dirName = () => dirname(fileURLToPath(import.meta.url));
