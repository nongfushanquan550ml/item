<template>
  <div class="App_1EAON">
    <div class="App_3Q8Qb">
      <h3 class="App_3Q8Qb_h3">
        <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt />
      </h3>

      <div class="MessageLogin">
        <section>
          <input
            type="text"
            name
            id="tel"
            v-model="tel"
            class="t"
            autocomplete="off"
            placeholder="手机号码"
          />
          <button class="btn_bu">获取验证码</button>
        </section>
        <section>
          <input
            type="text"
            name
            id="pas"
            v-model="password"
            class="t"
            autocomplete="off"
            placeholder="验证码"
          />
        </section>
        <p class="title_p">
          新用户登录即自动注册，并表示已同意
          <span>《用户服务协议》</span> 和
          <span>《隐私权政策》</span>
        </p>
        <button class="u_btn" @click="log">登录</button>
        <p class="title_pwr">关于我们</p>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";

export default {
  data() {
    return {
      tel: "",
      password: ""
    };
  },
  methods: {
    log() {
      //  this.$axios.get("http://localhost:3000/dlog",{
      //    params:{
      //     tel:this.tel,
      //     pas:this.pas
      //    }
      //  }).then(({data})=>{
      //    window.console.log(data)
      //  })
      this.$axios
        .post(
          "http://localhost:3000/login",
          qs.stringify({ tel: this.tel, password: this.password }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
          // { headers: { "Content-Type": "text/plain" } }
        )
        .then(({ data }) => {
          if (data.mesg == "登录成功") {
            //cookie中的各种数据都是以字符串的形式存储
            // let co=data.name;
            window.console.log(data.username);
            this.$cookie.set("name", data.username, 7);
            this.$cookie.set("tel", data.tel, 7);
            this.$router.push({
              name: "topone"
            });
          }
        });
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px/1080) * 100vw;
}
.App_1EAON {
  height: auto;
  min-height: 100%;
  padding-top: vw(112);
  .App_3Q8Qb {
    width: vw(824);
    margin: 0 auto;
    text-align: center;
    .App_3Q8Qb_h3 img {
      width: vw(360);
      height: vw(153);
    }
    .MessageLogin {
      section {
        margin-bottom: vw(40);
        width: vw(825);
        height: vw(133);
        background-color: #ffffff;
        border: vw(2) solid #dddddd;
        border-radius: vw(20);
        position: relative;
        padding-left: vw(30);
        .t {
          width: 98%;
          height: 95%;
          border-radius: vw(20);
          border: none;
        }
        .btn_bu {
          height: 100%;
          width: vw(220);
          position: absolute;
          top: 0;
          right: vw(20);
          font-size: vw(32);
          color: #666;
          background-color: #ffffff;
          border: none;
        }
      }
      .title_p {
        font-size: vw(36);
        color: #999999;
        text-align: start;
        margin-bottom: vw(97);
        span {
          color: #2395ff;
        }
      }
      .u_btn {
        width: vw(826);
        height: vw(117);
        margin: 0;
        padding: 0;
        border: 1px solid transparent; //自定义边框
        outline: none; //消除默认点击蓝色边框效果
        background-color: #4cd96f;
        color: #ffffff;
        margin-bottom: vw(54);
      }
      .title_pwr {
        font-size: vw(36);
        color: #999999;
        margin: 0;
      }
    }
  }
}
</style>