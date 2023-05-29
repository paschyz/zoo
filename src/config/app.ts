import * as express from "express";
import { IncomingMessage, Server, ServerResponse } from "http";

// if it ain't broke, don't fix it eheh eh
// update (2023-06-28 12:17): it broke.
// update (2023-06-28 12:18): it's fixed.
// update (2023-06-28 12:19): it broke again.
// update (2023-06-28 12:20): Nevermind the error was somewhere else.
type Listen = Server<typeof IncomingMessage, typeof ServerResponse>;

const startServer: (router: express.Router, callback?: () => void) => { app: express.Application; server: Listen } = (
    router,
    callback
) => {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(express.json());

    app.use(router);

    const server: Listen = app.listen(port, () => {
        if (process.env.NODE_ENV !== "test") {
            console.log(`Server listening on port ${port}`);
        }

        if (callback) {
            callback();
        }
    }).on("error", (error: Error) => {
        if (error.message.includes("EADDRINUSE")) {
            if (process.env.NODE_ENV !== "test") {
                console.error(`Server failed: ${error.message}`);
                process.exit(1);
            }
        }
    });

    return { app, server };
}

export { startServer };