<template>
 <div class="goods-list">
     <div class="good" v-for="item in goodslist" :key="item.id" @click="gotogoodinfo(item.id)">
      <div>
      <img src="https://img13.360buyimg.com/cms/jfs/t25162/41/541456590/23004/480db184/5b7384bdN88f09db1.jpg">
      <h4 class="title">{{item.title}}</h4>
      </div>
      <div class="info">
          <p class="price">
              <span class="new-price">￥{{item.sell_price}}</span>&nbsp;&nbsp;
              <span class="old-price">￥{{item.market_price}}</span>
          </p>
          <p class="sall">
              <span>热卖中</span>
              <span>剩{{item.stock_quantity}}件</span>
          </p>
      </div>
     </div>
     <mt-button type="danger" plain size="large" @click="loadMore">加载更多</mt-button>
 </div>
</template>
<script>
export default{
    data(){
        return{
            pageindex:1,
            goodslist:[]
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get("api/getgoods?pageindex="+this.pageindex).then(result=>{
              if(result.body.status===0){
                  this.goodslist=this.goodslist.concat(result.body.message)
              }
            })
        },
        loadMore(){
          this.pageindex++
          this.getGoodsList()
        },
        gotogoodinfo(id){
            this.$router.push({name:'goodInfo',params:{id}})
        }
    }
}
</script>
<style lang="scss" scoped>
.goods-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 3px;
    .good{
        width: 182px;
        min-height: 300px;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        box-shadow: 0 0 8px #ccc;
        margin-bottom: 3px;
        img{
            width:100%;
        }
        .title{
            font-size:12px;
            line-height: 15px;
            padding:0 3px;
        }
        .info{
            background-color: #ccc; 
        }
        .new-price{
            color:red;
        }
        .old-price{
            color:#000;
            font-size: 12px;
            text-decoration: line-through;
        }
        .sall{
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            padding: 0 3px;
        }
    }
}
</style>
