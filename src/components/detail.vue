<template>
    <div>
        详情页
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
            
        }
    }
}
</script>


<style lang="less">



</style>








