<template>
  <div class="body">
    <img :src="imagers" width="35px" height="35px" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      imagers:'',
    }
  },
  created() {
    this.getlist();
  },
  methods:{
    getlist(){
      this.imagers = this.$route.query.list;
    }
  }
}
</script>

<style scoped>
.body{
  background-color: #1d2124;
  width: auto;
  height: 50px;
}
</style>
