<template>
  <div class="login">
    <div class="login_top" @click="skip">
      <div class="login_top_l">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
          alt
        />
      </div>
      <div class="login_top_c">
        <h3>{{user}}</h3>
        <p>{{tel}}</p>
      </div>
      <div class="login_top_r"></div>
    </div>
    <div class="login_center">
      <div class="ioco">
        <p v-show="tf">
          <span class="tent-one" style="color:red" >0</span>
          <span class="tent-two" style="color:red">个</span>
        </p>
        <img v-show="df" src="../assets/red_backg.png" alt />
        <span>红包</span>
      </div>
      <div class="ioco">
        <p v-show="tf">
          <span class="tent-one" style="color:green">0</span>
          <span class="tent-two" style="color:green">个</span>
        </p>
        <img v-show="df" src="../assets/mon.png" alt />
        <span>金币</span>
      </div>
    </div>
    <div class="login_bot">
      <div class="login_bot_aw _tom">
        <img src="../assets/a1.png" alt />
        <span>我的地址</span>
        <div class="pig"></div>
      </div>
      <div class="login_bot_aw">
        <img src="../assets/a2.png" alt />
        <span>金币商场</span>
        <div class="pig"></div>
      </div>
      <div class="login_bot_aw _toh">
        <img src="../assets/a3.png" alt />
        <span>分享拿20元现金</span>
        <div class="pig"></div>
      </div>
      <div class="login_bot_aw">
        <img src="../assets/a4.png" alt />
        <span>我的客服</span>
        <div class="pig"></div>
      </div>
      <div class="login_bot_aw">
        <img src="../assets/a5.png" alt />
        <span>下载饿了么APP</span>
        <div class="pig"></div>
      </div>
      <div class="login_bot_aw">
        <img src="../assets/a6.png" alt />
        <span>规则中心</span>
        <div class="pig"></div>
      </div>
    </div>
    <div class="login_tob">
      <a href="###">隐私政策</a>
    </div>
  </div>
</template>
<script>
export default {
 
  data() {
    return {
      // don: "登录/注册",
      don2: "",
      // donh: "登录后享受更多特权",
      donh2: "",
      df: true,
      tf: false,
      user:"登录/注册",
      tel:"登录后享受更多特权"

    };
  },
  methods: {
    skip() {
      this.$cookie.get("tel")?
      this.$router.push({
        name: "quit"
      }):this.$router.push({
        name: "logi"
      })
    },
    change1() {
      window.console.log("1111")
      this.user=this.$cookie.get("tel") ? this.don2 : this.user;
    },
    change2() {
      this.tel= this.$cookie.get("name") ? this.donh2 : this.tel;
    }
  },
  activated() {
     this.don2 = this.$cookie.get("name");
    this.donh2 = this.$cookie.get("tel");
    this.$cookie.get("tel") ? (this.df = false) : (this.df = true);
    this.$cookie.get("tel") ? (this.tf = true) : (this.tf = false);
    this.change1();
    this.change2();
  },
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px/1080) * 100vw;
}
.login {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  .login_top {
    display: flex;
    align-items: center;
    width: 100%;
    height: vw(315);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    justify-content: space-around;
    .login_top_l {
      width: vw(180);
      height: vw(180);
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .login_top_c {
      width: vw(720);
      h3 {
        color: #fff;
        font-size: vw(52);
        margin: 0;
      }
      p {
        color: #ffffff;
        font-size: vw(30);
        margin: 0;
        margin-top: vw(30);
        padding-left: vw(40);
        background: url(../assets/phone.png) no-repeat center left;
        background-size: vw(24) vw(34);
      }
    }
    .login_top_r {
      width: 7px;
      height: 7px;
      border-top: 2px solid #ffffff;
      border-right: 2px solid #ffffff;
      transform: rotate(45deg);
      margin-right: vw(30);
    }
  }
  .login_center {
    width: 100%;
    height: vw(240);
    display: flex;
    background-color: #ffffff;
    .ioco {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-bottom: vw(5) solid #f5f5f5;
      border-left: vw(5) solid #f5f5f5;
      padding: vw(30);
      p {
        margin: 0;
        .tent-one {
          font-size: vw(55);
        }
      }
      img {
        width: vw(76);
        height: vw(72);
        margin-bottom: vw(20);
      }
      span {
        font-size: vw(33);
        color: #666666;
      }
    }
  }
  .login_bot {
    background-color: #f5f5f5;
    font-size: vw(43);
    width: 100%;
    line-height: vw(126);
    .login_bot_aw {
      position: relative;
      background-color: #ffffff;
      border-top: vw(1) solid #f5f5f5;
      border-bottom: vw(1) solid #f5f5f5;
      img {
        width: vw(54);
        height: vw(54);
        margin-left: vw(44);
        margin-right: vw(44);
        //垂直对齐方式
        vertical-align: middle;
      }
      .pig {
        width: 7px;
        height: 7px;
        border-top: 2px solid #bbbbbb;
        border-right: 2px solid #bbbbbb;
        transform: rotate(45deg);
        margin-right: vw(30);
        position: absolute;
        right: vw(20);
        top: vw(54);
      }
    }
    ._tom {
      margin-top: vw(30);
      margin-bottom: vw(30);
    }
    ._toh {
      margin-bottom: vw(30);
    }
  }
  .login_tob {
    height: vw(372);
    a {
      display: block;
      font-size: vw(40);
      color: #4da6f0;
      text-align: center;
      width: 100%;
      margin-top: vw(70);
    }
  }
}
</style>