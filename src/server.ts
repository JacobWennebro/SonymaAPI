import fs from 'fs'
import fetch from 'node-fetch'
import { promisify } from 'util'
import AnimeAPI from './anime'
import winston, { addColors } from 'winston'

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});


logger.info('fuck you winston');

/* LOAD API's */
AnimeAPI();