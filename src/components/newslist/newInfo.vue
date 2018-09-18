<template>
<div class="new-info">
    <h3 class="new-title">{{newInfo.title}}</h3>
    <p class="new-time">
        <span>发表时间: {{newInfo.add_time | dataFormate}}</span>
        <span>点击{{newInfo.click}}次</span>
    </p>
    <hr>
    <div class="new-content" v-html="newInfo.content"></div>
    <comment></comment>
</div>
</template>
<script>
import comment from "../subcomponents/comment.vue"
 export default{
     data(){
         return {
             newInfo:{}
         }
     },
     created(){
        this.getNewInfo()
     },
     methods:{
         getNewInfo(){
              this.$http.get("api/getnew/"+this.$route.params.id).then(result=>{
                  if(result.body.status===0){
                     this.newInfo=result.body.message[0]
                  }
              })
         }
         
     },
     components:{
         comment
     }
 }
</script>
<style lang="scss">
 .new-info{
     margin-top: 10px;
     padding: 0 5px;
     .new-title{
         font-size: 16px;
         color: red;
         text-align: center;
     }
     .new-time{
         display: flex;
         justify-content: space-between;
         font-size: 14px;
         color:#22a6ff;
     }
     .new-content{
         img{
             width: 100%;
         }
     }
 }
</style>
