<template lang="html">
  <div class="login">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>登录页</i>
      </span>
    </v-header>
    <section class="wapper">
     <Form ref="formInline" :model="formInline"   :rules="ruleInline" inline style="text-align: center;">
        <FormItem prop="user" label="手机号">
            <Input type="text" v-model="formInline.user" placeholder="请输入注册的手机号"></Input>
        </FormItem><br>
        <FormItem prop="password" label="密码" style="margin-bottom:.6rem;">
            <Input type="password" v-model="formInline.password" placeholder="请输入登陆密码"></Input>
        </FormItem><br>
        <FormItem  style="width:80%;">
            <v-bt1 @click.native="login()"><span slot="title" >立即登录</span></v-bt1>
        </FormItem>
<!--          <FormItem  style="width:80%;">
            <v-bt1 @click.native="$router.push({name:'找回密码页'})" class="theme2"><span slot="title">忘记密码</span></v-bt1>
        </FormItem> -->
         <FormItem  style="width:80%;">
            <v-bt1 @click.native="$router.push({name:'注册页'})"  class="theme2"><span slot="title">没有账号？马上注册</span></v-bt1>
        </FormItem>
    </Form>
    </section>


  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import Bt1 from '@/common/base/buttton/bt1.vue';
import  { api } from '@/global/siteConfiguration';
import detail from '@/http/mock.js'
 export default {
          components:{
          'v-bt1':Bt1,
          'v-header':Header
        },
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            login(name) {
              let this_=this;
                      if(this.formInline.user!=="" && this.formInline.password!=="") {
                        this.$http.post(api.user_login, {phone_num:this.formInline.user,password:this.formInline.password}, function(data){
                            if(data.code===200){
                              this_.$Message.success('登录成功');
                              this_.toggle = false;
                              this_.$store.commit('CHANGE_TOKEN',1);
                              if(data.data.userid){
                                this_.$store.commit('USER_ID',data.data.userid);
                                sessionStorage.setItem("qtt_user_uname",data.data.uname);
                                sessionStorage.setItem("qtt_user_phone_num",data.data.phone_num);
                                sessionStorage.setItem("qtt_user_address",data.data.address);
                                setTimeout(()=>{
                                  if(this_.$route.query.redirect){
                                     this_.$router.push({
                                      path: this_.$route.query.redirect
                                    });                                   
                                   }else{
                                    this_.$router.push({
                                      name: '分类页'
                                    });                                    
                                   }
                                },1000); 
                              }

                            }else{
                            this_.$Message.error(data.msg);
                          }
                        }, function(obj){
                            console.info('ERROR');
                            console.info(obj);
                        }, this.$http.withCredentials());

                      }else {
                        this.$Message.error('账号密码不能为空');
                      }
  
            }
        },
      mounted(){
      }
    }


</script>

<style lang="less">
@import '../assets/fz.less';
.login {
  .ivu-form-inline .ivu-form-item{
    width: 80%;
  }
  .ivu-form{
    padding-top: .3rem;
    .ivu-form-item{
      margin:.24rem 0;
    }
      .ivu-form-item-label,.ivu-input{
        font-size:@font-size-medium;
        font-family:  @font-family-text;

        height: auto;
      }
      .button{
        padding: .07rem 0;
        border-radius: .02rem;
        font-size:@font-size-medium;
        &.theme2{
          background-color: @color-assist4;
          color: @color-text1;
        }
      }
    } 
}
</style>
