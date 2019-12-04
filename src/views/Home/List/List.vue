<template>
  <div class="list">
     <div class="item" v-for="(item,index) in list" :key="index">
         
         <div class="con"><img :src="item.pic" alt="">
             <span>{{item.title}}</span>
         </div>
         <span>{{item.time}}</span>
     </div>
  </div>
</template>

<script>
export default {
   props:["list"]
}
</script>

<style lang="scss">
.item{
    padding: 10px;
    border:1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .con{
        display: flex;
        align-items: center;
        img{
          margin-right: 10px;
        }
    }
}
</style>