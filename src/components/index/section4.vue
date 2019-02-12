<template lang="html">
  <section class="list"  v-if="datas">
    <div class="item">
      <p  class="imgbox" v-for="item in datas.banner">
        <img v-lazy="item.imgPath">
      </p>
      <div class="listproduct">
        <ul>
        <li  v-for="item in datas.list">
          <div class="img">
            <img v-lazy="item.imgPath">
          </div>
          <p class="title">
            {{item.name}}
          </p>
          <p class="price">
            ￥{{item.price}}
          </p>
        </li>
      </ul>
      </div>
    </div>
  </section>
</template>

<script>

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
    padding-top:.2rem;
    .item{
      background-color: #fff;
      .imgbox{
          height: 3.8rem;
          width: 100%;
          overflow: hidden;
          img{
            width: 100%;
          }       
      }
      .listproduct{
        ul{
          padding: .2rem .19rem;
          overflow: scroll;
          white-space:nowrap;
          li{
            white-space: normal;
            padding: 0 .05rem;
            display: inline-block;
            width: 2.05rem;
            .img{
              width: 2rem;
              height: 2rem;
              overflow: hidden;
              img{
                width: 100%;
              }
            }
            .title{
              margin-top: .2rem;
              color: @color-text1;
              font-size: @font-size-small;
              font-family: @font-family-text-s;
              line-height: .3rem;
              height: .6rem;
              .no-wrap(2);

            }
          }
        }        
      }

    }

  }
</style>
