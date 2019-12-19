import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const _schema = {
  title: String,
  authorId: String,
  content: String,
  date: { type: Date, default: Date.now },
};

const postSchema = new mongoose.Schema(_schema);
// postSchema.method('customMethod', function () {
// ...
// })
// const post = new postModel;
// post.customMethod();
postSchema.plugin(mongoosePaginate);
const postModel = mongoose.model('Post', postSchema);
// https://www.npmjs.com/package/mongoose-paginate-v2

export default postModel;
