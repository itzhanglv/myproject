<template>
<div class="comment-list">
    <h1>发表评论</h1>
    <hr>
    <textarea placeholder="请输入要评论的内容（最多120个字）" rows="4" v-model="comment"></textarea>
    <mt-button type="primary" size="large" @click="publishComment">发表评论</mt-button>
    <div v-for="(item,i) in comments" :key="i" class="comment-desc">
        <p class="comment-info">
            <span>第{{i+1}}楼</span>
            <span>用户：{{item.user_name}}</span>
            <span>发表时间：{{item.add_time | dataFormate}}</span>
        </p>
        <p class="comment-content">
            {{item.content}}
        </p>
    </div>
    <mt-button type="danger" size="large" plain @click="addMore">加载更多</mt-button>
</div>
</template>
<script>
import {Toast} from "mint-ui"
export default{
    data(){
        return {
            pageindex:1,
            comments:[],
            comment:''
        }
    },
    created(){
        this.getCommentList()
    },
    methods:{
        getCommentList(){
        this.$http.get("api/getcomments/"+this.$route.params.id+"?pageindex="+this.pageindex).then(result=>{
         if(result.body.status===0){
             this.comments=this.comments.concat(result.body.message)
         }
        })
        },
        addMore(){
            this.pageindex++
            this.getCommentList()
        },
        publishComment(){
            var obj={
                user_name:'匿名用户',
                add_time:new Date(),
                content:this.comment
               }
         this.$http.post("api/postcomment/"+this.$route.params.id,{content:this.comment}).then(result=>{
             if(result.body.status===0){  
            this.comments.unshift(obj);
                 Toast("发表成功")
             }
         })
         this.comment=""
        }
      
    }

}
</script>
<style lang="scss" scoped>
  .comment-list{
     h1{
         font-size: 16px;
     }
     textarea{
         font-size: 14px;
         margin-bottom: 5px;
     }
     .mint-button{
         margin-bottom: 5px;
     }
     .comment-desc{
        .comment-info{
         background-color: #ccc;
         font-size:12px;
         color:#000;
         margin-bottom: 0;
        }
        .comment-content{
           margin-bottom: 0;
           height: 25px;
           line-height: 25px;
           text-indent: 2em;
           color: #000;
        }
     }
    
  }
</style>
