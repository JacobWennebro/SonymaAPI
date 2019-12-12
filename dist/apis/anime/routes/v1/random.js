"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Post_1 = __importDefault(require("../../schemas/Post"));
const router = express_1.Router();
router.get('/random', (req, res) => {
    if (typeof req.query.count === 'undefined')
        req.query.count = 5;
    if (req.query.count > 20)
        req.query.count = 20;
    if (req.query.count < 1)
        req.query.count = 1;
    if (!Number(req.query.count))
        req.query.count = 1;
    Post_1.default.aggregate([
        { $sample: { size: Number(req.query.count) } }
    ], (err, docs) => {
        res.json(docs);
    });
    /*AnimeSchema.findRandom({}, {}, { count: 5 }, function (err: Error, results: any) {
        if (err) console.log(err);
        else {
            console.dir(results);
            res.json(results);
        }
    });*/
});
module.exports = router;
