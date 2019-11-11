<template>
  <van-grid :column-num="5" :border="false">
    <van-grid-item v-for="(value,i) in slist" :key="i" :icon="value.img" :text="value.name"  />
  </van-grid>
</template>
<script>
import Vue from "vue";
// import $ from "jquery";
//通过axios调用ajax
import axios from "axios";
import { Grid, GridItem, Image } from "vant";
Vue.use(Grid).use(GridItem);
Vue.use(Grid).use(Image);
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      axios.get("http://localhost:3000/endata").then(response => {
        // window.console.log(response.data);
        this.list = response.data;
      });
      // $.ajax({
      //   url:"http://localhost:3000/endata",
      //   type:"GET",
      //   success(data){
      //     window.console.log(data)
      //   }
      // })
    }
  },
  computed: {
    slist() {
      return this.list.slice(0, 10);
    }
  }
};
</script>
<style lang="scss">
  .van-icon__image {
    width: 1.5em;
    height: 1.5em;
}
.van-grid-item__text {
    font-size: 3.7vw;
}
</style>