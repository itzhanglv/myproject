<template>
 <div class="shopcar-container">
     <!--订单项-->
    <div class="good-items">
    <div class="mui-card" v-for="item in carList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner good-item">
                        <mt-switch v-model="$store.getters.getSelected[item.id]" @change="updatSelected(item.id,$store.getters.getSelected[item.id])"></mt-switch>
						<img src="https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg">
                        <div class="good-desc">
                            <p class="title">{{item.title}}<p>
                            <p class="count-price">
                            <span class="price">￥{{item.sell_price}}</span>
                            <shop-car-numbox :gid="item.id"></shop-car-numbox>
                            <a>删除</a>
                            </p>   
                        </div>
					</div>
				</div>
	</div>
    </div>
    <!--订单总和-->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="price-container">
                            <div>
                                <p>总计（不含运费）</p>
                                <p>已勾选商品 <span class="all-piece">{{$store.getters.getSelectedGoods.pieces}}</span> 件，总价： <span class="all-price">￥{{$store.getters.getSelectedGoods.prices}}</span></p>
                            </div>
                            <mt-button type="danger">去结算</mt-button>
                        </div>
					</div>
				</div>
	</div>
 </div>
</template>
<script>
 import shopCarNumbox from "../subcomponents/shopCarNumbox.vue"
 export default{
     data(){
         return{
              goodslist:[
                  {
                     id:87,
                     title:"华为（HUAWEI）荣耀6Plus 16G双4G版",
                     sell_price:2195,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 },
                 {
                     id:88,
                     title:"苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
                     sell_price:6388,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 },
                   {
                     id:89,
                     title:"小米（Mi）小米Note 16G双网通版",
                     sell_price:2199,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 },
                   {
                     id:90,
                     title:"佳能（Canon） EOS 700D 单反套机",
                     sell_price:4799,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 },
                   {
                     id:91,
                     title:"尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）",
                     sell_price:3180,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 },
                   {
                     id:92,
                     title:"联想（Lenovo） G510AM 15.6英寸笔记本电脑",
                     sell_price:2999,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 },
                   {
                     id:93,
                     title:"Apple iMac MF883CH/A 21.5英寸一体机电脑 ",
                     sell_price:7200,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 },
                   {
                     id:94,
                     title:"金士顿（Kingston） DataTraveler SE9 32GB 金属U盘",
                     sell_price:79,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 },
                   {
                     id:95,
                     title:"惠普（HP）LaserJet 2035商用黑白激光打印机（黑色）",
                     sell_price:1899,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 },
                  {
                     id:96,
                     title:"惠普(HP) Officejet Pro 8610商用彩色喷墨一体机",
                     sell_price:1999,
                     img_url:'https://img10.360buyimg.com/cms/s80x80_jfs/t22537/146/1691972730/217168/76bbe224/5b681abcNbaf7dc93.jpg'
                 }
             ],
             carList:[],
             selected:true
         }
     },
     created(){
         this.getShopCarGoods()
     },
     methods:{
         getShopCarGoods(){
            //  this.$http.get('api/goods/getshopcarlist/'+this.$store.getters.getGoodsId).then(result=>{
            //   if(result.body.status===0){
            //     this.gooditems=result.body.message
            //   }
            //  })
            var ids=this.$store.getters.getGoodsId
            ids.forEach(ele => {
            this.goodslist.some(item=>{
                if(item.id===ele){
                    this.carList.push(item)
                }
            })
            })
            
         },
         updatSelected(id,val){
             this.$store.commit('updateSelected',{id,selected:val})
         }
     },
     components:{
         shopCarNumbox
     }
 }
</script>
<style lang="scss" scoped>
.shopcar-container{
    .good-items{
        background-color: #ccc;
        overflow: hidden;
        .good-item{
            display: flex;
            justify-content:space-around;
            img{
                width: 60px;
                height: 60px;
            }
            .good-desc{
                .title{
                    font-size: 12px;
                    color:#000;
                    font-weight: 700;
                     width: 200px;
                    padding-left: 5px;
                }
                .count-price{
                    display: flex;
                    justify-content: space-around;
                    width: 200px;
                 .price{
                    font-size: 12px;
                    color:red;
                  }
                 a{
                     font-size: 12px;
                 }
                }
                
            }
        }
    }
    .price-container{
        display: flex;
        justify-content: space-between;
        p{
            font-size: 12px;
         .all-piece,
         .all-price{
            font-size: 16px;
            color:red;
            font-weight: 700;
        }
        }
        
    }
}
</style>
