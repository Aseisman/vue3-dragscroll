<template>
  <div class="box" v-dragscroll>
    <div v-for="item in data">{{ item }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const data = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
</script>
<style scoped>
.box {
  margin: 0 auto;
  text-align: center;
  display: flex;
  cursor: w-resize;
  overflow: auto;
}
.box div {
  flex: 1 0 auto;
  width: 400px;
  height: 100px;
  line-height: 100px;
  border: 1px solid #ffffff;
  background: #a7ffa7;
  color: rgb(51, 51, 63);
  user-select: none;
}
</style>
<style>
/* 由于大多数人是 PC 端用户，PC 是 webkit 的，可以修改全局滚动条提高体验*/
body ::-webkit-scrollbar {
  width: 15px;
  height: 7px;
}

body ::-webkit-scrollbar-thumb:vertical {
  border-radius: 10px;
  border: 4px solid rgba(0, 0, 0, 0);
  box-shadow: 7px 0 0 #c3c3c3 inset;
  transition: background-color 0.3s;
}

body ::-webkit-scrollbar-thumb:horizontal {
  border-radius: 6px;
  background-color: #c3c3c3;
  transition: background-color 0.3s;
}

body ::-webkit-scrollbar-thumb:hover {
  box-shadow: 7px 0 0 #bbb inset;
}
</style>
