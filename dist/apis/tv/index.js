"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webserver_1 = __importDefault(require("./webserver"));
exports.default = (port) => {
    webserver_1.default(port);
};
