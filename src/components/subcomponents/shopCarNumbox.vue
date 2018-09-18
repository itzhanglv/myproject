<template>
  <div class="mui-numbox" data-numbox-min='1'>
	<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	<input id="test" class="mui-input-numbox" type="number" :value="count" ref="numbox" @change="updateCount" readonly/>
	<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js"
 export default{
     data(){
         return{
             count:1
         }
     },
     created(){
       this.getCount();
     },
     mounted(){
         mui(".mui-numbox").numbox()
     },
     methods:{
        getCount(){
           this.$store.getters.getGoodCount.some(item=>{
               if(item.id===this.gid){
                  this.count=item.count
               }
           })
        },
        updateCount(){
            var goodinfo={}
            goodinfo.id=this.gid
            goodinfo.count=this.$refs.numbox.value
            this.$store.commit("updateCount",goodinfo)
        }
     },
     props:['gid'],
 }
</script>
<style lang="scss" scoped>
.mui-numbox{
    height: 20px;
    .mui-input-numbox{
        font-size:12px;
        color:#000;
    }
}
</style>
