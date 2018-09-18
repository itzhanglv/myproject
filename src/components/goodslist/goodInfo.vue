<template>
    <div class="good-info">
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-swipe :auto="4000">
                            <mt-swipe-item v-for="item in imgs" :key="item.img">
                                <img :src="item.img">
                            </mt-swipe-item>
                        </mt-swipe>
					</div>
				</div>
		</div>
        <div class="mui-card">
				<div class="mui-card-header">{{imgInfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					  <p class="price">
                          市场价：<span class="new-price">￥{{imgInfo.market_price}}</span>
                          销售价：<span class="old-price">￥{{imgInfo.sell_price}}</span>
                      </p>
                      <p class="good-number">
                          <span>购买数量：</span>
                          <goodNumbox :max="imgInfo.stock_quantity" @setCount="getCount"></goodNumbox>
                      </p>
                      <mt-button type="primary" size="small">立即购买</mt-button>
                      <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
					</div>
				</div>
		</div>
         <transition
                       @before-enter="beforeEnter"
                       @enter="enter"
                       @after-enter="afterEnter"
                      >
                          <div class="ball" v-show="flag" ref="ball"></div>
                      </transition>
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner good-desc">
						<p>商品货号：{{imgInfo.goods_no}}</p>
                        <p>库存情况：{{imgInfo.stock_quantity}}</p>
                        <p>上架时间：{{imgInfo.add_time | dataFormate}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="gotoGoodDesc(imgInfo.id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="goComment(imgInfo.id)">商品评论</mt-button>
                </div>
		</div>
    </div>
</template>
<script>
import goodNumbox from "./goodNumbox.vue"
 export default{
     data(){
         return{
             imgs:[
                {img:"https://img14.360buyimg.com/n1/s450x450_jfs/t20719/33/2407149891/189715/5c1da4a1/5b57070aNc58636d4.jpg"},
                {img:"https://img10.360buyimg.com/n1/s450x450_jfs/t19180/34/1775045698/73382/8ab9597e/5ad83d96N8e913941.jpg"},
                {img:"https://img10.360buyimg.com/n1/s450x450_jfs/t18631/362/1810054425/80580/3492263a/5ad83d99Ncf482930.jpg"}
             ],
             imgInfo:{},
             count:1,
             flag:false
         }
     },
     created(){
         this.getGoodInfo()
     },
     methods:{
       getGoodInfo(){
           this.$http.get("api/goods/getinfo/"+this.$route.params.id).then(result=>{
                 if(result.body.status===0){
                     this.imgInfo=result.body.message[0]
                 }
           })
       },
       getCount(val){
          this.count=val
       },
       beforeEnter(el){
        //   el.style.opacity=1
          el.style.transform='translate(0,0)'
       },
       enter(el,done){
        el.offsetWidth
        var ballTop=this.$refs.ball.getBoundingClientRect().top
        var ballLeft=this.$refs.ball.getBoundingClientRect().left
        var badgeTop=document.getElementById("badge").getBoundingClientRect().top
        var badgeLeft=document.getElementById("badge").getBoundingClientRect().left
        var topresult=badgeTop-ballTop
        var leftresult=badgeLeft-ballLeft
        // el.style.opacity=1
        el.style.transform=`translate(${leftresult}px,${topresult}px)`
        el.style.transition="all 0.5s ease"
        done()
       },
       afterEnter(el){
        this.flag=!this.flag
       } ,
       addToShopCar(){
           this.flag=!this.flag
           var goodInfo={
               id:this.imgInfo.id,
               count:parseInt(this.count),
               price:this.imgInfo.sell_price,
               selected:true
           }
           this.$store.commit('addToCar',goodInfo)
       },
       gotoGoodDesc(id){
           this.$router.push({name:"goodDesc",params:{id}})
       },
       goComment(id){
        this.$router.push({name:"goodComment",params:{id}})
       }
     },
     components:{
         goodNumbox
     }
 }
</script>
<style lang="scss" scoped>
.good-info{
    margin-top: 10px;
    position: relative;
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
          text-align: center;
        img{
          width: 150px;
          height: 150px;
        }
        }
        
    }
    .mui-card-header{
        font-size: 14px;
    }
    .price,.good-number{
        font-size:12px;
        color:#000;
    }
    .new-price{
        text-decoration: line-through;
    }
    .old-price{
        color:red;
        font-weight: 700;
    }
    .mui-card-content-inner{
      
        p{
         font-size: 12px;
        } 
        
    }
    .ball{
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background-color:red;
            position: absolute;
            top: 350px;
            left: 136px;
            z-index: 100;
        }
    .mui-card-footer{
        display: flex;
        flex-direction: column;
        .mint-button {
            margin-bottom: 10px;
        }
    }
}
</style>
