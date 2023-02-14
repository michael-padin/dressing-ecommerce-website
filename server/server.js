import http from "http"
import app from "./index.js"

//const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => console.log(`Server is running at ${port}`));
