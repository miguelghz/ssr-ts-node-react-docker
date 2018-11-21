import * as express from "express";
import {renderClient} from "./renderClient";

const port = process.env.PORT || 8000;
const server = express();

server.use(express.static('build-client'));

server.get('*', (req, res) => {
    res.send(renderClient());
});

server.listen(port, () => console.log(`Server listening on port ${port}!`));