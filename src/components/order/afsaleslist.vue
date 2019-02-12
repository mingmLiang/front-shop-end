<!-- 售后订单列表 -->
<template lang="html">
  <div class="Coupons">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>售后订单列表</i>
      </span>
    </v-header>
    <section class="wapper grey">
     <div class="item">
     	<p class="num">订单号：TYNH6564563255645645</p>
     	<p class="num">售后单号：TYUNH5658954645645</p>
     	<div class="product">
     		<div class="imgbox">
     			<img v-lazy="'http://hbimg.b0.upaiyun.com/533ed62c188ad511684da6d25852dc46d355e38825748-5eSnSO_fw658'" alt="">
     		</div>
     		<div class="info">
     			<h3 class="title">指办门素完还公改八例起及从资快日华给影米现展导严本论成候油确何准派收土</h3>
     			<p class="productNum">数量：1灌装x1</p>
     		</div>
     	</div>
     	<div class="progress">
     		<p class="text">处理情况：</p>
     		<p class="text">您的售后申请，需要您确认后再做下一步处理。请点击查看详情按钮，查看并确认，感谢您的合作！</p>
     		<p class="bt"><v-tags5 @click.native="$router.push({ name: '售后详情', params: { 'userid': 123 }})"><span slot="title" >查看详情</span></v-tags5></p>
     	</div>
     </div>
     <div class="item">
     	<p class="num">订单号：TYNH6564563255645645</p>
     	<p class="num">售后单号：TYUNH5658954645645</p>
     	<div class="product">
     		<div class="imgbox">
     			<img v-lazy="'http://hbimg.b0.upaiyun.com/533ed62c188ad511684da6d25852dc46d355e38825748-5eSnSO_fw658'" alt="">
     		</div>
     		<div class="info">
     			<h3 class="title">指办门素完还公改八例起及从资快日华给影米现展导严本论成候油确何准派收土</h3>
     			<p class="productNum">数量：1灌装x1</p>
     		</div>
     	</div>
     	<div class="progress">
     		<p class="text">处理情况：</p>
     		<p class="text">您的售后申请，需要您确认后再做下一步处理。请点击查看详情按钮，查看并确认，感谢您的合作！</p>
     		<p class="bt"><v-tags5  @click.native="$router.push({ name: '售后详情', params: { 'userid': 123 }})"><span slot="title" >查看详情</span></v-tags5></p>
     	</div>
     </div>
    </section>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Tags5 from '@/common/base/tags/tags5.vue';
 export default {
          components:{
          'v-header':Header,
          'v-tags5': Tags5
        },
        data () {
            return {
              datas:''
            }
        },
        methods: {

        },
      mounted(){
      }
    }


</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.wapper{
	padding-bottom: .24rem;
	.item{
		background-color: #fff;
		margin-top: .2rem;
		.num{
			height: .6rem;
			line-height: .6rem;
			padding-left: .24rem;
			color: @color-text2;
			.bd(@color-assist3);
			font-size: @font-size-small;
			font-family: @font-family-num;

		}
		.product{
			padding: .2rem .24rem;
			display: flex;
			.bd(@color-assist3);
			.imgbox{
				width: 1.6rem;
				height: 1.6rem;
				overflow: hidden;
				display: inline-block;
				vertical-align: top;
				.ba(@color-assist3,0);
				img{
					width: 100%;
				}
			}
			.info{
				width: 5.02rem;
				display: inline-block;
				vertical-align: top;
				padding-left: .24rem;
				position: relative;
				.productNum{
					position: absolute;
					bottom: 0;
					font-size: @font-size-medium;
					font-family: @font-family-text;
					color: @color-text2;
				}
				.title{
					font-size: @font-size-medium;
					font-family: @font-family-text;
					color: @color-text1;
					.no-wrap(2);
				}

			}

		}
		.progress{
			padding: .1rem .24rem .2rem .24rem;
			font-size: @font-size-medium;
			font-family: @font-family-text;
			color: @color-text1;
			.text{
				line-height: .36rem;
			}
			.bt{
				margin-top: .34rem;
				text-align: right;
				.tag{
					font-size: @font-size-medium;
					font-family: @font-family-text;
					width: 1.58rem;
					height: .48rem;
					line-height: .48rem;
					padding: 0;
					text-align: center;
				}
			}
		}
	}
}
</style>
