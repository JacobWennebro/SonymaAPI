"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_simple_random_1 = __importDefault(require("mongoose-simple-random"));
const PostSchema = new mongoose_1.Schema({
    titles: Object,
    description: String,
    avg_rating: String,
    poster: String,
    cover: String,
    trailer: String,
    adult: Boolean,
    src: Object
}, { strict: false });
PostSchema.plugin(mongoose_simple_random_1.default);
exports.default = mongoose_1.model('anime', PostSchema);
