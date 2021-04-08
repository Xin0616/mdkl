<template>
  <div class="otherHeader">
    <div class="header_left">
      <div class="header_first">
        <div class="header_text">美国国防领域典型人物画像系统</div>
        <div class="header_text_en">
          Typical Character Portrait System in American National Defense Field
        </div>
      </div>
    </div>
    <div class="header_right">
      <div>
        <el-link
          v-for="(item, index) in linkList"
          :key="index"
          :underline="false"
          class="linked"
          :class="[pageStatus == item.linkType?'actived':'']"
          :href="item.path"
          >{{ item.textVal }}</el-link
        >
      </div>
      <div class="right_mg">
        <div>美国</div>
        <div class="jiantou"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "otherHeader",
  data() {
    return {
      linkList: [
        { textVal: "典型人物", path: "/personal",linkType:"personal" },
        { textVal: "重点机构", path: "/organ",linkType:"organ" },
        { textVal: "军事基地", path: "/",linkType:"1"  },
        { textVal: "武器装备", path: "/",linkType:"2"  },
        { textVal: "战略政策", path: "/",linkType:"3"  },
      ],
    };
  },
  props: {
    pageStatus: {
      type: String,
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.otherHeader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 90px;
  background-color: #ffffff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 40px 40px;
  padding-left: 355px;
  padding-right: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_left {
    width: 50%;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    align-items: center;
    .header_first {
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      .header_text {
        font-family: PingFangSC-Semibold;
        font-size: 32px;
        color: #2178ec;
      }
      .header_text_en {
        font-family: DIN-Medium;
        font-size: 14px;
        color: #2178ec;
      }
    }
  }
  .header_right {
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    display: flex;
    padding-top: 30px;
    .linked {
      align-self: flex-end;
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #1f252c;
      margin-right: 42px;
    }
    .right_mg {
      color: #2178ec;
      align-self: flex-end;
      margin-left: 70px;
      display: flex;
      .jiantou {
        display: inline-block;
        align-self: center;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #2178ec;
        margin-left: 10px;
      }
    }
    .actived{
      color: #1775f0;
    }
  }
}
</style>
