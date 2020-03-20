"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Main = _interopRequireDefault(require("../pages/Main.vue"));

var _Home = _interopRequireDefault(require("../pages/Home.vue"));

var _Recover = _interopRequireDefault(require("../pages/Recover.vue"));

var _Dail = _interopRequireDefault(require("../pages/Dail.vue"));

var _Topone = _interopRequireDefault(require("../pages/Topone.vue"));

var _list = _interopRequireDefault(require("../pages/list.vue"));

var _Login_d = _interopRequireDefault(require("../pages/Login_d.vue"));

var _MoreC = _interopRequireDefault(require("../pages/MoreC.vue"));

var _Quit = _interopRequireDefault(require("../pages/Quit.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//引入组件
_vue["default"].use(VueRouter); //创建路由


var routes = [//当页面为http://localhost:8080/home,在<router-view>加载Home组件
{
  path: '/main',
  component: _Main["default"],
  name: 'main',
  children: [{
    path: 'home',
    component: _Home["default"],
    name: 'home',
    // 别名
    alias: 'h'
  }, {
    path: 'recover',
    component: _Recover["default"],
    name: 'recover'
  }, {
    path: 'list',
    component: _list["default"],
    name: 'list'
  }, {
    path: 'topone',
    component: _Topone["default"],
    name: 'topone'
  }]
}, //动态路由 
{
  path: '/dail/:id',
  component: _Dail["default"],
  name: 'dail'
}, // 默认重定向
{
  path: '/',
  redirect: '/main/home'
}, {
  path: '/logi',
  component: _Login_d["default"],
  name: 'logi'
}, {
  path: '/more',
  component: _MoreC["default"],
  name: 'more'
}, {
  path: '/quit',
  component: _Quit["default"],
  name: 'quit'
}];
var router = new VueRouter({
  routes: routes
});
var _default = router;
exports["default"] = _default;