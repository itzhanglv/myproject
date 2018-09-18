<template>
   <div class="goodDesc">
       <h4 class="gd-title">{{gooddesc.title}}</h4>
       <hr>
       <div class="gd-content" v-html="gooddesc.content"></div>
   </div>
</template>
<script>
 export default{
     data(){
         return{
             gooddesc:{}
         }
     },
     created(){
         this.getGoodDesc()
     },
     methods:{
        getGoodDesc(){
            this.$http.get("api/goods/getdesc/"+this.$route.params.id).then(result=>{
                if(result.body.status===0){
                    this.gooddesc=result.body.message[0]
                }
            })
        }
     }
 }
</script>
<style lang="scss">
.goodDesc{
    .gd-title{
        font-size: 14px;
        color:#226aff;
        text-align: center;
        margin-top: 10px;
    }
    .gd-content{
        margin: 0 10px;
        img{
            width: 100%
        }
    }
}
</style>
