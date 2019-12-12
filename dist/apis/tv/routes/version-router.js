"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const router = express_1.Router();
const versions = fs_1.default.readdirSync(__dirname).filter(f => fs_1.default.statSync(path_1.join(__dirname, f)).isDirectory());
versions.forEach(v => {
    fs_1.default.readdirSync(path_1.join(__dirname, v)).forEach(route => {
        router.use('/' + v, require(path_1.join(__dirname, v, route)));
        console.log(`[TV-API] Loaded ${v}/${route.replace('.ts', '')} route.`);
    });
});
module.exports = router;
