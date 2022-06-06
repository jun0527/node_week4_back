const express = require('express');
const Post = require('../models/posts');
const User = require('../models/users');
const errHandle = require('../handle/errHandle');
const { getPosts, createdPosts, deleteAllPosts, deleteOnePosts, editPosts } = require('../controller/posts');
// 建立router實體
const router = express.Router();

router.get('/posts', async (req, res) => {
  // const timeSort = req.query.timeSort === 'asc' ? 'createdAt' : '-createdAt';
  // const search = {};
  // search.content = new RegExp(req.query.q);
  // const post = await Post.find(search).populate({
  //   path: 'user',
  //   select: 'name photo',
  // }).sort(timeSort);
  // res.status(200).json({
  //   'status': 'success',
  //   'data': post,
  // })
  await getPosts(req, res);
})
router.post('/post', async (req, res) => {
  // try {
  //   const data = req.body;
  //   const newPost = await Post.create(data);
  //   res.status(200).json({
  //     'status': 'success',
  //     'data': newPost,
  //   })
  // } catch(err) {
  //   console.log(err);
  //   errHandle(res, 400);
  // }
  await createdPosts(req, res);
})
router.delete('/posts', async (req, res) => {
    // const newPost = await Post.deleteMany({});
    // res.status(200).json({
    //   'status': 'success',
    //   'data': await Post.find(),
    // })
  await deleteAllPosts(req, res);
})
router.delete('/post/:id', async (req, res) => {
  // try {
  //   const id = req.params.id;
  //   const newPost = await Post.findByIdAndDelete(id);
  //   if (newPost === null) {
  //     errHandle(res, 400);
  //   } else {
  //     res.status(200).json({
  //       'status': 'success',
  //       'data': await Post.find(),
  //     })
  //   }
  // } catch(err) {
  //   console.log(err);
  //   errHandle(res, 400);
  // }
  await deleteOnePosts(req, res);
})
router.patch('/post/:id', async (req, res) => {
  // try {
  //   const data = req.body;
  //   const id = req.params.id;
  //   const newPost = await Post.findByIdAndUpdate(id, data, {
  //     runValidators: true,
  //     returnDocument: 'after',
  //   });
  //   if (newPost === null) {
  //     errHandle(res, 400);
  //   } else {
  //     res.status(200).json({
  //       'status': 'success',
  //       'data': await Post.find(),
  //     })
  //   }
  // } catch(err) {
  //   console.log(err);
  //   errHandle(res, 400);
  // }
  await editPosts(req, res);
})

module.exports = router;