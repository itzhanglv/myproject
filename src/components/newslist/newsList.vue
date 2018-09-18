<template>
 <div class="news-list">
  <div v-for='item in newslist' :key="item.id">
  <div class="news-desc" @click="getNewInfo(item.id)">
      <img src="../../images/menu2.png">
      <div class="content">
      <h4 class="new-title">{{item.title}}</h4>
      <p class="newTime">
          <span>发表时间：{{item.add_time | dataFormate}}</span>
          <span>点击：{{item.click}}次</span>
      </p>
      </div>
  </div>
  <hr>
  </div>
 </div>
</template>
<script>
 export default{
     data(){
         return{
             newslist:[]
         }
     },
     created(){
         this.getNewsList();
     },
     methods:{
        getNewsList(){
            this.$http.get("api/getnewslist").then(result=>{
                if(result.body.status===0){
                  this.newslist=result.body.message
                }
            })
        },
        getNewInfo(id){
         this.$router.push({name:'newInfo',params:{id}})
        }
     }
 }
</script>
<style lang="scss" scoped>
.news-list{
    padding:10px 10px;
    
     .news-desc{
      
        img{
          width: 40px;
          height: 40px;
          vertical-align: top;
        }
        .content{
            display: inline-block;
             width: 306px;
        }
         .new-title{
             font-size: 14px;
             font-weight: 400;
         }
         .newTime{
             margin-bottom: 0;
             font-size: 12px;
             color:#22a6ff;
             display: flex;
             justify-content:space-between;
         }
     }
}
</style>
