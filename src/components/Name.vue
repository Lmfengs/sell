<template>
  <div style="width: 500px;height: 500px;border: 1px solid #000;margin: 0 auto;">
    <div v-for="(item,index) in wjnamelist" :key="index">
<!--      <div><span>{{item.id}}</span></div>-->
<!--      <div><span>{{item.wjname}}</span></div>-->
    </div>
    <div id="div"></div>
  </div>
</template>

<script>
//
//$(document).ready(function () {
//  $(".list li").click(function () {
//    $(this).addClass("active");
//    $(this).siblings().removeClass("active");
//    // var  index = $(this).index();
//    $(".content").eq($(".list li").index(this)).addClass("active-1").siblings().removeClass("active-1")
//  })
//})
export default {
  data() {
    return {
      // wjnamelist:'',
    }
  },
  created() {
    this.gettext();
  },
  methods: {
    gettext(){
      // this.$http.get('http://localhost:8080/wjnamelist').then(res => {
      //   this.wjnamelist = res.data.list
      // }).catch(err => {
      //   console.log(err)
      // })
    //   $.ajax({
    //     type: "get",
    //     url: "http://localhost:8080/wjnamelist",
    //     dataType: "json",
    //     success:function (data) {
    //       var html = "<ul>";
    //       $.each(data.list,function (i,n) {
    //         html += "<li>"
    //         +"<span>"
    //         +n["id"]
    //         +"</span>"
    //         +"<span>"
    //         +n["wjname"]
    //         +"</span>"
    //         +"</li>"
    //       })
    //       html += "</ul>"
    //       $("#div").append(html);
    //     },
    //     else:function () {
    //       alert("加载资源失败")
    //     }
    //   })
      $.ajax({
        type: 'get',
        url: 'http://localhost:8080/wjnamelist',
        dataType: 'json',
        success:function (data) {
          var htmls = "<div>"
          $.each(data.list,function (i,n) {
            htmls += "<div style='width: 100px;height: 100px;border: 1px solid #000;background-color: red;color: #fff;float: left;'>"
              +"<span>"
              +n["id"]
              +"</span>"
              +"<span>"
              +n["wjname"]
              +"</span>"
              +"</div>"
          })
          htmls += "</div>"
          $("#div").append(htmls)
        },else:function () {
          alert("加载资源失败")
        }
      })
    //   $.ajax({
    //     type:'get',
    //     url:'http://localhost:8080/wjnamelist',
    //     dataType:'json',
    //     success:function (data) {
    //       var wjnamelists = "<div>"
    //       $.each(data.list,function (i,n) {
    //         wjnamelists += +"<span>"+n["id"]+"</span>"
    //         +"<span>"+n["wjname"]+"</span>"
    //       })
    //       wjnamelists += "</div>"
    //       $("#div").append(wjnamelists)
    //     },else:function () {
    //       alert("资源加载失败")
    //     }
    //   })
    }
  }
}
</script>

<style scoped>
</style>
