import Express, { Router, Request, Response } from 'express'
import fs from 'fs'
import { join } from 'path'

const router = Router();

const versions = fs.readdirSync(__dirname).filter(f => fs.statSync(join(__dirname, f)).isDirectory());

versions.forEach(v => {
    fs.readdirSync(join(__dirname, v)).forEach(route => {
        router.use('/'+v, require(join(__dirname, v, route)));
        console.log(`[ANIME-API] Loaded ${v}/${route.replace('.ts', '')} route.`);
    });
});

module.exports = router;