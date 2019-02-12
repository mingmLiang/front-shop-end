<template lang="html">
  <div class="login findpswd">
    <v-header class="header" :share=false :iconTheme=false>
      <span slot="title">
       <i>找回密码</i>
      </span>
    </v-header>
    <section class="wapper">
     <Form ref="formInline" :model="formInline" :rules="ruleInline"  inline style="text-align: center;">
        <FormItem prop="user"  label="用户名">
            <Input type="text" v-model="formInline.user" placeholder="请输入手机号"></Input>
        </FormItem><br>
         <FormItem prop="code">
          <Row>
              <Col span="14">
                <Input type="text" v-model="formInline.code" placeholder="请输入手机验证码">
              </Input>
              </Col>
              <Col span="10" style="padding:0 0 0 .3rem;">
                <v-bt1 @click.native="" class="theme3"><span slot="title" >获取验证码</span></v-bt1>
              </Col>
          </Row>
        </FormItem><br>
        <FormItem prop="password"  label="密码">
            <Input type="password" v-model="formInline.password" placeholder="请输入密码"></Input>
        </FormItem><br>
        <FormItem prop="password_"  label="确认密码">
            <Input type="password" v-model="formInline.password_" placeholder="请再次输入密码"></Input>
        </FormItem><br>
        <FormItem  style="width:80%;">
            <v-bt1 @click.native="handleSubmit('formInline')"><span slot="title">找回密码</span></v-bt1>
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
                    code:''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入手机号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码.', trigger: 'blur' },
                        { type: 'string', min: 6, message: '至少6个字符', trigger: 'blur' }
                    ],
                     code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                    password_:[
                      { required: true, message: '请再次确认密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
 }


</script>

<style lang="less">
@import '../../assets/fz.less';
.login.findpswd{
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
        &.theme3{
          background-color:@color-main2;
        }
      }
    } 
}
</style>
