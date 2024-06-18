<!-- 稿源库 -->
<script setup>
// 请求数据
const url = 'http://v-cznews2021.vm.cziic.cn:9090/article/list'
const reg = {page:1,limit:30,date:null,keywords:"",sort:"+id",status:null}
let response = await fetch(url,{
  method:'POST',
  body:JSON.stringify(reg)
})
let result = await response.json();
alert(result.message);
</script>

<template>
  <p>test</p>
</template>

<style lang="scss" scoped></style>
