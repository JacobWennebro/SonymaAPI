import { Schema, model } from 'mongoose'
import PostSchema from '../schemas/Post'
import cron from 'node-cron'

const HorribleSubs = require('node-horriblesubs');
const tmdb = require('themoviedb-api-client')('504d32911711bd8069c0be362b804be7');

export default async (cronTime: string) => {
    console.log('[ANIME-API] Loaded HorribleSubs updater.');

    cron.schedule(cronTime, async () => {

        console.log('BEGAN CRONJOB');

        const allAnime = await HorribleSubs.getAllAnime();

        for (let i in allAnime) {

            const data = await HorribleSubs.getAnimeData(allAnime[i].url);
            const episodes = await HorribleSubs.getAnimeEpisodes(data.id);

            const details = (await tmdb.searchMulti({ query: data.title })).body.results[0];

            if (!details) {
                console.log('Skipping ' + data.title);
                continue;
            }

            console.log('Pushing ' + data.title);

            const post = new PostSchema({ ...details, episodes });

            const postdata = await post.save();
        }

    });
}