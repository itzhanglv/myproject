<template>
   <div class="photo-list">
      <!--展示图片分类导航-->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id==0?'mui-active':'']" v-for="item in imgcg" :key="item.id">
							{{item.title}}
						</a>
					</div>
				</div>
	    </div>

     <!--展示图片列表区域-->
     <ul class="imgs-lazy">
        <router-link v-for="item in imgList" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
            <img v-lazy="item.img_url" class="img">
            <div class="zhaiyao">
            <h4>{{item.title}}</h4>
            <p> {{item.zhaiyao}}</p>
            </div>
        </router-link>
    </ul>
   </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js"
export default{
    data(){
        return {
            imgcg:[],
            imgList:[],
            cateid:0
        }
    },
    created(){
        this.getImgCategory()
        this.getImgList()
    },
    mounted(){
      mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    methods:{
        getImgCategory(){
           
            this.$http.get("api/getimgcategory").then(result=>{
            var allCg={
                title:'全部',
                id:0
            }
                if(result.body.status===0){
                    this.imgcg=result.body.message
                    this.imgcg.unshift(allCg)
                    // console.log(this.imgcg)
                }
            })
        },
        getImgList(){
           this.$http.get("api/getimages/"+this.cateid).then(result=>{
               if(result.body.status===0){
                   this.imgList=result.body.message
                //    console.log(this.imgList)
                   this.imgList.forEach(ele => {
                       ele.img_url='http://picapi.ooopic.com/10/61/91/44b1OOOPIC36.jpg'
                   });
               }
           })
        }
    }
}
</script>
<style lang="scss" scoped>
  .photo-list{
      .imgs-lazy{
          list-style:none;
          margin-top:0;
          padding:5px 10px;
          li{
              position:relative;
              background-color: #ccc;
              margin-bottom: 5px;
              box-shadow: 0 0 8px #ccc;
              text-align: center;
          img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
            }
            .img{
                width:100%;
                vertical-align: middle;
            }
            .zhaiyao{
                h4{
                font-size:14px;
                color:#fff;
                text-align: center;
                }
                p{
                    color:#fff;
                    font-size:12px;
                    padding:0 3px;
                }
                position: absolute;
                bottom:0;
            }
          }
          
      }
  }
</style>
