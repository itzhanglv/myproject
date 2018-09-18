<template>
  <div class="mui-numbox" data-numbox-min='1'>
	<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	<input id="test" class="mui-input-numbox" type="number" value="1" @change="getcount" ref="numbox"/>
	<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js"
 export default{
     data(){
         return{}
     },
     methods:{
        getcount(){
            this.$emit('setCount',this.$refs.numbox.value)
        }
     },
     props:['max'],
     watch:{
         'max':function(newVal,oldVal){
             mui(".mui-numbox").numbox().setOption('max',newVal)
         }
     }
 }
</script>
<style lang="scss" scoped>
.mui-numbox{
    height: 25px;
}
</style>
