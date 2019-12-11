import Express, { Application, Request, Response, Router } from 'express';
import AnimeSchema from '../../schemas/Post'

const router: Router = Router();

router.get('/random', (req, res) => {

    if(typeof req.query.count === 'undefined') req.query.count = 5;
    if(req.query.count > 20) req.query.count = 20;
    if(req.query.count < 1) req.query.count = 1;
    if(!Number(req.query.count)) req.query.count = 1;

    AnimeSchema.aggregate([
        {$sample: {size: Number(req.query.count)}}
    ], (err: Error, docs: any) => {
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