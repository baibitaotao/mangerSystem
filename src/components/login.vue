<template>
    <div class="login_bg">
         <div class="login_fram">
            <div class="log_img"></div>
            <div class="log_content">
                  <el-form :model="ruleForm" :rules="rules" class="demo-ruleForm" ref="ruleForm">
                     <el-form-item  prop="account">
                         <el-input v-model="ruleForm.account" placeholder="账号" prefix-icon = 'el-icon-user-solid'></el-input>
                     </el-form-item>
                     <el-form-item  prop="password">
                         <el-input type="password" v-model="ruleForm.password" placeholder='密码' prefix-icon = 'el-icon-edit'></el-input>
                     </el-form-item>
                      <el-form-item>
                       <el-button type="primary" @click="submitForm('ruleForm')"  v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
                     </el-form-item>
                    </el-form>
            </div>   
          </div>   
    </div>
</template>


<script>

import {checkUser} from '../api/index.js'

export default {
    data () {
        return {
          fullscreenLoading:false,
          ruleForm: {
             account: '',
             password:''
           },
          rules: {
             account: [
               { required: true, message: '请输入用户名', trigger: 'blur' },
               { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
             ],
             password:[
               { required: true, message: '请输入密码', trigger: 'blur' },
               { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
             ]

          }
        }
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
              if (valid) {
                  const loading = this.$loading({
                    lock: true,
                    text: '正在登录',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                  });   
                  let loginParams = {
                      username:this.ruleForm.account,
                      password:this.ruleForm.password
                  }
                   checkUser(loginParams).then(res => {
                       loading.close();
                       this.$router.push({name:'detail'})
                       this.ruleForm.account = null
                       this.ruleForm.password = null   
                   }).catch(err => {
                       alert(err)
                   })  
              } else {
                console.log('error submit!!');
                return false;
              }
            });
        }
    }
}

</script>


<style lang="less" scoped>

.login_bg{
    width:100%;
    height: 100%;
    background-color:#409EFF;
    display: flex;
    align-items: center;
    justify-content: center;
    .login_fram{
        width:500px;
        height:300px;
        background-color: #fff;
        position: relative;
        .log_img{
            width: 100px;
            height:100px;
            background: url('../assets/wo.jpg') no-repeat center center;
            background-size: contain;
            border-radius: 50%;
            border: 5px solid #fff;
            position: absolute;
            left:50%;
            transform: translate(-50%,-50%);
        }
        .log_content{
            margin: 80px 40px 50px 40px;
        }
    }
}

</style>








