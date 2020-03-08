<template>
  <div id="app">
    <Card />
  </div>
</template>

<script>
import Card from './components/Card';
export default {
  name: 'App',
  components: {
    Card
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #0e0e0e;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
