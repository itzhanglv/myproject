import Vue from "vue"
import VueRouter from "vue-router"
import homeContainer from "./components/index/homeContainer.vue"
import memberContainer from "./components/index/memberContainer.vue"
import shopCarContainer from "./components/index/shopCarContainer.vue"
import searchContainer from "./components/index/searchContainer.vue" 
import newsList from "./components/newslist/newslist.vue"
import newInfo from "./components/newslist/newInfo.vue"
import photoList from "./components/photoList/photoList.vue"
import photoInfo from "./components/photolist/photoInfo.vue"
import goodsList from "./components/goodslist/goodsList.vue"
import goodInfo from "./components/goodslist/goodInfo.vue"
import goodDesc from "./components/goodslist/goodDesc.vue"
import comment from "./components/subcomponents/comment.vue"

Vue.use(VueRouter)
var router=new VueRouter({
    routes:[
     {path:"/home",component:homeContainer},
     {path:"/member",component:memberContainer},
     {path:"/shopcar",component:shopCarContainer},
     {path:"/search",component:searchContainer},
     {path:"/home/newsList",component:newsList},
     {path:"/home/newInfo/:id",component:newInfo,name:'newInfo'},
     {path:"/home/photoList",component:photoList},
     {path:"/home/photoInfo/:id",component:photoInfo},
     {path:"/home/goodsList",component:goodsList},
     {path:"/home/goodInfo/:id",component:goodInfo,name:"goodInfo"},
     {path:"/home/goodDesc/:id",component:goodDesc,name:"goodDesc"},
     {path:"/home/comment/:id",component:comment,name:"goodComment"},
     {path:"/",redirect:"/home"}
    ],
    linkActiveClass:"mui-active"
});
export default router