<template>
 <div class="home-container">
     <!--轮播图-->
     <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbo" :key="item.img"><img :src="item.img"></mt-swipe-item>
     </mt-swipe>
     <!--业务详情图标-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <!-- <span class="mui-icon mui-icon-home"></span> -->
                            <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
		                    <img src="../../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
		                    <img src="../../images/menu3.png">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png">
		                    <div class="mui-media-body">联系我们</div></a></li>
	</ul> 
 </div>
</template>
<script>
export default{
    data(){
        return {
            lunbo:[]
        }
    },
    created(){
        this.getlunbo()
    },
    methods:{
        getlunbo(){
            this.$http.get("api/getlunbo").then(result=>{
                if(result.body.status===0){
                 this.lunbo=result.body.message
                //  console.log(this.lunbo)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .home-container{
        height: 200px;
        .mint-swipe-item{
            img{
                width: 100%;
                height: 100%;
            }
        }
        
        .mui-table-view{
            background-color: #fff;
            border:none;
            .mui-table-view-cell{
                border:none;
            img{
                width: 50px;
                height: 50px;
            }
        }
        }
    }
</style>
