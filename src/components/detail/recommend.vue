<template lang="html" v-if="datas">
       <div class="tabs recommend">
        <Tabs value="name1">
            <TabPane label="为您推荐" name="name1">
                <div class="product">
                    <div class="item" v-for="(item, index) in datas.recommend">
                        <router-link :to="{name:'详情页'}">
                            <div class="imgBox">
                                <img v-lazy=item.imgSrc alt="">
                            </div>
                            <div class="info">
                                <h5>{{item.title}}</h5>
                                <p class="price"><span>￥</span>{{item.price}}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </TabPane>
            <TabPane label="热销排行榜" name="name2">
                 <div class="product">
                    <div class="item" v-for="(item, index) in datas.hot">
                        <router-link :to="{name:'详情页'}">
                            <div class="imgBox">
                                <img v-lazy=item.imgSrc alt="">
                            </div>
                            <div class="info">
                                <h5>{{item.title}}</h5>
                                <p class="price"><span>￥</span>{{item.price}}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </TabPane>
        </Tabs>
      </div>
</template>
<script>
    export default {
        data () {
            return {
                datas:''
            }
        },
      computed:{

      },
    mounted() {
      let _this=this;
      this.$http.get('/recommend', {}, function(data){
        _this.datas=data;
      }, function(obj){
          console.info('ERROR');
          console.info(obj);
      }, this.$http.withCredentials());
    }
    }
</script>

<style lang="less">
@import '../../assets/fz.less';
        .tabs.recommend{
          margin-top: .2rem;
            background-color: #fff;
            &:first-child{
              margin-top:0;
            }
            .ivu-tabs-nav .ivu-tabs-tab:hover{
                color: @color-main1;
            }
            .ivu-tabs-tabpane{
              background-color: #fff !important;
            }
            .product{
                padding: 0 .12rem .3rem .12rem;
                overflow: hidden;
                margin-top: -.28rem;
                font-size: 0;
                .item{
                    width: 2.38rem;
                    min-width: 75px;
                    display: inline-block;
                    font-size: @font-size-small;
                    font-family: @font-family-text;
                    color: @color-text1; 
                    padding: .48rem  .14rem 0 .14rem;
                    .imgBox{
                        img{
                           width:100%;                            
                        }
 
                    }
                    .info h5{
                        .no-wrap(2);
                        margin: .2rem 0;
                        color: @color-text1;
                    }
                    .price{
                        color: @color-main1;
                        margin-top: .1rem;
                    } 
                }
            }
           .ivu-tabs-ink-bar{
            background-color: transparent;
            height: 0;
           }
           .ivu-tabs-bar{
            margin-bottom: 0;
           }
           .ivu-tabs-nav {
            font-size: @font-size-medium-x;
            font-family: @font-family-text;
            color: @color-text1; 
            float: none;
            text-align: center;    
           }
           .ivu-tabs-tab-active{
            font-size: @font-size-medium-x;
            font-family: @font-family-text;
            color: @color-main1;
            position: relative;
            &:after{
                content: '';
                position: absolute;
                left: 0;
                bottom: .02rem;
                width: 100%;
                height: .04rem;
                background: #ee3f43;
            }
           }
           .ivu-tabs-tab{
            height: .92rem;
            padding: 0;
            line-height: .92rem;
            &:first-child{
                    margin-right:1.28rem;
                }
                &:last-child{
                    margin-left:1.28rem;
                }
           }
        }

</style>
