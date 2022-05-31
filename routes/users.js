var express = require('express');
var router = express.Router();
const User = require('../models/users');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', async (req, res) => {
  const user = await User.find({});
  res.status(200).json({
    'status': 'success',
    'data': user,
  })
})

module.exports = router;
