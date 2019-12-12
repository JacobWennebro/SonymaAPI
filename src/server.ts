import fs from 'fs'
import fetch from 'node-fetch'
import { promisify } from 'util'
import TVAPI from './apis/tv'
import AnimeAPI from './apis/anime'
import winston, { addColors } from 'winston'
import mongoose from 'mongoose'

mongoose.connect(`mongodb+srv://admin:potatofarm123@cluster0-gme4s.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }, (err: Error) => {
    if(err) throw err;

    console.log('Connected to database');
});

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});


logger.info('fuck you winston');

/* LOAD API's (port) */
TVAPI(4000);
AnimeAPI(3000);