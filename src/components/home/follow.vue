<template>
  <div>
    <div class="guanzhu">
      <div class="title">关注动态</div>
      <div class="member_con">
        <div class="member_left">
          <img src="../../assets/image/t.png" alt="" />
          <div>
            <div class="member_name">Edward S. Ammeen</div>
            <div class="member_date">2021.03.01</div>
          </div>
        </div>
        <div class="member_right">
          in
        </div>
      </div>
      <div class="text_conter">
        <div class="text_3line">
          Salesforce is the Customer Success Platform.Its social and mobile
          cloud technologies inclu-ding its flagship sales and CRM...
        </div>
        <div class="bigPic">
          <img src="../../assets/image/z.jpg" mode="aspectFit" />
        </div>
        <div class="twoPic">
          <div class="pic">
            <img src="../../assets/image/z.jpg" mode="aspectFit" />
          </div>
          <div class="pic picRight">
            <img src="../../assets/image/z.jpg" mode="aspectFit" />
          </div>
        </div>
      </div>
    </div>
    <div class="other_dt">
      <div class="title">其他动态</div>
      <div class="text_conter">
        <div class="bigPic">
          <img src="../../assets/image/z.jpg" mode="aspectFit" />
        </div>
        <div class="text_3line">
          Salesforce is the Customer Success Platform.Its social and mobile
          cloud technologies inclu-ding its flagship sales and CRM...
        </div>
        <div class="bigPic">
          <img src="../../assets/image/z.jpg" mode="aspectFit" />
        </div>
        <div class="text_3line">
          Salesforce is the Customer Success Platform.Its social and mobile
          cloud technologies inclu-ding its flagship sales and CRM...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.title {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #1f252c;
  margin-bottom: 20px;
}
.member_con {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaeb;
  box-sizing: border-box;
  .member_left {
    display: flex;
    justify-content: space-between;
    font-family: DIN-Regular;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      background-color: #ffffff;
      border: solid 1px #eaeaeb;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 15px;
    }
    .member_name {
      font-size: 14px;
      color: #1f252c;
    }
    .member_date {
      font-family: DIN-Regular;
      font-size: 12px;
      color: #1f252c;
      opacity: 0.5;
    }
  }
  .member_right {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #2178ec;
    overflow: hidden;
    color: #ffffff;
    text-align: center;
    line-height: 16px;
    align-self: center;
  }
}
.other_dt {
  padding-top: 30px;
  .text_conter {
    padding-top: 0;
    border: none;
  }
}
.text_conter {
  padding-top: 30px;
  padding-bottom: 10px;
  font-family: DIN-Regular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #1f252c;
  border-bottom: 1px solid #eaeaeb;
  .text_3line {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .bigPic {
    width: 250px;
    height: 75px;
    background-color: #2178ec;
    box-sizing: border-box;
    border-radius: 6px;
    overflow: hidden;
    margin-top: 15px;
    margin-bottom: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .twoPic {
    display: flex;
    justify-content: space-between;
    .pic {
      width: 122px;
      height: 75px;
      background-color: #d83dd8;
      box-sizing: border-box;
      border-radius: 6px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
