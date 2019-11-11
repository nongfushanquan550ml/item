<template>
    <van-tabbar v-model="active">
      <van-tabbar-item  to="/main/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/main/recover" icon="search">发现</van-tabbar-item>
      <van-tabbar-item to="/main/list" icon="friends-o">订单</van-tabbar-item>
      <van-tabbar-item to="/main/topone" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>

</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
export default {
     data() {
    return {
      active: 0
    }
  },
  created() {
    //刷新之后，底部高亮不会变
    window.console.log(this.$route.name)
    if(this.$route.name=="home"){
      this.active=0
    }
    if(this.$route.name=="recover"){
      this.active=1
    }
    if(this.$route.name=="list"){
      this.active=2
    }
    if(this.$route.name=="topone"){
      this.active=3
    }
  },
}
</script>