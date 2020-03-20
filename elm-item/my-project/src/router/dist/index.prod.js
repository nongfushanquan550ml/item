"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _vue=_interopRequireDefault(require("vue")),_vueRouter=_interopRequireDefault(require("vue-router")),_Main=_interopRequireDefault(require("../pages/Main.vue")),_Home=_interopRequireDefault(require("../pages/Home.vue")),_Recover=_interopRequireDefault(require("../pages/Recover.vue")),_Dail=_interopRequireDefault(require("../pages/Dail.vue")),_Topone=_interopRequireDefault(require("../pages/Topone.vue")),_list=_interopRequireDefault(require("../pages/list.vue")),_Login_d=_interopRequireDefault(require("../pages/Login_d.vue")),_MoreC=_interopRequireDefault(require("../pages/MoreC.vue")),_Quit=_interopRequireDefault(require("../pages/Quit.vue"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}_vue.default.use(VueRouter);var routes=[{path:"/main",component:_Main.default,name:"main",children:[{path:"home",component:_Home.default,name:"home",alias:"h"},{path:"recover",component:_Recover.default,name:"recover"},{path:"list",component:_list.default,name:"list"},{path:"topone",component:_Topone.default,name:"topone"}]},{path:"/dail/:id",component:_Dail.default,name:"dail"},{path:"/",redirect:"/main/home"},{path:"/logi",component:_Login_d.default,name:"logi"},{path:"/more",component:_MoreC.default,name:"more"},{path:"/quit",component:_Quit.default,name:"quit"}],router=new VueRouter({routes:routes}),_default=router;exports.default=_default;