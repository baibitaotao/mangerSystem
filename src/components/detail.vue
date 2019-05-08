<template>
    <div class="contain">
        <el-container>
          <el-aside>   
            <el-menu router default-active="1-4-1" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
                 <el-submenu index="1">
                     <template slot="title">
                     <i class="el-icon-location"></i>
                     <span slot="title">第一选项</span>
                     </template>
                     <el-menu-item index="1-1">选项1</el-menu-item>
                     <el-menu-item index="1-2">选项2</el-menu-item>
                 </el-submenu>
                 <el-submenu index="2">
                     <template slot="title">
                     <i class="el-icon-location"></i>
                     <span slot="title">第二选项</span>
                     </template>
                     <el-menu-item index="2-1">选项1</el-menu-item>
                     <el-menu-item index="2-2">选项2</el-menu-item>
                 </el-submenu>
                 <el-submenu index="3">
                     <template slot="title">
                     <i class="el-icon-location"></i>
                     <span slot="title">第三选项</span>
                     </template>
                     <el-menu-item index="/detail/abc">选项1</el-menu-item>
                     <el-menu-item index="3-2">选项2</el-menu-item>
                 </el-submenu>
            </el-menu>
          </el-aside>
             <el-container>
             <el-header style="background-color:'red'">
                <span class="icon-align-left my_icon" @click="isCollapse = !isCollapse"></span>
                <span class="my_title">电商后台管理系统</span>
                <div>
                    <span>你好！:{{$store.state.userName}}</span>
                    <el-button type="danger" size="mini" @click="loginOut">退出</el-button>
                </div>
             </el-header>
             <el-main>
                <router-view></router-view>
             </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import {getUserList} from '../api/index.js'
export default {
    mounted(){
        let gulp = {
            params:{
                pagenum:1,
                pagesize:10
            }
        }
        getUserList(gulp)
    },

    data () {
        return {
             isCollapse: false,
             userName:'test',
        }
    },
    methods: {
      handleOpen(){

      }, 
      handleClose(){

      },
      loginOut(){
          
      }  
    }
}
</script>


<style lang="less" scoped>
 
.my_icon{
    font-size: 25px;
}

 
 

</style>








