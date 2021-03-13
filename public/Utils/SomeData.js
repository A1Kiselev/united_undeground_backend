"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestDataModel_1 = require("../models/TestDataModel");
const someData = [
    new TestDataModel_1.TestDataObject('test1', 15, "Farmer" /* farmer */),
    new TestDataModel_1.TestDataObject('test2', 25, "Crafter" /* crafter */),
    new TestDataModel_1.TestDataObject('test3', 28, "Miner" /* miner */),
];
exports.default = someData;
