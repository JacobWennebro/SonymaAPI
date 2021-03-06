import Express, { Application, Request, Response, Router } from 'express';
import path from 'path'
import { readFileSync, readdirSync, fstat, statSync} from 'fs';
import Showdown from 'showdown'

export default async (port: Number) => {
    const app: Application = Express();
    const converter = new Showdown.Converter({openLinksInNewWindow: true, tables: true});

    app.get('/', (req, res) => res.redirect('/ui/documentation?version=1'));

    app.use(require('./routes/version-router'));
    app.set('view engine', 'ejs');

    /* CREATE UI DOCUMENTATION */
    app.get('/ui/documentation', async (req, res) => {

        const version = req.query.version || 1;
        let documentation: string;
        let versionAmount: any;

        try {
            documentation = await readFileSync(path.join(__dirname, `./docs/documentation-v${version}.md`), 'utf8');

            versionAmount = (await readdirSync(path.join(__dirname, './docs'))).length;
        }
        catch(e) {
            /* Version doesn't exist */
            return res.send(`Found no documentation for this API (version ${version})`);
        }

        res.render(path.join(process.cwd(), './src/pages/docs.ejs'), {
            injected_html: converter.makeHtml(documentation),
            versions: versionAmount,
            version: version
        });
    });

    app.use('/static', Express.static(path.join(__dirname, 'static')));    

    app.listen(port, () => {
        console.log('[TV-API] Listening on port '+port);
    });
}