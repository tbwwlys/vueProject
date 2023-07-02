<template>
  <div id="app">
    <VirtualList :listData="data" :itemSize="100"></VirtualList>
  </div>

</template>

<script>
import VirtualList from './components/VirtualList.vue'
const d = [];
for (let i =0; i < 100000; i++) {
  d.push({id: 1, value: i});
}

export default (await import('vue')).defineComponent({
  data() {
    return {
      data: d
    }
  },
  components: {
    VirtualList
  }

})
</script>

<style>
html {
  height: 100%;

}

body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}

</style>
