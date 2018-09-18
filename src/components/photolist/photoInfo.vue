<template>
  <div class="photo-info">
    <h4 class="title">{{imginfo.title}}</h4>
    <p class="time-click">
        <span>发表时间：{{imginfo.add_time | dataFormate}}</span>
        <span>点击：{{imginfo.click}}次</span>
    </p>
    <hr>
    <div class="imgs">
         <vue-preview :slides="imgs" @close="handleClose"></vue-preview>
    </div>
    <div class="content" v-html="imginfo.content">
    </div>
    <comment></comment>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue"
export default {
  data() {
    return {
      imginfo: {},
      imgs: [
        {
          src: "https://ps.ssl.qhmsg.com/bdr/_240_/t0101e81d9c7a6417b7.png",
          msrc:
            "https://ps.ssl.qhmsg.com/bdr/_240_/t0101e81d9c7a6417b7.png",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src: "https://ps.ssl.qhmsg.com/bdr/_240_/t012ecf9f005d1ac1d6.jpg",
          msrc:
            "https://ps.ssl.qhmsg.com/bdr/_240_/t012ecf9f005d1ac1d6.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src: "https://ps.ssl.qhmsg.com/bdr/_240_/t01c5a3201e004df59f.jpg",
          msrc:
            "https://ps.ssl.qhmsg.com/bdr/_240_/t01c5a3201e004df59f.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        }
      ]
    };
  },
  created() {
    this.getImgInfo();
  },
  methods: {
    getImgInfo() {
      this.$http
        .get("api/getimageInfo/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.imginfo = result.body.message[0];
          }
        });
    },
    handleClose() {}
  },
  components:{
    comment
  }
};
</script>
<style lang="scss" scoped>
.photo-info {
  .title {
    font-size: 14px;
    color: #226aff;
    text-align: center;
  }
  .time-click {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .content {
    font-size: 12px;
  }
  .imgs {
    & /deep/ img {
      width: 100px;
      height: 100px;
      box-shadow: 0 0 8px #ccc;
    }
    & /deep/ .my-gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
  }
}
</style>
