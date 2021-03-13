"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SomeData_1 = __importDefault(require("./Utils/SomeData"));
const port = 5000;
const app = express_1.default();
const add = (a, b) => a + b;
app.get('/members', (req, res) => {
    const response = JSON.stringify({ data: SomeData_1.default, add: add(5, 6) });
    res.send(response);
});
app.get('/', (req, res) => {
    res.send('response');
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
