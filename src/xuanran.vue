<template>
<div>
<div id="counter">
  Counter: {{ counter }}
</div>
<div id="bind-attribute"  >
  <span v-bind:title="message" >
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
  <p>{{message1}}</p>
  <button v-on:click = "reverseMessage">反转message </button>
</div>
</div>
</template>

<script>
export default {
  name: 'xuanran',
  components: {
  },
   data() {
    return {
      counter: 0,
      message: 'You loaded this page on' + new Date().toLocaleString() ,
      message1: 'hello vue.js'
    }
  },
  mounted(){
    setInterval(() => {
     this.counter++
    }, 1000)
  },
  method:{
           reverseMessage(){
      this.message1 = this.message1.split('').reverse().join('')
    }    
  }

}



</script>

<style>

</style>