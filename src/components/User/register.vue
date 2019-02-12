<template lang="html">
  <div class="login findpswd register">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>注册</i>
      </span>
    </v-header>
    <section class="wapper">
     <Form ref="formInline" :model="formInline" :rules="ruleInline"  inline style="text-align: center;">
        <FormItem prop="user" label="用户名">
            <Input type="text" v-model="formInline.user" placeholder="请输入用户名"></Input>
        </FormItem><br>
        <FormItem prop="phone_num" label="手机号">
            <Input type="text" v-model="formInline.phone_num" placeholder="请输入手机号"></Input>
        </FormItem><br>
        <FormItem prop="password" label="密码">
            <Input type="password" v-model="formInline.password" placeholder="请输入密码"></Input>
        </FormItem><br>
        <FormItem prop="password_" label="确认密码">
            <Input type="password" v-model="formInline.password_" placeholder="请再次输入密码"></Input>
        </FormItem><br>
<!--         <FormItem prop="code" label="邀请码">
            <Input type="text" v-model="formInline.code" placeholder="请输入邀请码"></Input>
        </FormItem> -->
        <FormItem  style="width:80%;">
            <v-bt1 @click.native="handleSubmit('formInline')"><span slot="title">立即注册</span></v-bt1>
        </FormItem>
         <FormItem  style="width:80%;">
            <v-bt1 @click.native="$router.push({name:'登录页'})"  class="theme2"><span slot="title">已有账号？去登录</span></v-bt1>
        </FormItem>
    </Form>
    </section>


  </div>
</template>

<script>
import Header from '@/common/_header.vue';
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
                    password: '',
                    password_:'',
                    phone_num:''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '至少2个字符', trigger: 'blur' ,min: 2,}
                    ],
                    phone_num: [
                        { required: true, message: '请输入手机号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码.', trigger: 'blur' },
                        { type: 'string', min: 6, message: '至少6个字符', trigger: 'blur' }
                    ],
                    password_:[
                      { required: true, message: '请再次确认密码', trigger: 'blur' }
                    ],
                    //  code:[
                    //   { required: true, message: '请输入邀请码', trigger: 'blur' }
                    // ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
                        if (!myreg.test(this.formInline.phone_num)) {  
                          this.$Message.error('手机号格式不正确!');
                          return;  
                        }
                        if(this.formInline.password!=this.formInline.password_){
                          this.$Message.error('两次密码输入不一致');
                          return;
                        } 
                        let this_=this;
                        this.$http.post(api.user_reg, {phone_num:this.formInline.phone_num,uname:this.formInline.user,password:this.formInline.password}, function(data){
                          if(data.code==200){
                            this_.$Message.success('注册成功!请登录');
                            this_.$router.push({name:'登录页'})
                          }else{
                            this_.$Message.error(data.msg);
                          }
                        }, function(obj){
                            // console.info('ERROR');
                            // console.info(obj);
                        }, this.$http.withCredentials());

                    } else {
                        this.$Message.error('输入内容格式有误!');
                    }
                })
            }
        }
 }


</script>

<style lang="less">
@import '../../assets/fz.less';
.login.findpswd.findpswd{
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
