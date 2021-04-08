<template>
  <div class='boxNormal'>
    <div class="img_con">
      <img :src="originObj.imgSrc" mode="aspectFit">
    </div>
    <div class="title">{{originObj.title}}</div>
    <div class="other">
      <div v-for="(item,index) in originObj.other" :key="index" class="other_item">
        <div class="img_con">
          <img :src="item.imgSrc" mode="aspectFit">
        </div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
    <div class="more">
      <div>查看更多机构</div>
      <div class="icon_con el-icon-arrow-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'boxNormal',
  data(){
    return {}
  },
  props:{
    originObj:{
      type: Object
    }
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='less' scoped>
.boxNormal{
  width: 386px;
  background-color: #ffffff;
	box-shadow: 0px 4px 15px 0px 
		rgba(0, 0, 0, 0.08);
	border-radius: 20px;
	border: solid 1px #eaeaeb;
  overflow: hidden;
  padding-bottom: 30px;
  .img_con{
    width: 100%;
    height: 180px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .title{
    font-family: PingFangSC-Medium;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    padding: 30px;
    letter-spacing: 0px;
    color: #1f252c;
  }
  .other{
    padding:0 30px;
    padding-right: 0;
    .other_item{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 15px;
      .img_con{
        width: 50px;
        height: 50px;
        margin-right: 15px;
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .text{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #232323;
      }
    }
  }
  .more{
    padding: 0 30px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #1775f0;
    display: flex;
    align-items: center;
    .icon_con{
      margin-top: 2px;
      margin-left: 10px;
    }
  }
}
</style>
