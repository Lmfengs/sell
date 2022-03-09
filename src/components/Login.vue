<template>
  <div class="bodys1">
    <div class="bodys2">
      <div class="bodys3">
        <div class="bodys4">
          <img src="static/images/yonghuico.png"/>
        </div>
        <div class="bodys5">
          <span>User Login</span>
        </div>
      </div>
      <div class="bodys6">
        <div class="bodys7">
          <img src="static/images/yonghu3.png" width="35px" height="35px" />
        </div>
        <div class="bodys8">
          <input type="text" id="zhanhao" v-model="zhanhao" placeholder="请输入用户名" />
          <img class="imgs3" id="img1" style="display: none" src="static/images/dago.png" />
          <img class="imgs3" id="img2" style="display: none" src="static/images/dacha.png" />
          <img class="imgs3" id="img5" style="display: none" src="static/images/jgao.png">
          <p id="text1"></p>
        </div>
      </div>
      <div class="bodys6">
        <div class="bodys7">
          <img src="static/images/mima.png" width="35px" height="35px" />
        </div>
        <div class="bodys8">
          <input type="password" id="password" v-model="password" placeholder="请输入密码" />
          <img class="imgs3" id="img3" style="display: none" src="static/images/dago.png" />
          <img class="imgs3" id="img4" style="display: none" src="static/images/dacha.png" />
          <img class="imgs3" id="img6" style="display: none" src="static/images/jgao.png">
          <p id="text2"></p>
        </div>
      </div>
      <div class="bodys9">
        <button type="submit" id="submits" @click="getselect()">登录</button>
      </div>
      <div class="bodys10">
        <div class="divs1">
          <router-link to="/zhuce"><img src="static/images/zhuce.png" /></router-link>
        </div>
        <div class="divs1">
          <router-link to=""><img src="static/images/qq.png" /></router-link>
        </div>
        <div class="divs1">
          <router-link to=""><img src="static/images/weixi.png" /></router-link>
        </div>
        <div class="divs1">
          <router-link to=""><img src="static/images/shouji.png" /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

$(document).ready(function () {
  // $(".bodys10>.divs1").mouseover(function () {
  //   $(this).addClass("divs2").siblings().removeClass("divs2")
  // })
  // $(".bodys10>.divs1").mouseout(function () {
  //   $(this).removeClass("divs2")
  // })
  //
  // $("#submits").click(function () {
  //   //获取用户输入的用户名
  //   var username = $("#zhanhao").val();
  //   var password = $("#password").val()
  //   if(username != ''){
  //     setTimeout("alert('账号有值')",500)
  //     $("#img2").hide()
  //     $("#zhanhao").removeClass("zh9")
  //     document.getElementById("text1").innerHTML = "";
  //     if(password != ''){
  //       setTimeout("alert('密码有值')",500)
  //       $("#img4").hide()
  //       $("#password").removeClass("zh9")
  //       document.getElementById("text2").innerHTML = "";
  //     }else{
  //       setTimeout("alert('密码不能为空')",500)
  //       document.getElementById("text2").innerHTML = "请输入密码";
  //       $("#img4").show()
  //       $("#password").addClass("zh9")
  //     }
  //   }else{
  //     setTimeout("alert('账号不能为空')",500)
  //     // $("#text1").innerHTML = "请输入账号!";
  //     document.getElementById("text1").innerHTML = "请输入账号";
  //     $("#img2").show()
  //     $("#zhanhao").addClass("zh9")
  //   }
  // })
})
export default {
  name: "Login",
  data(){
    return{
      zhanhao:'',
      password:'',
      counts:'',
      imagers:'',
      name:'',
    }
  },
  created() {
  },
  methods:{
    getselect(){
      let params = {
        zhanhao:this.zhanhao,
        password:this.password
      }
      this.$axios.get('http://localhost:8080/userlists',{params}).then((response)=>{
        // if(this.zhanhao != "" && this.password != ""){
        //   alert("账号和密码都有值")
        //
        // }else{
        //   alert("账号和密码不能为空")
        // }
        this.counts = 0;
        if(this.zhanhao != null && this.zhanhao != ""){
          // this.$message({message: '账号有值', type: 'success', duration: '2000'});
          $("#img5").hide()
          // $("#img1").show()
          $("#zhanhao").removeClass("zh11")
          // $("#zhanhao").addClass("zh10")
          document.getElementById("text1").innerHTML = "";
          if(this.password != null && this.password != ""){
            $("#img6").hide()
            $("#password").removeClass("zh11")
            document.getElementById("text2").innerHTML = "";
            if(response.data.return == "yes"){
              alert("用户已存在")
              $("#img1").show()
              $("#img2").hide()
              $("#img3").show()
              $("#img4").hide()
              $("#zhanhao").removeClass("zh9")
              $("#zhanhao").addClass("zh10")
              $("#password").removeClass("zh9")
              $("#password").addClass("zh10")
              this.imagers = response.data.list.img;
              // alert(this.imager )
              this.$router.push({
                path:'/body',
                name:'Body',
                query:{
                  // zhanghao: this.zhanhao,
                  // password: this.password,
                  lists: this.imagers
                }
              })
            }else if (response.data.return == "no"){
              alert("用户不存在")
              $("#img1").hide()
              $("#img2").show()
              $("#img3").hide()
              $("#img4").show()
              $("#zhanhao").addClass("zh9")
              $("#zhanhao").removeClass("zh10")
              $("#password").addClass("zh9")
              $("#password").removeClass("zh10")
            }
          }else{
            this.$message({message: '密码不能为空', type: 'warning', duration: '2000'});
            $("#img6").show()
            $("#img3").hide()
            $("#password").addClass("zh11")
            $("#password").removeClass("zh10")
            document.getElementById("text2").innerHTML = "请输入用密码";
          }
        }else{
          setTimeout("",500)
          this.$message({message: '账号不能为空', type: 'warning', duration: '2000'});
          $("#img5").show()
          $("#img1").hide()
          $("#zhanhao").addClass("zh11")
          $("#zhanhao").removeClass("zh10")
          document.getElementById("text1").innerHTML = "请输入用户名";
        }
      })
    }
  }
}
</script>

<style scoped>
.zh11{
  background-color: #f7e287;
}
.zh10{
  background-color: #b1e7c7;
}
#text1{
  color: red;
  position: relative;
  font-size: 12px;
  top: -20px;
  left: 14px;
  font-family: cursive;
}
#text2{
  color: red;
  position: relative;
  font-size: 12px;
  top: -20px;
  left: 14px;
  font-family: cursive;
}
.zh9{
  background-color: #f3c7c9;
}
.imgs3{
  position: relative;
  width: 15px;
  height: 15px;
  left: 350px;
  top: -35px;
}
.bodys1{
  width: auto;
  height: 721px;
  background-color: #525f78;
  padding-top: 9.5%;
}
.bodys2{
  width: 500px;
  height: 435px;
  background-color: #fff;
  margin: 0 auto;
}
.bodys3{
  width: 500px;
  height: 115px;
  background-color: #6f94cd;
  padding-top: 15px;
}
.bodys4{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;
}
.bodys4>img{
  /*display: block;*/
  width: 46px;
  height: 46px;
  /*transition: all 1s;!*延时*!*/
  margin-top: 10px;
  margin-top: 10px;
  margin-left: 1px;
}
.bodys4>img:hover{
  /*transform: scale(1.4);!*放大倍数为1.4倍*!*/
}
.bodys5{
  width: 500px;
  height: 29px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  margin-top: 5px;
  font-family: cursive;
}
.bodys6{
  width: 450px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
}
.bodys7{
  box-shadow: #d8f0f5 0px 0px 18px inset;
  width: 50px;
  height: 50px;
  float: left;
  border-radius: 20px;
  padding-left: 7.5px;
  padding-top: 7.5px;
}
.bodys8{
  width: 400px;
  height: 50px;
  float: left;
}
.bodys8>input{
  width: 380px;
  height: 39px;
  border: 0px;
  border-bottom: 1px solid #000;
  font-size: 12px;
  padding-left: 20px;
  margin-left: 15px;
  outline: none;
}
.bodys9{
  width: 300px;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
}
.bodys9>#submits{
  width: 300px;
  height: 45px;
  border-radius: 4px;
  outline: none;
  font-size: 17px;
  font-family: cursive;
  background-color: #253046;
  color: #fff;
  border: 0px;
}
.bodys10{
  width: 500px;
  height: 100px;
  margin-top: 20px;
}
.bodys10>.divs1{
  width: 125px;
  height: 100px;
  float: left;
}
.bodys10>.divs1>a>img{
  width: 40px;
  height: 38px;
  margin-left: 42px;
  margin-top: 31px;
}
.divs2{
  box-shadow: #d8f0f5 0px 0px 30px inset;
  border-radius: 5px;
}
</style>
