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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const showdown_1 = __importDefault(require("showdown"));
exports.default = (port) => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const converter = new showdown_1.default.Converter({ openLinksInNewWindow: true, tables: true });
    app.get('/', (req, res) => res.redirect('/ui/documentation?version=1'));
    app.use(require('./routes/version-router'));
    app.set('view engine', 'ejs');
    /* CREATE UI DOCUMENTATION */
    app.get('/ui/documentation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const version = req.query.version || 1;
        let documentation;
        let versionAmount;
        try {
            documentation = yield fs_1.readFileSync(path_1.default.join(__dirname, `./docs/documentation-v${version}.md`), 'utf8');
            versionAmount = (yield fs_1.readdirSync(path_1.default.join(__dirname, './docs'))).length;
        }
        catch (e) {
            /* Version doesn't exist */
            console.log(e);
            return res.send(`Found no documentation for this API (version ${version})`);
        }
        res.render(path_1.default.join(process.cwd(), './src/pages/docs.ejs'), {
            injected_html: converter.makeHtml(documentation),
            versions: versionAmount,
            version: version
        });
    }));
    app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'static')));
    app.listen(port, () => {
        console.log('[ANIME-API] Listening on port ' + port);
    });
});
