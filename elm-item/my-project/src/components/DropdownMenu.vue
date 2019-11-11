<template>
  <van-dropdown-menu>
    <van-dropdown-item v-model="value" :options="option" />
    <van-dropdown-item title="筛选" ref="item">
      <!-- <van-switch-cell v-model="switch1" title="包邮" />
      <van-switch-cell v-model="switch2" title="团购" /> -->
      <van-button block type="info" @click="onConfirm">确认</van-button>
    </van-dropdown-item>
  </van-dropdown-menu>
</template>
<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu).use(DropdownItem);
export default {
  data() {
    return {
      value: 0,
      switch1: "true",
      switch2: "true",
      option: [
        { text: "综合排序", value: 0 },
        { text: "好评优先", value: 1 },
        { text: "销量最高", value: 2 },
        { text: "起送价最低", value: 3 },
        { text: "配送最快", value: 4 },
        { text: "配送费最低", value: 5 },
        { text: "人均从低到高", value: 6 },
        { text: "人均从高到低", value: 7 },
        { text: "通用排序", value: 8 }
      ]
    };
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>