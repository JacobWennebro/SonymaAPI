"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../schemas/Post"));
const node_cron_1 = __importDefault(require("node-cron"));
const HorribleSubs = require('node-horriblesubs');
const tmdb = require('themoviedb-api-client')('504d32911711bd8069c0be362b804be7');
exports.default = (cronTime) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('[ANIME-API] Loaded HorribleSubs updater.');
    node_cron_1.default.schedule(cronTime, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('BEGAN CRONJOB');
        const allAnime = yield HorribleSubs.getAllAnime();
        for (let i in allAnime) {
            const data = yield HorribleSubs.getAnimeData(allAnime[i].url);
            const episodes = yield HorribleSubs.getAnimeEpisodes(data.id);
            const details = (yield tmdb.searchMulti({ query: data.title })).body.results[0];
            if (!details) {
                console.log('Skipping ' + data.title);
                continue;
            }
            console.log('Pushing ' + data.title);
            const post = new Post_1.default(Object.assign(Object.assign({}, details), { episodes }));
            const postdata = yield post.save();
        }
    }));
});
