<template>
  <div class="rec">
    <div class="index_one">
      <div class="index_oneg2">
        <h3 class="index_oneg2_h3">金币商场</h3>
        <div class="index_oneg2_yuan">0元好物在这里</div>
        <div class="index_img">
          <img
            src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp"
            alt
          />
        </div>
      </div>
      <div class="index_twoig">
        <div class="or1">
          <div class="index_twoig_q">
            <p class="index_twoig_q1">推荐有奖</p>
            <span class="index_twoig_q2">20元现金拿不停</span>
          </div>
          <div class="index_twoig_w">
            <img
              src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp"
              alt
            />
          </div>
        </div>
        <div class="or1">
          <div class="index_twoig_q">
            <p class="index_twoig_q1">周边优惠</p>
            <span class="index_twoig_q2">领取口碑好券</span>
          </div>
          <div class="index_twoig_w">
            <img
              src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div class="sixgod">
      <div class="activity_header">
        <div class="left"></div>限时好礼
        <div class="right"></div>
      </div>
      <p class="activity-sub-title">金币换豪礼</p>
      <div class="activity-body">
        <a href="###">
          <span class="_one">限时优惠</span>
          <div class="_two">
            <img
              src="https://cube.elemecdn.com/e/02/d86b57a31e7a0740ab3af99bdd97cjpeg.jpeg?x-oss-process=image/format,webp"
              alt
            />
          </div>
          <span class="_three">3元品质联盟红包</span>
          <p class="_four">
            <span>90金币</span>
            <del>￥3</del>
          </p>
        </a>
        <a href="###">
          <span class="_one">特价换购</span>
          <div class="_two">
            <img
              src="https://cube.elemecdn.com/2/20/b0d0d94605fc31b9ee3ab651aa7c4jpeg.jpeg?x-oss-process=image/format,webp"
              alt
            />
          </div>
          <span class="_three">数码经络按摩仪</span>
          <p class="_four">
            <span>90金币</span>
            <del>￥239</del>
          </p>
        </a>
        <a href="###">
          <span class="_one">特价换购</span>
          <div class="_two">
            <img
              src="https://cube.elemecdn.com/f/93/a096dd082d6c42f600e460fffaa39jpeg.jpeg?x-oss-process=image/format,webp"
              alt
            />
          </div>
          <span class="_three">机械手感背光键</span>
          <p class="_four">
            <span>90金币</span>
            <del>￥130</del>
          </p>
        </a>
      </div>
      <div class="more_find">
        <p @click="tomore">查看更多</p>
      </div>
    </div>
    <div class="ad_color"></div>
  </div>
</template>
<script>
export default {
  methods: {
    tomore(){
        this.$router.push({
          name:"more"
        })
    }
  },
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px/1080) * 100vw;
}
.rec {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
}
.index_one {
  border-width: vw(1) 0;
  box-sizing: border-box;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  background: #fff;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  height: vw(460);
  width: 100%;
}
.index_one .index_oneg2 {
  flex: 1;
  padding: vw(68) vw(37) vw(32) vw(68);
}
.index_one .index_twoig {
  padding: vw(68) vw(37) vw(32) vw(68);
  flex: 1;
}
.index_oneg2_h3 {
  font-size: vw(45);
  color: #ffa217;
  margin: 0;
}
.index_oneg2_yuan {
  margin-top: vw(20);
  font-size: vw(35);
  color: #999999;
}
.index_img {
  float: right;
  margin-top: vw(20);
  width: vw(205);
  height: vw(181);
  img {
    width: 100%;
    height: 100%;
  }
}
.index_twoig_q {
  width: vw(280);
  float: left;
}
.index_twoig_q1 {
  font-size: vw(45);
  margin: 0;
  color: #1ba9e1;
  width: vw(200);
}
.index_twoig_q2 {
  margin-top: vw(20);
  font-size: vw(35);
  color: #999999;
  display: block;
  width: vw(280);
}
.index_twoig_w {
  width: vw(118);
  height: vw(120);
  float: right;
  img {
    width: 100%;
    height: 100%;
  }
}
.or1 {
  padding-bottom: vw(90);
  float: left;
}
.activity-sub-title {
  background-color: #ffffff;
  font-size: 0.293333rem;
  color: #999;
  text-align: center;
  padding-bottom: 0.213333rem;
  padding-bottom: 2.133333vw;
}
.activity-body {
  background-color: #ffffff;
  height: vw(466);
  display: flex;
  padding: 0 0 0 vw(40);
  a {
    flex: 1;
    display: block;
    ._one {
      background-color: #413d3c;
      color: #fff;
      width: vw(141);
      height: vw(52);
      display: block;
      text-align: center;
      line-height: vw(52);
      margin-bottom: vw(20);
      font-size: vw(27);
    }
    ._two {
      width: vw(282);
      height: vw(190);
      img {
        width: 100%;
        height: 100%;
      }
    }
    ._three {
      margin-top: vw(80);
      display: block;
      font-size: vw(40);
      color: #333333;
      margin-bottom: vw(20);
    }
    ._four {
      margin: 0;
      span {
        display: inline-block;
        font-size: vw(40);
        color: red;
      }
      del {
        display: inline-block;
        font-size: vw(32);
        color: #333;
        margin-left: vw(10);
      }
    }
  }
}
.more_find {
  p {
    font-size: vw(39);
    line-height: vw(39);
    color: #b9b9b9;
    text-align: center;
    margin-top: vw(80);
    display: block;
    padding-bottom: vw(40);
  }
}
.ad_color {
  height: vw(444);
  width: 100%;
}
.sixgod {
  background-color: #ffffff;
}
.activity_header {
  font-size: vw(47);
  font-weight: bold;
  text-align: center;
  background: url(../assets/colock.png) no-repeat vw(400) center;
  background-size: vw(40) vw(42);
}
</style>