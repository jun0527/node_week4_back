const express = require('express');
const Post = require('../models/posts');
const User = require('../models/users');
const errHandle = require('../handle/errHandle');
const { getPosts, createdPosts, deleteAllPosts, deleteOnePosts, editPosts } = require('../controller/posts');
// 建立router實體
const router = express.Router();

router.get('/posts', async (req, res) => {
  await getPosts(req, res);
})
router.post('/post', async (req, res) => {
  await createdPosts(req, res);
})
router.delete('/posts', async (req, res) => {
  await deleteAllPosts(req, res);
})
router.delete('/post/:id', async (req, res) => {
  await deleteOnePosts(req, res);
})
router.patch('/post/:id', async (req, res) => {
  await editPosts(req, res);
})

module.exports = router;