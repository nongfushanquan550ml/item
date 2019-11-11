<template>
  <van-search
    class="_suo"
    v-model="value"
    placeholder="请输入搜索关键词"
    show-action
    shape="square"
    input-align="center"
    @scroll="Top"
  >
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      this.$store.dispatch("setAuthor", {
        value: this.value
      });
      // window.console.log(this.value);
    },
    Top() {
      window.console.log("1111");
      // let mp = this.$el.querySelectorAll("._suo");
      // var a= mp.offsetTop;
      // window.console.log(a+"111111")
      // window.console.log(mp)
      // if(window.scrollY>=a){
      //     _suo.className="_suo fix"
      // }else{
      //   // _suo.className="_suo"
      // }
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px/1080) * 100vw;
}
.fix {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}
._suo {
  position: sticky;
  top: 0;
  z-index: 999;
}
.van-search__content {
  background-color: #ffffff;
}
.van-field__left-icon {
  display: none;
}
.van-cell__value {
  font-size: vw(40);
}
.van-search {
  /* background-color:#0085ff !important; */
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff) !important;
}
</style>