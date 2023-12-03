"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const server_1 = require("react-dom/server");
const HelloComponent_1 = require("./HelloComponent");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
    /* render react on the server */
    const html = (0, server_1.renderToString)((0, jsx_runtime_1.jsx)(HelloComponent_1.HelloComponent, { name: "Stepan" }));
    const content = `<html><body>
        ${html}
        </body></html>`;
    res.send(content);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
