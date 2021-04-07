<template>
  <div class="home">
    <div class="header">
      <div class="header_left">
        <div class="header_first">
          <div class="header_text">美国国防领域典型人物画像系统</div>
          <div class="header_text_en">
            Typical Character Portrait System in American National Defense Field
          </div>
        </div>
        <el-input
          class="header_search"
          placeholder="请输入内容"
          suffix-icon="el-icon-search"
          v-model="searchInput"
        />
      </div>
      <div class="header_right">
        <div>
          <el-link
            v-for="(item, index) in linkList"
            :key="index"
            :underline="false"
            class="linked"
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
    <div class="content">
      <div class="content_left">
        <div class="title">筛选机构</div>
        <el-tree
            :default-expand-all="true"
            :data="treeData"
            :props="defaultProps"
          ></el-tree>
        <div class="left_jt"><i class="el-icon-arrow-left"></i></div>
      </div>
      <div class="content_right">
        <div class="guanzhu">
          <div class="title">关注动态</div>
          <div class="member_con">
            <div class="member_left">
              <img src="../../assets/image/wx1.png" alt="" />
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
            <div class="bigPic"></div>
            <div class="twoPic">
              <div class="pic"></div>
              <div class="pic picRight"></div>
            </div>
          </div>
        </div>
        <div class="other_dt">
          <div class="title">其他动态</div>
          <div class="text_conter">
            <div class="bigPic"></div>
            <div class="text_3line">
              Salesforce is the Customer Success Platform.Its social and mobile
              cloud technologies inclu-ding its flagship sales and CRM...
            </div>
            <div class="bigPic"></div>
            <div class="text_3line">
              Salesforce is the Customer Success Platform.Its social and mobile
              cloud technologies inclu-ding its flagship sales and CRM...
            </div>
          </div>
        </div>
        <div class="right_jt"><i class="el-icon-arrow-right"></i></div>
        <div class="right_tabs">
          <div class="tabs_item blueColor">关注动态</div>
          <div class="tabs_item">个人关注</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      searchInput: "",
      linkList: [
        { textVal: "典型人物", path: "/" },
        { textVal: "重点机构", path: "/" },
        { textVal: "军事基地", path: "/" },
        { textVal: "武器装备", path: "/" },
        { textVal: "战略政策", path: "/" },
      ],
      treeData: [
        {
          label: "美国国防部",
          id: 1,
          children: [
            {
              label: "国防部",
              id: 11,
              children: [
                {
                  id: 111,
                  label: "三级国防部",
                },
              ],
            },
            {
              id: 12,
              label: "国防部门现场活动机构",
              children: [
                {
                  id: 121,
                  label: "国防媒体处",
                },
                {
                  id: 122,
                  label: "国防部战俘/失踪人员办公室",
                },
                {
                  id: 123,
                  label: "国防技术信息中心",
                },
                {
                  id: 124,
                  label: "国防技术安全管理处",
                },
                {
                  id: 125,
                  label: "国防部教育处",
                },
                {
                  id: 126,
                  label: "国防部人力资源处",
                },
                {
                  id: 127,
                  label: "经济调节办公室",
                },
                {
                  id: 128,
                  label: "华盛顿总部服务处",
                },
              ],
            },
            {
              id: 13,
              label: "联合作战司令部",
              children: [
                {
                  id: 131,
                  label: "美国印度洋-太平洋司令部",
                },
                {
                  id: 132,
                  label: "美国非洲司令部",
                },
                {
                  id: 133,
                  label: "美国中央司令部",
                },
                {
                  id: 134,
                  label: "美国欧洲司令部",
                },
                {
                  id: 135,
                  label: "美国北方司令部",
                },
                {
                  id: 136,
                  label: "美国南方司令部",
                },
                {
                  id: 137,
                  label: "美国网络司令部",
                },
                {
                  id: 138,
                  label: "美国特种作战司令部",
                },
                {
                  id: 139,
                  label: "美国战略司令部",
                },
                {
                  id: 1310,
                  label: "美国运输司令部",
                },
                {
                  id: 1311,
                  label: "美国太空司令部",
                },
              ],
            },
            {
              label: "军种部门",
              id: 14,
              children: [
                {
                  id: 141,
                  label: "三级军种部门",
                },
              ],
            },
            // {
            //   label: "美国国防部部长办公厅",
            //   id: 16,
            //   children: [
            //     {
            //       id: 161,
            //       label: "三级美国国防部部长办公厅",
            //     },
            //   ],
            // },
            // {
            //   label: "美国参谋长联席会议",
            //   id: 17,
            //   children: [
            //     {
            //       id: 171,
            //       label: "参谋长联席会议主席",
            //     },
            //     {
            //       id: 172,
            //       label: "参谋长联席会议副主席",
            //     },
            //     {
            //       id: 173,
            //       label: "高级士兵顾问",
            //     },
            //   ],
            // },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped src="./home.less"></style>
