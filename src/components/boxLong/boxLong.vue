<template>
  <div class='boxLong'>
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
      <div class="more">
        <div>查看更多机构</div>
        <div class="icon_con el-icon-arrow-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'boxLong',
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
.boxLong{
  width: 590px;
  background-color: #ffffff;
	box-shadow: 0px 4px 15px 0px 
		rgba(0, 0, 0, 0.08);
	border-radius: 20px;
	border: solid 1px #eaeaeb;
  overflow: hidden;
  .img_con{
    width: 100%;
    height: 180px;
    img{
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .title{
    font-family: PingFangSC-Medium;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #1775f0;
    padding: 30px;
  }
  .other{
    display: flex;
    justify-content: space-between;
    padding: 30px;
    .img_con{
      width: 50px;
      height: 50px;
      margin-right: 14px;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .other_item{
      display: flex;
      align-items: center;
      .text{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #232323;
      }
    }
    .more{
      display: flex;
      align-items: center;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #8c96a3;
      opacity: 0.5;
      .icon_con{
        margin-top: 2px;
        margin-left: 10px;
      }
    }
  }
}
</style>
