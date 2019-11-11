<template>
  <div class="index-3xB2N_0">
    <div class="index-Q3GS5_0">
      <h3 class="index_wh3">品质套餐</h3>
      <div class="index_wr" style="font-size:13px;color:#666;margin-top:10px">搭配齐全吃得好</div>
      <div class="index_b" style="font-size:13px;color:#af8260;margin-top:10px">立即抢购></div>
    </div>
    <div class="index-1DFa7_0">
      <img :src="imgs" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs:
        "https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed"
    };
  }
};
</script>
<style lang="scss">
@function vw($px){
    @return($px/1080)*100vw
};
.index-3xB2N_0 {
  height: vw(314);
  width: vw(1020);
  background-color: blue;
  margin: auto;
  box-sizing: border-box;
  padding: vw(90) 0 0 vw(60);
  background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
  display: flex;
  margin-top: vw(60)
}
.index-3xB2N_0 .index-Q3GS5_0 {
  flex: 1;
}
.index-3xB2N_0 .index-1DFa7_0 {
  flex: 1;
}
.index-3xB2N_0 .index-1DFa7_0 img {
  width: 100%;
  height: 100%;
}
.index_wh3 {
  font-size: vw(57);
  line-height:vw(57);
  margin: 0;
  color: #333;
}
</style>