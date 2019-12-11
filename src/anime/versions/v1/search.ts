import Express, { Application, Request, Response, Router } from 'express';
import AnimeSchema from '../../schemas/Post'

const router: Router = Router();

router.get('/search', (req, res) => {
    res.send('XD');
});


module.exports = router;