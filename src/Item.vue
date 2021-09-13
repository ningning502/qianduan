<template>
  <div>
 <p @click="clickBox">hello</p>
 <div id="app-2">
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds
    to see my dynamically bound title!
  </span>
</div>
  </div>
</template>

<script>

export default {
  name: 'item',
  components: {
  },
  data(){
    return{
      message:"asd"
    }
  },
  methods:{
    clickBox(){
    alert(1)
    }
  }
}
</script>

<style>
p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;
  width: 100px;
  height: 50px;
  background-color: aqua;
  border-radius: 20px;

}
</style>