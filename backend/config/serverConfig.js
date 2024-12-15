import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from the root directory
dotenv.config({ path: path.join(__dirname, '../.env') });

export const PORT = process.env.PORT || 5000;


