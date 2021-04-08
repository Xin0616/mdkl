<template>
  <div class="organMore">
    <otherHeader :pageStatus="pageStatus"></otherHeader>
    <div class="content_box">
      <div class="left_menu">
        <div class="search">
          <el-input
            class="header_search"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="searchInput"
          />
        </div>
        <div class="checkbox_con" v-for="(item,index) in checkboxList" :key="index">
          <div class="title">{{item.title}}</div>
          <!-- <el-checkbox-group v-model="">
            
          </el-checkbox-group> -->
          <div v-for="(city,indexd) in item.checkboxs" :key="indexd">
              <el-checkbox :label="city">{{city}}</el-checkbox>
              <!-- {{city}} -->
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import otherHeader from "@/components/otherHeader/otherHeader";
export default {
  name: "organMore",
  data() {
    return {
      pageStatus: "organ",
      searchInput: '',
      checkboxList:[{
        title:'机构类型',
        checkboxs:['作战指挥','行政管理','国防科研','国防企业','军事基地']
      },{
        title:'国家',
        checkboxs:['美国','日本','印度','英国','俄罗斯','澳大利亚','法国']
      }]
    };
  },
  components: { otherHeader },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.organMore{
  background: #f8f9fb;
  width: 100%;
  min-height: 100%;
  padding: 130px 355px 100px 355px;
  box-sizing: border-box;
  .content_box{
    display: flex;
    justify-content: space-between;
    .left_menu{
      width: 240px;
      padding: 30px;
      background-color: #ffffff;
      box-shadow: 0px 5px 15px 0px 
        rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      border: solid 1px #eff2f7;
      box-sizing: border-box;
      .search {
        text-align: center;
        height: 38px;
        line-height: 38px;
        margin-bottom: 50px;
        .header_search {
          margin: 0 auto;
          width: 180px;
          height: 38px;
          /deep/ .el-input__inner {
            background-color: #ffffff;
            border-radius: 20px;
            border: solid 1px #d7d7d7;
          }
        }
      }
      .checkbox_con{
        .title{
          font-family: PingFangSC-Semibold;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #1f252c;
          margin-bottom: 28px;
        }
      }
    }
  }
  
}
</style>
