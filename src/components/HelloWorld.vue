<template>
  <div id="list-rendering">
  <ol>
  <!-- 创建一个 todo-item 组件实例 -->
  <todo-item v-for="item in todos"
      v-bind:todo="item"
      ></todo-item>
</ol>
</div>
</template>

<script>
const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}

</script>


<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
