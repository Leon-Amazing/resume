<template>
  <div class="header">
    <h1>个人信息</h1>
    <div class="header-item">
      <i class="iconfont icon-avatar"><span>姓名：王窦亮</span></i>
      <i class="iconfont icon-sex"><span>性别：男</span></i>
    </div>
    <div class="header-item">
      <i class="iconfont icon-phone"><span>电话：173-5808-1058</span></i>
      <i class="iconfont icon-mail"><span>邮箱：leon1787128919@163.com</span></i>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  margin-bottom: 40px;
  .header-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .iconfont {
      cursor: pointer;
      text-align: left;
      width: 300px;
      color: #9b9b9b;

      span {
        padding-left: 10px;
        color: #000;
      }
    }
  }
}
</style>
