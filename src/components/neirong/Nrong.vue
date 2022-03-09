<template>
  <div class="bianju">
    <div class="biaoju2">
      <div class="biaoju3">
        <div class="texts">
          <span>{{texts}}</span>
        </div>
        <div id="yml"></div>
      </div>
      <div class="biaoju4"></div>
    </div>
  </div>
</template>

<script>
$(document).ready(function () {
  var lilist = $("dl>li")
  for (var i = 0;i < lilist.length;i++){
    if(i % 2 == 0){
      lilist[i].style.background = '#D38D8D'
    }else{
      lilist[i].style.background = '#C16A6A'
    }
  }
})
export default {
  name: "Nrong",
  data() {
    return {
      texts:''
    };
  },
  created() {
    this.gettextsname();
    this.getgjtexts();
  },
  methods:{
    gettextsname(){
      this.texts = this.$route.query.texts
    },
    getgjtexts(){
      var params = this.$route.query.texts
      $.ajax({
        url:'http://localhost:8080/gjtextslist?texts='+params,
        type:'get',
        dataType:'json',
        success:function (data) {
          var html1 = "<dl style='list-style: none;padding: 0;margin: 0;'>";
          $.each(data.list,function (i,n) {
            html1 += "<li id='textweilei' style='width: 900px;height: 35px;display: flex;align-items: center;background-color: #C16A6A;flex-display:row;list-style: none;padding: 0;margin: 0;padding-left: 30px;font-family: cursive;'>"
                  +"<span style='color: #fff;'>"
                  +n["id"]
                  +"</span>"
                  +"<span style='color: #fff;margin-left: 50px;'>"
                  +n["name"]
                  +"</span>"
                  +"</li>"
          })
          html1 += "</dl>";
          $("#yml").append(html1);
        },else:function () {
          alert("加载资源失败")
        }
      });
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 745px) and (max-width: 1920px) {

  li:nth-child(even){
    background-color: red;
  }
  .bianju{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #000;
  }
  .biaoju2{
    width: 1371px;
    height: 100%;
    border: 1px solid #fff;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-top: 35px;
  }
  .biaoju3{
    width: 1000px;
    height: 100%;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .biaoju4{
    width: 371px;
    height: 600px;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
  }
  .texts{
    width: 900px;
    background-color: #a02c2c;
    height: 50px;
    border-radius: 20px 20px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .texts>span{
    color: #fff;
    font-size: 16px;
    font-family: fantasy;
  }
  .texts2{
    width: 900px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #557c5c;
    flex-direction: row;
  }
  .texts2>.lis1{
    width: 50px;
    height: 35px;
    border: 1px solid #fff;
  }
  .texts2>.lis2{
    width: 850px;
    height: 35px;
    border: 1px solid #fff;
  }
}
</style>
