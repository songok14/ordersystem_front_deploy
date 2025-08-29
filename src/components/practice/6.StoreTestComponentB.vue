<template>
  <h1>Store ComponentB</h1>
  <p>지역변수값 count: {{ count }}</p>
  <p>전역 store 변수값 count: {{ getStoreCount }} </p>

</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed:{
    getStoreCount(){
      return this.$store.getters.getCount;
    }
  },
}
</script>

<style></style>