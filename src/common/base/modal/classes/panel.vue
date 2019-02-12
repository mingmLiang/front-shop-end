<!-- 所有分类面板 -->
<template>
    <div class="panel" data-name="classes">
        <div class="box">
           <h5>所有分类</h5> 
           <v-closePanelBt></v-closePanelBt>
           <div class="tagsBox">
                <v-tags3  v-for="(item,index) in datas.data" :value="item.sor_id" :key="item.sor_id"><span slot="title" @click="getProduct(item.sor_id,index)">{{item.sor_name}}</span></v-tags3>
           </div>
        </div>
    </div>
</template>
<script>
import Tags3 from '../../tags/tags3.vue';
import ClosePanelBt from '../../modal/closePanelBt.vue';
import  { api } from '@/global/siteConfiguration';

    export default {
        props:['datas'],
        data () {
            return {
                
            }
        },
        components: {
            'v-tags3': Tags3,
            'v-closePanelBt':ClosePanelBt
        },
        methods: {
          getProduct(item,index){
            this.$store.commit('CHANGE_TABINDEX',index);
            let _this=this;
              this.$http.get(api.goodsList, {'sor_id':item}, function(data){
                // 将商品列表保存到vuex（全局变量）
                _this.$store.commit('PRODUCT_TLIST',data.data);
                $('#mask').trigger('click');
              }, function(obj){
                  console.info('ERROR');
                  console.info(obj);
              }, this.$http.withCredentials());   
          }
        }
    }
</script>
<style lang="less" scoped>
.panel{ 
    position: fixed;
    z-index: 12;
    background: #fff;
    width: 100%;
    max-width: 7.5rem;
    opacity: 0;
    top: -50rem;
    transition: all .2s;
    transition-delay:0;
    &.show{
    top: .88rem;
    transition-delay:.3s;
    opacity: 1;
    visibility: visible;
    }
    >.box{
        padding: .3rem .24rem;
        .tag{
            margin-top: .12rem;
        }
    }

}

</style>