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
      <div style="position:relative">
        <div class="content_left" v-show="leftmenu">
          <div class="title">筛选机构</div>
          <el-tree
            :default-expand-all="true"
            :data="treeData"
            :props="defaultProps"
            show-checkbox
            style="margin-left:-5px"
          ></el-tree>
        </div>
        <div class="left_jt" @click="handleLeft">
          <i :class="[leftmenu?'el-icon-arrow-left':'el-icon-arrow-right']"></i>
        </div>
      </div>
      <div style="position:relative">
        <div class="content_right" v-show="rightmenu">
          <follow v-if="rightStatus == 'follow'"></follow>
          <personal v-if="rightStatus == 'personal'"></personal>
        </div>
        <div class="right_jt" @click="handleRight">
          <i :class="[rightmenu?'el-icon-arrow-right':'el-icon-arrow-left']"></i>
        </div>
        <div class="right_tabs">
          <div class="tabs_item"  @click="changeShow('follow')" :class="[rightStatus == 'follow'?'blueColor':'']">关注动态</div>
          <div class="tabs_item" @click="changeShow('personal')" :class="[rightStatus == 'personal'?'blueColor':'']">个人关注</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import follow from '../../components/home/follow'
import personal from '../../components/home/personal'
import {throttle} from '../../assets/js/tools.js'
export default {
  name: "",
  data() {
    return {
      searchInput: "",
      linkList: [
        { textVal: "典型人物", path: "/personal" },
        { textVal: "重点机构", path: "/organ" },
        { textVal: "军事基地", path: "/" },
        { textVal: "武器装备", path: "/" },
        { textVal: "战略政策", path: "/" },
      ],
      leftmenu: true,
      rightmenu: true,
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
                  label: "国防部失踪人员办公室",
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
                  label: "美国印度洋司令部",
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
            }
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      rightStatus: 'follow'
    };
  },
  components: {
    follow,
    personal
  },
  created() {},
  mounted() {
    
  },
  methods: {
    handleLeft: throttle(function(){
      this.leftmenu = !this.leftmenu
    },500),
    handleRight: throttle(function(){
      this.rightmenu = !this.rightmenu
    },500),
    changeShow(status){
      this.rightStatus = status
    }
  },
};
</script>
<style lang="less" scoped src="./home.less"></style>
