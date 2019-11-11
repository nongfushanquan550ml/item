<template>
  <header class="index-JMUSj_0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-okfdP_0">
      <path
        fill="#FFF"
        fill-rule="evenodd"
        d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
      />
    </svg>
    <span class="placelist">广州市</span>
    <div class="down"></div>
    <!--向下的三角形-->
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss">
@function vw($px){
    @return($px/1080)*100vw
};
.index-JMUSj_0 {
  width: 100%;
  height: vw(140);
  line-height: vw(140);
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
}

.index-JMUSj_0 .placelist {
  font-size: vw(44);
  font-weight: bold;
  color: #fff;
  margin-left: vw(30);
}
/* css样式写的一个地点图标 */
.index-okfdP_0 {
  margin-left: vw(60);
  width: 0.346667rem;
  width: 3.466667vw;
  height: 0.413333rem;
  height: 4.133333vw;
  fill: #fff;
}
.down {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: vw(15) solid transparent;
  border-right:vw(15) solid transparent;
  border-top: vw(15) solid #ffffff;
  font-size: 0;
  line-height: 0;
  margin: 0 0 vw(15) vw(30);
}
</style>