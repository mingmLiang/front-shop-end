<template lang="html">
  <div>
		<header  class="demo-affix">
      <!-- <router-link  class="icon-back":to="{ name: '首页'}"v-if="$route.matched[0].path=='/category'"></router-link> -->
      <span class="icon-back"  @click="$router.go(-1)"></span>
        <span class="inputBox">
          <i class="icon icon-shearch01"></i>
          <input type="text" placeholder="美赞臣" v-model="searchInfo">
          <i class="icon01 icon-clear" @click="searchInfo=''"></i>
        </span>
        <span class="searchBt" @click="$router.push({ name: '分类页', params: { 'info': '妈妈奶粉' }})">搜索</span>
    </header>
		<div class="wapper">
			<div>
        <ul class="section1" v-if="searchInfo">
          <li  v-for="item in info" :key="item"  @click.native="$router.push({ name: '分类页', params: { 'info': item }})">
            <span class="text">{{item}}</span>
            <span class="icon-arrows icon"></span>
          </li>
        </ul>
        <div class="section2" v-if="!searchInfo">
          <div class="item">
            <h3 class="title">热搜</h3>
            <div class="tagsBox">
              <v-tags1  v-for="item in hot" :key="item" @click.native="$router.push({ name: '分类页', params: { 'info': item }})"><span slot="title" >{{item}}</span></v-tags1>
            </div>
          </div>
          <div class="item" style="margin-top:.28rem;">
            <h3 class="title">历史搜索</h3>
            <div class="tagsBox">
              <v-tags1  v-for="item in history" :key="item" @click.native="$router.push({ name: '分类页', params: { 'info': item }})"><span slot="title" >{{item}}</span></v-tags1>
            </div>
          </div>
        </div>  
      </div>
		</div>
  </div>
</template>

<script>
import Tags1 from '@/common/base/tags/tags1.vue';
export default {
  components: {
    'v-tags1': Tags1
  },
  data(){
    return {
      hot:['美赞臣','婴儿奶粉','美赞臣'],
      history:['美赞臣','婴儿奶粉','妈妈奶粉'],
      info:['美赞臣','婴儿奶粉','妈妈奶粉'],
      searchInfo:''
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/fz.less';
header {
  height: .88rem;
  line-height: .88rem;
  max-width: 7.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 .24rem 0 .86rem;
  background-color: #fff;
  position: fixed;
  z-index: 9999;
  .bd(@color-assist3);
.icon-back{
  position: absolute;
  left: .24rem;
  top: .24rem;
}
.inputBox{
  display: inline-block;
  height: .6rem;
  line-height: .6rem;
  background: @color-assist4;
  width: 5.6rem;
  border-radius: .3rem;
  overflow: hidden;
  position: relative;
  padding: 0 .24rem;
  margin-top: .14rem;
  background-repeat: no-repeat;
  input{
    background: @color-assist4;
    height: 100%;
    font-size: @font-size-medium;
    font-family: @font-family-text;
    color: @color-text1;
    width: 4.2rem;
  }
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: @color-text2;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: @color-text2;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: @color-text2;
  }
  input::-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: @color-text2;
  }
}
.icon{
  vertical-align: middle;
  margin-right: .24rem;
}
.searchBt{
  .extend-click();
  color: @color-main2;
  position: absolute;
  right: .24rem;
  font-size: @font-size-medium-x;
  font-family: @font-family-text;
}
.icon01{
  position: absolute;
  right: .24rem;
  top: 50%;
  margin-top: -.14rem;
}

}

ul.section1{
  li{
    height: .88rem;
    line-height: .88rem;
    padding: 0 .24rem;
    position: relative;
    .bd(@color-assist3);
    .text{
        font-size: @font-size-medium;
        font-family: @font-family-text;
        color: @color-text1;
    }
    .icon{
      position: absolute;
      right: .24rem;
      top: 50%;
      margin-top: -.12rem;
    }
  }
}
.section2{
  padding: .1rem .24rem;
  .item{
    font-family: @font-family-text;
    color: @color-text1;
    .title{
    font-size: @font-size-medium-x;
    height: .7rem;
    line-height: .7rem;
    }
    .tagsBox{
      .tag{
        border-radius: .09rem;
        height: .48rem;
        line-height: .48rem;
        font-family: @font-family-text; 
        padding: 0 .2rem;
        font-size: @font-size-medium;
        color: @color-text1;
        margin-right: .2rem;
      }
    }
  }
}
</style>
