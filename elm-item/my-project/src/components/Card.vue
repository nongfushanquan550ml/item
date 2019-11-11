<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-card
      v-for="(value,index) in restaurantsComputed"
      :key="index"
      :num="value.distance"
      :price="value.next_business_time"
      :desc="value.description"
      :title="value.name"
      @click="navToDetal(value.name)"
      :thumb="value.img"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>
  </van-list>
</template>
<script>
import Vue from "vue";
import { Card, Tag, Button, List } from "vant";
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);
Vue.use(List);
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      restaurants: []
    };
  },
  computed: {
    search() {
      return this.$store.getters.getAuthor;
    },
    restaurantsComputed(){
      if (this.search.value) {
       return this.restaurants.filter(item => {
          if (item.name.indexOf(this.search.value) >= 0) {
            return item;
          }
        });
      } else {
        return this.restaurants;
      }
    }
  },
  created() {},
  methods: {
    onLoad() {
      this.$axios.get("http://localhost:3000/restaurants").then(({ data }) => {
        this.restaurants = this.restaurants.concat(data);
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.restaurants.length >= 9) {
          //当数据加载到9条时，数据加载结束
          this.finished = true;
        }
      });
    },
     navToDetal(index){
       this.$router.push({
          // /dail/123?plan=private
         name:"dail",
          params: { id: index },
        // query: { plan: "private" }

       })
    // window.console.log(index)
  },
  }
};
</script>