<template lang="html">
<div>
<v-mask></v-mask>
<v-panel></v-panel>
  <Affix :offset-bottom="0">
     <footer class="demo-affix">
          <ul v-model="selected">
            <li @click.stop='goTop()'>
              <span class='footer_nav'></span>
              <span class="footer_label">回到顶部</span>
            </li>
             <li @click.stop='gotoRouter("购物车页")'>
              <span class='footer_nav'></span>
              <span class="footer_label">购物车</span>
            </li>
          </ul>
          <ul>
            <li  @click="showPanel('cart')"style="width:100%;">
              <v-bt1><span slot="title">加入购物车</span></v-bt1>
            </li>
<!--             <li @click="toPay">
              <v-bt1><span slot="title">立即购买</span></v-bt1>
            </li> -->
          </ul>
        </footer>
  </Affix>  
</div>

</template>

<script>
import Bt1 from '@/common/base/buttton/bt1.vue';
import Panel from '@/common/base/modal/cart/panel.vue';
import Mask from '@/common/base/mask.vue';
  export default {
    components: {
      'v-bt1':Bt1,
       'v-panel': Panel,
       'v-mask': Mask
    },
    props:['num'],
    methods: {
      addIntoPay(){
              this.$router.push({
                name: '购物车页'
              });
              $('#mask').trigger('click');
          },
          //显示购物车面板和遮罩层
            showPanel(name){
              
              $.each($('.panel'),function(index, el) {
                if($(el).data('name')===name){
                  if($(el).hasClass("show")){
                    $('.js-add-red-car').trigger('click'); 
                  }else{
                    $('#mask').addClass('show');
                    $('.panel').removeClass('show');
                    $(el).addClass('show');                    
                  }

                }
              }); 
      },
      toPay(){
        this.showPanel('cart');
        sessionStorage.setItem("selectList", JSON.stringify(selectList));
        $('#topay-bt').addClass('show');
        // 跳转到下单页面
        this.$router.push({
          name: '支付页'
        })
      },
      gotoRouter(name) {
        if(!name){
          return;
        }
        this.$router.push({
          name: name
        })
      },
      footer(num){
        // 页脚图标状态
        $($('footer .footer_nav')[parseInt(num)-1]).addClass('active');
      },
      // 回到顶部
      goTop(){
        var sc = $(window).scrollTop();
        $('body,html').animate({
          scrollTop: 0
        }, 300);
      }
    },
    data() {
      return {
        selected: ''
      }
    },
    mounted() {
      let Rname = this.$route.name;
      switch (Rname) {
        case '首页':
          this.selected = '首页';
          break;
        case '分类页':
          this.selected = '分类页';
          break;
      }

      this.footer(this.num);

      // 解决屏幕改变大小，头尾部异位
       $(window).on("resize scroll",function(){
          $('.ivu-affix').css({
            left: 'auto',
            width: '100%'
          });
          $('footer .demo-affix').css({
            bottom:'-1px'
          });
       });
    }


  }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
    footer {
    font-family: @font-family-text-s;
    background-color: #fff;
    font-size: 0;
    position: fixed;
    bottom: 0;
    font-size: 0;
    overflow: hidden;
    width: 7.5rem;
    .bt(@color-assist3);
    z-index: 15;
    ul{
      height: .98rem;
      margin: 0 auto;
      display: inline-block;
      vertical-align: top;
      font-size: 0;
      &:first-child{
        width:2.7rem;
        padding: 0 .12rem 0 .21rem;
      }
      &:last-child{
        width:4.8rem;
        background-color: @color-main1;
        line-height: .98rem;
        li{
          display: inline-block;
          height: 100%;
          padding: 0;
          vertical-align: top;
          span{
            margin: auto;
          }
          &:first-child{
            p{
              background-color: @color-assist;
            }
          }
        }
      }
      li{
        padding:.08rem 0 .12rem 0;
        display: inline-block;
        text-align: center;
        width: 50%;
        font-size: 0;
       &.is-selected{
        background-color: #fff;
       }
       .footer_label{
        font-size: @font-size-small;
        color: @color-main2;  
        .no-wrap(1);      
       }
        .footer_nav{
            margin: 0 auto;
            background-size: cover;
            display: block;
            width: .48rem;
            height: .48rem;
            .extend-click();   
          }
        &:first-child .footer_nav{
          .bg-image('/icon/icon-gotop');
        } 
        &:first-child:active  .footer_nav{
            .bg-image('/icon/icon-gotop-active');
            // transform: scale(1.3);
        }
        &:nth-of-type(2) .footer_nav{
          .bg-image('/images/icon-shopcart'); 
        }     
      }

    }
   
  }

</style>

