<template>
  <div class="foot">
      <router-link tag="span" to="/home">首页</router-link>
      <router-link tag="span" to="/my">我的</router-link>
      <router-link tag="span" to="/space">空间</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 .foot{
     position: fixed;
     width: 100%;
     background: #fff;
     left: 0;
     bottom: 0;
     display: flex;
     justify-content: space-around;
     padding: 10px;
     border-top: 1px solid #f0f0f0;
     span.router-link-active{
         color:red
     }
 }
</style>