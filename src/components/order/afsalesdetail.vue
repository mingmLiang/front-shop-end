<!-- 售后详情 -->
<template lang="html">
  <div class="Coupons">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>售后详情</i>
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
     	<p class="floor"><span class="title">实收数量:</span>5灌</p>
     	<p class="floor"><span class="title">退货数量:</span>5灌</p>
     	<p class="floor"><span class="title">售后问题:</span>下单6灌，实际收到5灌，伽伽大法官孵化投顾撒谎告诉对方讽德诵功很反感第三方还是得改</p>
     </div>
     <div class="item">
     	<p class="floor"><span class="title">售后进度:</span>售后处理进行中</p>
     	<p class="floor">
     	<span style="top:-.66rem;" class="title">售后结果:</span>
     	<table border="0">
		  <tr>
		    <th>处理方式</th>
		    <th>数量</th>
		    <th>退款金额</th>
		  </tr>
		  <tr>
		    <td>退货</td>
		    <td>2</td>
		    <td>0.00</td>
		  </tr>
		   <tr>
		    <td>退款</td>
		    <td>1</td>
		    <td>200.00</td>
		  </tr>
		   <tr>
		    <td>补发</td>
		    <td>2</td>
		    <td>0.00</td>
		  </tr>
		</table>
     	</p>
     	<div class="floor buttonBox">
     		<i>请确认以上的售后内容</i>
			<v-tags2><span slot="title" >确认</span></v-tags2>
     	</div>
     </div>
     <div class="item">
     	<p class="floor"><span class="title">售后进度:</span>售后成功</p>
     	<p class="floor">
     	<span style="top:-.66rem;" class="title">售后结果:</span>
     	<table border="0">
		  <tr>
		    <th>处理方式</th>
		    <th>数量</th>
		    <th>退款金额</th>
		  </tr>
		  <tr>
		    <td>退货</td>
		    <td>2</td>
		    <td>0.00</td>
		  </tr>
		   <tr>
		    <td>退款</td>
		    <td>1</td>
		    <td>200.00</td>
		  </tr>
		   <tr>
		    <td>补发</td>
		    <td>2</td>
		    <td>0.00</td>
		  </tr>
		</table>
     	</p>
     </div>
     <div class="item">
     	<p class="floor"><span class="title">退款时间:</span>2017.11.02</p>
     	<p class="floor"><span class="title">交易单号:</span>548565598896545656</p>
     	<p class="floor"><span class="title">商户单号:</span>484954564566559995489</p>
     	<p class="floor"><span class="title">退款金额:</span>￥200<span class="unnotice" style="margin-left:.2rem;">(预计到款时间为1-5个工作日)</span></p>
     </div>
     <div class="item">
     	<p class="floor"><span class="title">售后进度:</span>售后成功</p>
     	<p class="floor">
     		<span class="title">售后结果:</span>
			您的售后请求已被驳回
     	</p>
     	<div class="floor">
     		<span class="title">驳回原因:</span>
			您的售后请求，不支持无理由退换
			<div class="imgBox_">
				<div class="imgbox">
					<img v-lazy="'http://hbimg.b0.upaiyun.com/e34d22f279005cb78e6da8f0fbc9c09dec9b652447b8-CYtBVT_fw658'" alt="">
				</div>
				<div class="imgbox">
					<img v-lazy="'http://hbimg.b0.upaiyun.com/e34d22f279005cb78e6da8f0fbc9c09dec9b652447b8-CYtBVT_fw658'" alt="">
				</div>
				<div class="imgbox">
					<img v-lazy="'http://hbimg.b0.upaiyun.com/e34d22f279005cb78e6da8f0fbc9c09dec9b652447b8-CYtBVT_fw658'" alt="">
				</div>
				<div class="imgbox">
					<img v-lazy="'http://hbimg.b0.upaiyun.com/e34d22f279005cb78e6da8f0fbc9c09dec9b652447b8-CYtBVT_fw658'" alt="">
				</div>
				<div class="imgbox">
					<img v-lazy="'http://hbimg.b0.upaiyun.com/e34d22f279005cb78e6da8f0fbc9c09dec9b652447b8-CYtBVT_fw658'" alt="">
				</div>
			</div>
     	</div>
     	<div class="floor buttonBox">
     		<v-tags5><span slot="title" style="position: absolute;right: .24rem;top: 50%;margin-top: -.22rem;">申请售后</span></v-tags5>
     	</div>
     </div>
    </section>
  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Tags5 from '@/common/base/tags/tags5.vue';
import Tags2 from '@/common/base/tags/tags2.vue';
 export default {
          components:{
          'v-header':Header,
          'v-tags5': Tags5,
          'v-tags2': Tags2
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
				.ba(@color-assist3,.06rem);
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
		.floor{
			padding: 0 .24rem;
			line-height: .66rem;
			position: relative;
			padding-left: 1.45rem;
			font-family: @font-family-text;
			font-size: @font-size-small;
			color: @color-text1;
			.bd(@color-assist3);
			.imgBox_{
				margin-top: .04rem;
				.imgbox{
					display: inline-block;
					width: 1.2rem;
					height: 1.2rem;
					overflow: hidden;
					border-radius: 2px;
					img{
						width: 100%;
					}
				}				
			}

			table{
				margin-top: .66rem;
				font-size: @font-size-small;
				font-family: @font-family-text;
				width: 5.04rem;
				th{
					font-weight: 400;
					color: @color-text2;
				}
				td{
					color: @color-text1;
					text-align: center;

				}
				tr{
					.bd(@color-assist3);
					&:last-child{
						border:none;
					}
				}
			}
			&:last-child{
				border:none;
			}
			span.title{
				line-height: .66rem;
				height: .66rem;
				position: absolute;
				left: .24rem;
				top: 0;
			}
			&.buttonBox{
				height: .88rem;
				line-height: .88rem;
				text-align: right;
				color: @color-text1;
				font-family: @font-family-text;
				font-size: 0;
				i{
					font-size: @font-size-small;
					margin-right: .2rem;
				}
				.tag{
					width: 1.58rem;
					text-align: center;
					height: .48rem;
					line-height: .48rem;
					padding: 0;
					font-size: @font-size-medium;
					margin: 0;
				}
			}
		}
	}
}
</style>
