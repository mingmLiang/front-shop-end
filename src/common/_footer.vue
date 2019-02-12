<template lang="html">
  <Affix :offset-bottom="0">
     <footer class="demo-affix">
          <ul v-model="selected">
            <li v-for="(value, key) in navItem"  @click.stop='gotoRouter(value[1])'>
              <span class='footer_nav' v-icon></span>
              <span v-if="value[0]==='购物车'&&count" class="icon">{{count}}</span>
              <span class="footer_label">{{value[0]}}</span>
            </li>
          </ul>
        </footer>
  </Affix>
</template>

<script>
  export default {
    props:['num','count'],
    methods: {
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
        $($('footer .footer_label')[parseInt(num)-1]).addClass('active');
      }
    },
    data() {
      return {
        navItem:[['首页','首页'],['分类','分类页'],['购物车','购物车页'],['个人中心','用户页']],
        selected: ''
      }
    },
    mounted() {
      //获取当前路由名称，根据该名称给当前footer添加is-selected
      let Rname = this.$route.name;
      switch (Rname) {
        case '首页':
          this.selected = '首页';
          break;
        case '分类页':
          this.selected = '分类页';

          break;
        case '购物车页':
          this.selected = '购物车页';

          break;
        case '用户页':
          this.selected = '用户页';
          break;
      }

      this.footer(this.num);

      // 解决屏幕改变大小，头尾部异位
       $(window).on("resize",function(){
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
  @import '../assets/fz.less';
  .icon{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: #ee3f43;
    color: #fff;
    position: absolute;
    line-height: 18px;
    font-size: 12px;
    border-radius: 50%;
    top: 0;
  }
    footer {
    font-family: @font-family-text-s;
    background-color: #fff;
    font-size: 0;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    .bt(@color-assist3);
    z-index: 16;
    ul{
      height: .98rem;
      margin: 0 auto;
      width: 7.5rem;
      li{
        padding:.08rem 0 .12rem 0;
        display: inline-block;
        text-align: center;
        width: 25%;
        font-size: 0;
        vertical-align: top;

       &.is-selected{
        background-color: #fff;
       }
       .footer_label{
        font-size: @font-size-small;
        color: @color-main2; 
        &when (@siteConfiguration = 'hisant'){
          color: @color-assist2;
        }
        .no-wrap(1);  
        &.active{
          &when (@siteConfiguration = 'hisant'){
            color: @color-main1;
          }
        }     
       }

        .footer_nav{
            margin: 0 auto;
            background-size: cover;
            display: block;
            width: .48rem;
            height: .48rem;
            /* margin-bottom: .1rem; */
            .extend-click();   
            overflow: hidden;
          }
        &:first-child .footer_nav{
          .bg-image('/images/icon-home');
          &.active{
            .bg-image('/images/icon-home-active');
          }
        }    
        &:nth-of-type(2) .footer_nav{
          .bg-image('/images/icon-catergry'); 
           &.active{
            .bg-image('/images/icon-catergry-active');
          }
        }  
        &:nth-of-type(3) .footer_nav{
          .bg-image('/images/icon-shopcart'); 
           &.active{
            .bg-image('/images/icon-shopcart-active');
          }
        }  
        &:nth-of-type(4) .footer_nav{
          .bg-image('/images/icon-me'); 
           &.active{
            .bg-image('/images/icon-me-active');
          }
        }     
      }

    }
   
  }

</style>
