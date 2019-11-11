<template>
  <div class="moreth">
    <div class="moreth_1">
      <div class="moreth_1w">
        <p>兑换时，请先登录</p>
        <a href>立即登录</a>
      </div>
    </div>
    <div class="moreth_2">
      <div class="moreth_2w">
        <img src="//yun.duiba.com.cn/images/201910/crwugjcwol.jpg" alt />
      </div>
      <div class="moreth_2e">
        <a href class="b1_we">
          <img src="//yun.duiba.com.cn/images/201910/r8onusfmp9.jpg" alt />
        </a>
        <a href class="b1_we">
          <img src="//yun.duiba.com.cn/images/201910/sromdt6k96.jpg" alt />
        </a>
      </div>
    </div>
    <div class="moreth_3">
      <ul>
        <li class="cheap_card" v-for="(value,index) in list" :key="index">
          <div class="cheap_card_wr">
            <img :src="value.img" alt />
          </div>
          <div class="cheap_card_wr">
            <div class="cheap_card_wr_one">
              <span class="_surpect" v-text="value.name1"></span>
              <span class="elm_zi" v-text="value.name2"></span>
            </div>
            <div class="cheap_card_wr_two">
              <p v-text="value.money"></p>
            </div>
            <div class="cheap_card_wr_three">
              <span>兑换</span>
            </div>
          </div>
        </li>
      </ul>

      <ul>
        <li class="cheap_card" v-for="(value,index) in things" :key="index">
          <div class="cheap_card_wr">
            <img :src="value.img" alt />
          </div>

          <div class="cheap_card_wr">
            <div class="cheap_card_wr_one">
              <span class="_surpect" v-text="value.money" style="backgroundColor:#2eb6ee"></span>
              <span class="elm_zi" v-text="value.name"></span>
            </div>
            <div class="cheap_card_wr_two">
              <p v-text="value.num"></p>
            </div>
            <div class="cheap_card_wr_three">
              <span>兑换</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      things: []
    };
  },
  created() {
    this.onLoad();
    this.rethings();
  },
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/morecover").then(({ data }) => {
        this.list = data;
        window.console.log(this.list);
      });
    },
    rethings() {
      this.$axios.get("http://localhost:3000/things").then(({ data }) => {
        this.things = data;
        window.console.log(this.things);
      });
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px/1080) * 100vw;
}
.moreth {
  background-color: #f9f9f9;
  .moreth_1 {
    height: vw(142);
    padding: 0 vw(50);
    background-color: #ffffff;
    margin-bottom: vw(50);
       position: sticky;
      top: 0;
      z-index: 999;
    .moreth_1w {
      height: 100%;
      line-height: vw(142);
      margin-bottom: vw(40);
      p {
        float: left;
        margin: 0;
      }
      a {
        width: vw(250);
        height: vw(80);
        float: right;
        background-color: #ff6d41;
        color: #ffffff;
        border-radius: vw(40);
        text-align: center;
        line-height: vw(80);
        font-size: vw(40);
        margin-top: vw(30);
      }
    }
  }
  .moreth_2 {
    width: vw(1000);
    height: vw(360);
    margin: 0 auto;
    display: flex;
    padding-bottom: vw(50);
    .moreth_2w {
      flex: 1;
      border-right: vw(2) solid #f5f5f5;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .moreth_2e {
      flex: 1;
      display: flex;
      flex-direction: column;
      .b1_we {
        height: vw(180);
        border-bottom: vw(2) solid #f5f5f5;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .moreth_3 {
    ul {
      display: flex;
      flex-wrap: wrap;
      .cheap_card {
        width: vw(530);
        height: vw(580);
        margin-bottom: vw(5);
        margin-right: vw(5);
        display: flex;
        flex-direction: column;
        .cheap_card_wr {
          background-color: #ffffff;
          padding: vw(34) vw(40) vw(27) vw(40);
          font-size: vw(30);
          flex: 1;
          img {
            width: 100%;
            height: 100%;
          }
          .cheap_card_wr_one {
            ._surpect {
              margin-left: vw(50);
              display: inline-block;
              padding: 0 vw(10);
              background-color: #f0d98d;
              color: #ffffff;
              line-height: vw(50);
              text-align: center;
              border-radius: vw(20);
            }
            .elm_zi {
              font-size: vw(32);
              margin-left: vw(20);
              line-height: vw(32);
              display: inline-block;
              width: vw(190);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .cheap_card_wr_two {
            p {
              color: #ff6d41;
              margin: 0;
              margin-top: vw(33);
              margin-bottom: vw(9);
              margin-left: vw(50);
            }
          }
          .cheap_card_wr_three {
            position: relative;
            span {
              position: absolute;
              right: 0;
              display: block;
              width: vw(150);
              height: vw(60);
              border: vw(2) solid #ff6d41;
              border-radius: vw(40);
              font-size: vw(30);
              line-height: vw(60);
              text-align: center;
              color: #ff6d41;
            }
          }
        }
      }
    }
  }
}
</style>