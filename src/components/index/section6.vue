<template lang="html">
  <section class="list"  v-if="datas">
    <div class="box">
      <v-title1>
        <div slot="title" class="top_title">{{datas.title}}
          <p class="countdown">
            <span class="tips">距离结束</span>
            <span class="box">
              <i class="num">21</i><i>:</i><i class="num">10</i><i>:</i><i class="num">20</i>
            </span>
          </p>  
        </div>
      </v-title1>
      <div class="content">
          <div class="item" v-for="item in datas.list">
            <div>
              <div class="imgbox">
                <img v-lazy="item.imgPath">
              </div>
            </div>
            <div>
              <div class="info">
                <h3 class="title">
                  {{item.name}}
                </h3>
                <div class="tagsBox">
                  <v-tags1  v-for="val in item.tags" :key="val"><span slot="title" >{{val}}</span></v-tags1>
                </div>
                <div class="bottomBox clearfix">
                  <div class="fl">
                    <span class="price"><i>￥</i>{{item.price}}</span>
                    <span class="price_">￥{{item.price2}}</span>
                  </div>
                  <div class="fr">
                    <button>立即秒杀</button>
                  </div>
                </div>
              </div>
            </div>
          </div> 
      </div>
    </div>
  </section>
</template>

<script>
import Advertising from '@/components/index/advertising.vue'
import Title1 from '@/common/base/floor-title/title1.vue';
import Tags1 from '@/common/base/tags/tags1.vue';
import detail from '@/http/mock.js' //模拟数据
  export default {
    props: {
     api: {
       type: String
     }
    },
    data() {
      return {
       datas:''
      }
    },
    components: {
      'v-advertising': Advertising,
      'v-title1': Title1,
       'v-tags1': Tags1
    },
    mounted() {
      let _this=this;
      this.$http.get(_this.api, {}, function(data){
        _this.datas=data.data;
      }, function(obj){
          console.info('ERROR');
          console.info(obj);
      }, this.$http.withCredentials());
    }
  }

</script>
<style lang="less" scoped>
  @import '../../assets/fz.less';
  .list {
    background-color: @color-assist4;
    font-size: 0;
    padding-top: .2rem;
    .box{
      background: #fff;
      padding: .2rem 0;
      overflow: hidden;
      .top_title{
        display: block;
        .countdown{
          position: absolute;
          right: .24rem;
          display: inline-block;
          font-size: @font-size-small;
          color: @color-assist2;
          .tips{
            margin-right: .1rem;
          }
          .box{
            i{
              font-family: @font-family-num;
              color: @color-assist2;
              &.num{
                display: inline-block;
                color:@color-text3;
                background-color: @color-assist2;
                border-radius: .06rem;
                height: .36rem;
                line-height: .36rem;
                width: .36rem;
                text-align: center;

              }
            } 
                       
          }

        }
      }
      h1{
        padding-left: .4rem;
        .bd(@color-assist3);
      }
      .floor-title:before{
        left: .24rem;
      }
      .content{
        padding: .20rem 0 0 0;
        .item{
          margin-bottom: .24rem;
          display: flex;
          flex:1;
          &:last-child{
            margin-bottom: 0;
          }
          .imgbox{
            width: 2.24rem;
            height: 2.24rem;
            overflow: hidden;
            flex: 0 0 2.24rem;
            margin-right:.25rem;
            img{
              width: 100%;
            }
          }
          &:last-child{
            .info{
              border:none;              
            }
          }
          .info{
            position: relative;
            text-align: center;
            width: 5.02rem;
            height: 2.3rem;
            .bd(@color-assist3);
            .title{
              line-height: .36rem;
              font-size: @font-size-medium-x;
              color: @color-text1;
              font-family: @font-family-text-s;
              .no-wrap(2);
              text-align: left;
              height: .72rem;
            }
            .tagsBox{
              margin-top: .12rem;
              text-align: left;
            }
            .bottomBox{
              height: .68rem;
              line-height: .68rem;
              position: absolute;
              bottom: .24rem;
              text-align: left;
              width:4.78rem;
              .price{
                font-family: "sf pro text light";
                font-size: @font-size-medium-x;
                color: @color-main1;
                margin-right: .1rem;
                text-align: left;
                i{
                  font-size: @font-size-small-s;
                }
              }
              .price_{
                font-family: "sf pro text light";
                font-size: @font-size-small-s;
                color: @color-assist1;
              }
              button{
                height: .68rem;
                line-height: .68rem;
                color: #fff;
                background-color: @color-main1;
                font-size: @font-size-medium;
                font-family: @font-family-text-s;
                width: 1.76rem;
                text-align: center;
                border-radius: .06rem;
              }
            }
          }
        }
      }      
    }

  }
</style>
