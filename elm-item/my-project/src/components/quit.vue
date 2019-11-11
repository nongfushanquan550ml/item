<template>
  <div class="quit">
    <div class="qiut_1 van-hairline--bottom">
      <span class="titl">头像</span>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
        alt
      />
      <van-icon class="lrc" name="arrow" />
    </div>
    <div class="qiut_2 van-hairline--bottom">
      <span class="titl">用户名</span>
      <span class="titl2" v-text="pname()"></span>
      <van-icon class="lrc" name="arrow" />
    </div>
    <div class="qiu">账号绑定</div>
    <div class="qiut_2 van-hairline--bottom">
      <span class="titl">手机</span>
      <span class="titl2" v-text="Tel()"></span>
      <van-icon class="lrc" name="arrow" />
    </div>
    <div class="qiu">安全设置</div>
    <div class="qiut_2 van-hairline--bottom">
      <span class="titl">登录密码</span>
      <span class="titl2">未设置</span>
      <van-icon class="lrc" name="arrow" />
    </div>
    <div class="tuideng" @click="del">退出登录</div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
//v-model只能运用于表单
export default {
  data() {
    return {
      username: "一头小母猪",
      name: "",
      tel:13600073154,
      telp:""
    };
  },
  methods: {
    pname() {
       return this.name?this.name:this.username;
    },
    Tel(){
        return this.telp?this.telp:this.tel;
    },
    del(){
        this.$cookie.delete('name')
        this.$cookie.delete('tel')
        // this.$router.push({
        //     name:"topone"
        // })
        window.location.replace("/main/topone")
    }
  },
  created() {
    this.name = this.$cookie.get("name");
    this.telp = this.$cookie.get("tel");
    this.pname();
    this.Tel();
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px/1080) * 100vw;
}
.quit {
  background-color: #f5f5f5 !important;
  height: vw(1960);
}
.qiut_1 {
  height: vw(230);
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0 vw(54) 0 vw(40);
  img {
    width: vw(174);
    height: vw(174);
    border-radius: 50%;
  }
  .titl {
    font-size: vw(42);
    font-weight: bold;
    margin-right: vw(670);
  }
  .lrc {
    margin-left: vw(15);
    font-size: vw(38);
  }
}
.qiut_2 {
  height: vw(144);
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0 vw(54) 0 vw(40);
  position: relative;
  .titl {
    font-size: vw(42);
    font-weight: bold;
  }
  .titl2 {
    margin-left: vw(15);
    font-size: vw(30);
    color: #676767;
    position: absolute;
    right: vw(94);
  }
  .lrc {
    margin-left: vw(15);
    font-size: vw(38);
    position: absolute;
    right: vw(54);
  }
}
.qiu {
  height: vw(108);
  font-size: vw(30);
  line-height: vw(108);
  color: #999;
  padding-left: vw(40);
}
.tuideng {
  margin-top: vw(57);
  text-align: center;
  color: #ff5339;
  height: vw(140);
  line-height: vw(140);
  background-color: #ffffff;
}
</style>