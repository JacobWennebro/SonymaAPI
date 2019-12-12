"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tv_1 = __importDefault(require("./apis/tv"));
const anime_1 = __importDefault(require("./apis/anime"));
const winston_1 = __importDefault(require("winston"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(`mongodb+srv://admin:potatofarm123@cluster0-gme4s.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
        throw err;
    console.log('Connected to database');
});
const logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console()
    ]
});
logger.info('fuck you winston');
/* LOAD API's (port) */
tv_1.default(4000);
anime_1.default(3000);
