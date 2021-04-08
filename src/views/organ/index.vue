<template>
  <div class="organ">
    <otherHeader :pageStatus="pageStatus"></otherHeader>
    <div class="search">
      <el-input
        class="header_search"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
        v-model="searchInput"
      />
    </div>
    <div class="seeAll">浏览所有机构</div>
    <div class="organ_content">
      <div class="title">机构类型</div>
      <div class="three_box">
        <div v-for="(item,index) in threeBox" :key="index" >
          <boxNormal v-if="index <= 3" :originObj="item"></boxNormal>
        </div>
      </div>
      <div class="title">国家</div>
      <div class="three_box">
        <div v-for="(item,index) in threeBox" :key="index" >
          <boxNormal v-if="index <= 3" :originObj="item"></boxNormal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import otherHeader from "@/components/otherHeader/otherHeader";
import boxNormal from '@/components/boxNormal/boxNormal' 
export default {
  name: "organ",
  data() {
    return {
      pageStatus: "organ",
      searchInput: "",
      threeBox:[{
        imgSrc: require('../../assets/image/z.jpg'),
        title: '作战指挥',
        other:[{
          imgSrc:require('../../assets/image/t.png'),
          text: '通用动力'
        },{
          imgSrc:require('../../assets/image/t.png'),
          text: '美国能源部爱达荷国家实验室（INL）'
        },{
          imgSrc:require('../../assets/image/t.png'),
          text: '美国雷神公司'
        }]
      },{
        imgSrc:require('../../assets/image/z.jpg'),
        title: '作战指挥',
        other:[{
          imgSrc:require('../../assets/image/t.png'),
          text: '通用动力'
        },{
          imgSrc:require('../../assets/image/t.png'),
          text: '美国能源部爱达荷国家实验室（INL）'
        },{
          imgSrc:require('../../assets/image/t.png'),
          text: '美国雷神公司'
        }]
      },{
        imgSrc:require('../../assets/image/z.jpg'),
        title: '作战指挥',
        other:[{
          imgSrc:require('../../assets/image/t.png'),
          text: '通用动力'
        },{
          imgSrc:require('../../assets/image/t.png'),
          text: '美国能源部爱达荷国家实验室（INL）'
        },{
          imgSrc:require('../../assets/image/t.png'),
          text: '美国雷神公司'
        }]
      }]
    };
  },
  components: {
    otherHeader,
    boxNormal
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.organ {
  background: #f8f9fb;
  width: 100%;
  min-height: 100%;
  padding: 130px 355px 100px 355px;
  box-sizing: border-box;
  .search {
    text-align: center;
    height: 56px;
    line-height: 56px;
    .header_search {
      margin: 0 auto;
      width: 528px;
      height: 56px;
      overflow: hidden;
      /deep/ .el-input__inner {
        background-color: #ffffff;
        border-radius: 28px;
        border: solid 1px #eaeaeb;
      }
    }
  }
  .seeAll {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #1775f0;
    margin-top: 10px;
  }
  .organ_content{
    padding-bottom: 60px;
    box-sizing: border-box;
    .title{
      font-family: PingFangSC-Medium;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #1f252c;
      margin-top: 60px;
      margin-bottom: 30px;
    }
    .three_box{
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
