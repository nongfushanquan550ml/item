<template>
  <div class="dail">
    <div class="dail_one">
      <div class="dail_one_ph">
        <div class="dail_tou" @click="toOne"></div>
      </div>
      <div class="index-ccm5A">
        <div class="index-ccm5A_img">
          <img
            :src="img"
            alt
          />
        </div>
        <p class="index_title">
          <span class="index_title1">{{name}}</span>
          <span class="index_title2"></span>
        </p>
        <div class="index_trw">
          <span>评价4.3</span>
          <span>月售610单</span>
          <span>蜂鸟快送约34分钟</span>
        </div>
        <div class="coupon">
          <img src="../assets/youhui.png" alt />
        </div>
        <div class="index_yw">
          <span>30减15</span>
          <span>45减18</span>
          <span>75减28</span>
          <span>100减38</span>
          <div class="_Cheap_b">3个优惠</div>
          <div class="_san"></div>
          <p class="gong">公共：韶山的美食，精心准备，良心服务，就等你来尝</p>
        </div>
      </div>
      <Tab />
    </div>
  </div>
</template>
<script>
import Tab from "../components/Tab";
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  data() {
    return {
      list: [],
      name:"",
      img:""
    };
  },
  methods: {
    toOne(){
      this.$router.push({
        name:"home"
      })
    }
  },
  components: {
    Tab
  },
  activated() {
    //route获取到路由路径
    let id = this.$route.params.id;
    this.$axios
      .get("http://localhost:3000/cha", {
        params: {
          name: id
        }
      })
      .then(({data}) => {
        this.list = data;
        this.name=data[0].name;
        this.img=data[0].img;
        window.console.log(this.list)
      });
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px/1080) * 100vw;
}
.active_color {
  background-color: #ffffff !important;
}
.dail_one {
  .dail_one_ph {
    height: vw(290);
    background-image: url(
     https://cube.elemecdn.com/9/22/fe7bbefda538d42c43a21cfde3e3fpng.png?x-oss-process=image/format,webp/resize,w_750
    );
    background-position: 50%;
    position: relative;
    .dail_tou {
      width: vw(30);
      height: vw(30);
      border-top: 2px solid #ffffff;
      border-right: 2px solid #ffffff;
      transform: rotate(225deg);
      margin-right: vw(30);
      position: absolute;
      top: vw(30);
      left: vw(50);
    }
  }
  .index-ccm5A {
    height: vw(394);
    padding: vw(90) 0 0 0;
    position: relative;
    .index-ccm5A_img img {
      width: vw(218);
      height: vw(218);
      position: absolute;
      top: vw(-120);
      left: vw(430);
    }
    .index_title {
      margin: 0;
      font-size: vw(60);
      font-weight: bold;
      text-align: center;
      height: vw(60);
      line-height: vw(60);
      margin-top: vw(48);
      margin-bottom: vw(30);
      .index_title2 {
        width: 0;
        height: 0;
        border-top: vw(20) solid transparent;
        border-left: vw(20) solid #666;
        border-bottom: vw(20) solid transparent;
        font-size: 0;
        line-height: 0;
        vertical-align: middle;
      }
    }
    .index_trw {
      text-align: center;
      span {
        display: inline-block;
        font-size: vw(28);
        color: #666;
        margin-right: vw(30);
      }
    }
    .coupon {
      text-align: center;
      margin-top: vw(27);
      width: 100%;
      img {
        display: inline-block;
        width: vw(416);
        height: vw(70);
      }
    }
    .index_yw {
      text-align: center;
      span {
        width: vw(116);
        height: vw(40);
        display: inline-block;
        text-align: center;
        line-height: vw(40);
        font-size: vw(20);
        color: #ff4b33;
        margin-right: vw(30);
        margin-top: vw(40);
        border: vw(2) solid #ffc9c1;
      }
      ._Cheap_b {
        width: vw(110);
        font-size: vw(26);
        color: #999;
        display: inline-block;
      }
      ._san {
        display: inline-block;
        width: 0;
        height: 0;
        border-left: vw(10) solid transparent;
        border-right: vw(10) solid transparent;
        border-top: vw(10) solid #999;
        font-size: 0;
        line-height: 0;
      }
      .gong {
        font-size: vw(26);
        color: #999;
        text-align: center;
      }
    }
  }
}
</style>