import {config} from 'dotenv';
import { appendFile,readFile } from 'fs/promises';
import { error } from 'console';
config();
import { startServer } from "./config";

import { v1Router } from "./routes";

startServer(v1Router, () => {
    console.log("Server started");
});