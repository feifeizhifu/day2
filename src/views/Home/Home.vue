<template>
  <div class="home">
    <div class="head">
      <span></span>
      <span>消息</span>
      <span>+</span>
    </div>
    <div class="form">
      <input type="text" placeholder="搜索" @input="input" v-model="value">
    </div>
    <div class="main">
       <list :list="value.length>0?list:$store.state.list"></list>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import foot from "../../components/common/Foot/Foot"
import axios from "axios"
import list from "./List/List"
export default {
  data(){
    return {
      value:"",
      list:[]
    }
  },
  components: {
    foot,
    list
  },
  created(){
   this.$store.dispatch("getData")
   console.log(this.$store.state.list)
  },
  methods:{
    input(){
      let arr = this.$store.state.list.filter(item=>{
        return item.title.includes(this.value)
      })
      this.list = arr
     
    }
  }
}
</script>
<style lang="scss">
  .head{
    background :blue;
    color :#ffffff;
    height: 40px;
    line-height: 40px;
    display: flex;
    padding :0 10px;
    justify-content :space-between
  }
  .form{
     margin: 10px; 
     input{
     width: 100%;
     height: 35px;
     border-radius: 4px;
     padding-left: 12px;
   } 
  }
  
</style>
