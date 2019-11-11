<template>
  <van-tabs v-model="active"  class="lable">
  <van-tab title="标签 1">
          <div class="index_tent">
            <van-sticky :offset-top="50">
        <div class="index_left">
          <ul @click="onClick">
            <li class="bb active_color">
              <img
                src="https://cube.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png?x-oss-process=image/format,webp/resize,w_26"
                alt
              />
              <span class="_tent_sfw_one">热销</span>
            </li>
             <li class="bb">
              <img
                src=""
                alt
              />
              <span class="_tent_sfw_one">热销</span>
            </li>
             <li class="bb">
              <img
                src=""
                alt
              />
              <span class="_tent_sfw_one">热销</span>
            </li>
             <li class="bb">
              <img
                src=""
                alt
              />
              <span class="_tent_sfw_one">热销</span>
            </li>
             <li class="bb">
              <img
                src=""
                alt
              />
              <span class="_tent_sfw_one">热销</span>
            </li>
             <li class="bb">
              <img
                src=""
                alt
              />
              <span class="_tent_sfw_one">热销</span>
            </li>
          </ul>
        </div>
        </van-sticky>
        <div class="index_right">
          <ul>
            <p class="index_pon"><span class="index_r">热销</span><span class="index_r_r">大家喜欢吃，才叫真好吃。</span></p>
            <li>  
                <div class="menu_o">
                  <div class="menu_o_l"><img src="https://cube.elemecdn.com/b/8b/5d5838426a19b575fdd4599f19f08jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_184,h_184/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""></div>
                  <div class="menu_o_r">
                      <h3>必点米饭</h3>
                      <p>主要原料:小麦</p>
                      <p><span>月售500份</span><span>好评率100%</span></p>
                      <div class="price_e"><span class="uf1">￥3</span><van-icon class="uf2" size="23px" color="#2396ff" name="add" /></div>
                  </div>
                </div>
            </li>
            <li>  
                <div class="menu_o">
                  <div class="menu_o_l"><img src="https://cube.elemecdn.com/b/8b/5d5838426a19b575fdd4599f19f08jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_184,h_184/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""></div>
                  <div class="menu_o_r">
                      <h3>必点米饭</h3>
                      <p>主要原料:小麦</p>
                      <p><span>月售500份</span><span>好评率100%</span></p>
                      <div class="price_e"><span class="uf1">￥3</span><van-icon class="uf2" size="23px" color="#2396ff" name="add" /></div>
                  </div>
                </div>
            </li>

          </ul>
          <ul>
            <p class="index_pon"><span class="index_r">热销</span><span class="index_r_r">大家喜欢吃，才叫真好吃。</span></p>
            <li>  
                <div class="menu_o">
                  <div class="menu_o_l"><img src="https://cube.elemecdn.com/b/8b/5d5838426a19b575fdd4599f19f08jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_184,h_184/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""></div>
                  <div class="menu_o_r">
                      <h3>必点米饭</h3>
                      <p>主要原料:小麦</p>
                      <p><span>月售500份</span><span>好评率100%</span></p>
                      <div class="price_e"><span class="uf1">￥3</span><van-icon class="uf2" size="23px" color="#2396ff" name="add" /></div>
                  </div>
                </div>
            </li>
            <li>  
                <div class="menu_o">
                  <div class="menu_o_l"><img src="https://cube.elemecdn.com/b/8b/5d5838426a19b575fdd4599f19f08jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_184,h_184/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""></div>
                  <div class="menu_o_r">
                      <h3>必点米饭</h3>
                      <p>主要原料:小麦</p>
                      <p><span>月售500份</span><span>好评率100%</span></p>
                      <div class="price_e"><span class="uf1">￥3</span><van-icon class="uf2" size="23px" color="#2396ff" name="add" /></div>
                  </div>
                </div>
            </li>
            <li>  
                <div class="menu_o">
                  <div class="menu_o_l"><img src="https://cube.elemecdn.com/b/8b/5d5838426a19b575fdd4599f19f08jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_184,h_184/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp" alt=""></div>
                  <div class="menu_o_r">
                      <h3>必点米饭</h3>
                      <p>主要原料:小麦</p>
                      <p><span>月售500份</span><span>好评率100%</span></p>
                      <div class="price_e"><span class="uf1">￥3</span><van-icon class="uf2" size="23px" color="#2396ff" name="add" /></div>
                  </div>
                </div>
            </li>

          </ul>
      </div>
          </div>
  </van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
</van-tabs>
</template>
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import { Sticky } from 'vant';

Vue.use(Sticky);
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    //点击某个变灰色，并排他
     onClick(e) {
      let mp = this.$el.querySelectorAll(".bb");
      // window.console.log(e);
      // window.console.log(this.$el.querySelectorAll('.bb'))
      for (var a = 0; a < mp.length; a++) {
        mp[a].className = "bb";
      }
      if (e.target.className== "bb") {
        e.target.className = "bb active_color";
      }
      if (e.target.className=="_tent_sfw_one") {
        e.target.parentNode.className = "bb active_color";
      }
      if (e.target.tagName=="IMG") {
        e.target.parentNode.className = "bb active_color";
      }
      
    }

  },
}
</script>
<style lang="scss">
@function vw($px){
    @return ($px/1080)*100vw;
}
.van-tabs__content{
  height:100%;
}
    .index_tent {
    background: #ffffff;
    display: flex;
    position: relative;
    .index_left {
      ul {
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f8f8f8;
          width: vw(220);
          height: vw(140);
           line-height: vw(140);
          img {
            width: vw(38);
            height: vw(38);
          }
          span {
            margin-left: vw(20);
            font-size: vw(32);
            color: #666666;
          }
        }
      }
    }
    .index_right{
      width: vw(790);
      margin-left: vw(28);
      position: absolute;
      right: 0;
        ul{
          li{
            .index_pon{
               display: flex;
              align-items: center;
              margin: vw(28) 0;
              .index_r{
                font-size: vw(30);
                font-weight: bold;
                color: #666;
                margin-right: vw(25);
              }
              .index_r_r{
                font-size: vw(25);
                color: #999;
              }
             }
             .menu_o{
               display: flex;
                .menu_o_l{
                  width: vw(274);
                   margin:vw(50) vw(30) vw(50) 0;
                  img{
                    width: 100%;
                    height: 100%;
                  }
                }
                .menu_o_r{
                  width: vw(480);
                  h3{
                    font-size: vw(40);
                  }
                  p{
                    font-size: vw(25);
                    color: #999;
                    margin: vw(26) 0;
                    span{
                      margin-right: vw(24);
                    }
                  }
                  .price_e{
                    margin-top: vw(34);
                    height: vw(60);
                    line-height: vw(60);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .uf1{
                        font-size: vw(30);
                        color: #ff5339;
                    }
                  }
                }
             }
          }
        }
    }
  }
    .van-tabs__wrap{
	position: sticky;
  top: 0;
  z-index: 999;
  }
</style>