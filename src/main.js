import Vue from "vue"
// import {Header,Button,Swipe, SwipeItem,Lazyload,Switch } from 'mint-ui' //按需导入
import MintUI from 'mint-ui'//全部导入
import 'mint-ui/lib/style.css'

import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import "./css/index.css"
import router from "./router.js"
import VueResource from "vue-resource"
import VuePreview from "vue-preview"
import Vuex from "vuex"
import moment from "moment"

import app from "./App.vue"

Vue.use(VueResource)
// Vue.component(Header.name, Header)
// Vue.component(Button.name,Button)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Switch.name,Switch)
// Vue.use(Lazyload)
Vue.use(MintUI)
Vue.use(VuePreview)
Vue.use(Vuex)

Vue.http.options.root = 'http://47.89.21.179:8080';
Vue.http.options.emulateJSON = true;//配置post请求的contenttype

Vue.filter('dataFormate',function(value,formate='YYYY-MM-DD hh:mm:ss'){
     return moment(value).format(formate)
})

var localCar=JSON.parse(localStorage.getItem('car')) || []
var store=new Vuex.Store({
    state:{
        car:localCar
    },
    mutations:{
        addToCar(state,goodInfo){
            var flag=false
           state.car.some(item=>{
               if(item.id===goodInfo.id){
                   item.count+=goodInfo.count
                   flag=true
               }
           })
           if(!flag){
               state.car.push(goodInfo)
           }
           localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateCount(state,goodInfo){
          state.car.some(item=>{
              if(item.id===goodInfo.id){
                  item.count=goodInfo.count
              }
          })
          localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateSelected(state,goodInfo){
            state.car.some(item=>{
                if(item.id===goodInfo.id){

                    item.selected=goodInfo.selected
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{
        getGoodsId(state){
          var ids=[]
          state.car.forEach(ele => {
             ids.push(ele.id)
          });
          return ids
        },
        getGoodCount(state){
         var counts=[]
         state.car.forEach(ele=>{
             counts.push({'id':ele.id,'count':ele.count})
         })
        //  console.log(counts)
         return counts
        },
        getSelected(state){
            var selecteds={}
            state.car.forEach(item=>{
            selecteds[item.id]=item.selected
            })
            return selecteds
        },
        getSelectedGoods(state){
            var sum=0
            var allPrice=0
            state.car.some(item=>{
                if(item.selected){
                  sum+=parseInt(item.count)
                  allPrice+=parseInt(item.count)*parseInt(item.price)
                }
            })
            return {pieces:sum,prices:allPrice}
        },
        getCarCounts(state){
            return state.car.length
        }
    }
})

var vm=new Vue({
    el:"#app",
    data:{},
    methods:{},
    render:c=>c(app),
    router,
    store
})