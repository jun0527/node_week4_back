const Post = require('../models/posts');
const User = require('../models/users');
const errHandle = require('../handle/errHandle');
const successHandle = require('../handle/successHandle');

const posts = {
  async getPosts(req, res) {
    const timeSort = req.query.timeSort === 'asc' ? 'createdAt' : '-createdAt';
    const search = {};
    search.content = new RegExp(req.query.q);
    const post = await Post.find(search).populate({
      path: 'user',
      select: 'name photo',
    }).sort(timeSort);
    successHandle(res, post);
  },
  async createdPosts(req, res) {
    try {
      const data = req.body;
      const newPost = await Post.create(data);
      successHandle(res, newPost);
    } catch(err) {
      console.log(err);
      errHandle(res, 400);
    }
  },
  async deleteAllPosts(req, res) {
    const newPost = await Post.deleteMany({});
    const allPost = await Post.find();
    successHandle(res, allPost);
  },
  async deleteOnePosts(req, res) {
    try {
      const id = req.params.id;
      const newPost = await Post.findByIdAndDelete(id);
      const allPost = await Post.find();
      if (newPost === null) {
        errHandle(res, 400);
      } else {
        successHandle(res, allPost);
      }
    } catch(err) {
      console.log(err);
      errHandle(res, 400);
    }
  },
  async editPosts(req, res) {
    try {
      const data = req.body;
      const id = req.params.id;
      const newPost = await Post.findByIdAndUpdate(id, data, {
        runValidators: true,
        returnDocument: 'after',
      });
      if (newPost === null) {
        errHandle(res, 400);
      } else {
        successHandle(res, newPost);
      }
    } catch(err) {
      console.log(err);
      errHandle(res, 400);
    }
  },
};

module.exports = posts;