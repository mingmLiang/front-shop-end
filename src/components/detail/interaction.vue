<template lang="html">
    <div class="tabs interaction"  id="js-detail" v-if="detailProdect.image">
        <Tabs value="name1">
            <TabPane label="图文详情" name="name1">
                <div class="detailsImg">
                    <img v-lazy="item"alt="" v-for="(item,i) in detailProdect.image.split(';')" v-if="i>4">
                </div>
            </TabPane>
        </Tabs>
      </div>
</template>
<script>
import Icon1 from '@/common/base/icon/icon1.vue';
import Icon2 from '@/common/base/icon/icon2.vue';

export default {
    props: ["detailProdect"],
    data () {
            return {
                value2: '1'
            }
        },
components: {
        'v-icon1': Icon1,
        'v-icon2': Icon2,
    },
  methods: {

  }
}
</script>

<style lang="less">
@import '../../assets/fz.less';
        .tabs.interaction{
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
            .ivu-collapse{
                border:none;
                background-color: #fff;
            }
            .interactive{
                padding: 0 .3rem 0 .24rem;
                .ivu-collapse-content{
                    padding: 0;
                    position: relative;
                    padding-left: .56rem;
                    .icon{
                        position: absolute;
                        left: 0;
                    }
                }
                .ivu-collapse-header{
                    position: relative;
                    padding: 0;
                     .ivu-icon-arrow-right-b{
                        position: absolute;
                        right: .24rem;
                        top: 50%;
                        margin-top: -.13rem;
                    }
                    .icon{
                        margin-right: .24rem;
                    }
                }
            }
            .detailsImg{
                max-width: 750px;
                width: 100%;
                padding: .12rem .24rem;
                img{
                    width: 100%;
                }
            }
            .product{
                padding: .2rem .12rem .3rem .12rem;
                overflow: hidden;
                font-size: 0;
                .item{
                    width: 2.38rem;
                    min-width: 75px;

                    display: inline-block;
                    font-size: @font-size-small;
                    font-family: @font-family-text;
                    color: @color-text1; 
                    padding: 0 .14rem;
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
                    // margin-left:1.28rem;
                }
           }
        }

</style>
