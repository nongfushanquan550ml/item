var express = require('express');
var router = express.Router();
const { find } = require('../db/db')
/* GET home page. */
//创建路由器（网站链接）
router.get('/endata', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let dated = await find('element')
  res.json(dated)
});
router.get('/restaurants', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let dated = await find('restaurants')
  res.json(dated)
});
router.get('/cha', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  // console.log(req.query)
  let dated = await find('restaurants',
     req.query
  )
  res.json(dated)
});
// router.post('/dlog',async  function (req, res) {
//   res.append('Access-Control-Allow-Origin', '*');
//   // let po=req.body;
//   // let {tel,pas}=req.body;
//   // console.log(tel,pas)
//   await find('',req.body)
//   // res.send(po)
// });

// 登录
router.post('/login',async (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')
  let { tel, password } = req.body;
  if (!tel || !password) {
    return res.send({
      err: -1,
      mesg: '输入信息不完整',
      tel,
      password
    });
  }
  (async () => {
    let result = await find('users', {
      tel,
      password
    });
    result ? res.send({
      err: 0,
      mesg: '登录成功',
      _id: result[0]._id,
      username: result[0].username,
      tel: result[0].tel,
      password: result[0].password
    }) : res.send({
      err: -2,
      mesg: '账号密码不正确',
      result
    });
  })();

});



router.get('/morecover', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let dated = await find('morecover')
  res.json(dated)
});
router.get('/things', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let dated = await find('things')
  res.json(dated)
});
module.exports = router;
