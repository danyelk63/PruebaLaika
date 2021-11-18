<template>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
}

@import'~bootstrap/dist/css/bootstrap.css';
</style>
