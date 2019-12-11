import { Schema, model } from 'mongoose'
import MongooseRandom from 'mongoose-simple-random'

const PostSchema = new Schema({
    titles: Object,
    description: String,
    avg_rating: String,
    poster: String,
    cover: String,
    trailer: String,
    adult: Boolean,
    src: Object
}, {strict: false});

PostSchema.plugin(MongooseRandom);

export default model('anime', PostSchema);