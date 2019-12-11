import HorribleSubsUpdater from './horrible-subs-updater'
import Express, { Application, Request, Response, Router } from 'express';
import mongoose from 'mongoose'
import PostSchema from './schemas/Post'

mongoose.connect(`mongodb+srv://admin:potatofarm123@cluster0-gme4s.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, (err: Error) => {
    if(err) throw err;

    console.log('Connected to database');
});

export default async () => {

    const app: Application = Express();
    const router: Router = Router();

    app.use(require('./versions/version-router'))

    app.listen(3000);

    /* FIRE UPDATER */
    HorribleSubsUpdater('* 5 8 * * Sun'); // RUN ONCE EVERY SUNDAY
}
