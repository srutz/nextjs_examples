"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function HelloComponent({ name }) {
    return ((0, jsx_runtime_1.jsxs)("h1", { children: ["Hello, ", name, "!"] }));
}
exports.HelloComponent = HelloComponent;
