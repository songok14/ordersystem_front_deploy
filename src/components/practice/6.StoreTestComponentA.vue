<template>
  <h1>Store ComponentA</h1>
  <p>지역변수값 count: {{ count }}</p>
  <v-btn @click="incrementCount()">count 증가</v-btn>
  <p>전역 store 변수값 count: {{ getStoreCount }}</p>
  <v-btn @click="incrementStoreCount()">전역 store count 증가</v-btn>
  <br> <br> <br>
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
  methods: {
    incrementCount() {
      this.count++;
    },
    incrementStoreCount() {
      // store의 actions를 호출 할 때, dispatch 함수를 사용
      this.$store.dispatch("incrementCount");
    }
  }
}
</script>

<style></style>