<template>
  <div>
    <span>{{texts}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      texts:'',
    }
  },
  created() {
    this.gettext()
  },
  methods:{
    gettext(){
      this.texts = this.$route.query.textslist;
    }
  }
}
</script>

<style scoped>

</style>
