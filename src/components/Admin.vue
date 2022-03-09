<template>
  <div style="background-image: url('static/images/beijing-im3.jpg');background-size: 100% 100%;background-repeat: no-repeat;width: 100%;height: 721px;">
    <div class="div-s1" id="div1">
      <form class="opp1">
        <p class="i-p1">
          <span>账&nbsp;&nbsp;号：</span><input id="zhanhao" type="text" class="i-text" v-model="zhanhao" placeholder="请输入账号"></input><br><br><br>
          <span>密&nbsp;&nbsp;码：</span><input id="password" type="password" class="i-text" v-model="password" placeholder="请输入密码"></input>
        </p>
        <div class="div-s2">
          <button id="input-button1" v-on:click="login($data)" type="submit">登录</button>
        </div>
        <img id="css-img1" class="ico-img1" style="display: none;" src="static/images/dagoico.png"/>
        <img id="css-img2" class="ico-img2" style="display: none;" src="static/images/jinggaoico.png"/>
        <img id="css-img3" class="ico-img3" style="display: none;" src="static/images/dagoico.png"/>
        <img id="css-img4" class="ico-img4" style="display: none;" src="static/images/jinggaoico.png"/>
      </form>
    </div>


    <div class="div-s3" id="div2" style="display: none;">
      <form class="opp2">
        <p class="i-p1">
          <span style="color: #000;">用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;戶&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input id="name2" type="text" class="i-text2" placeholder="请输入用戶名"></input><br><br>
          <span style="color: #000;">郵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span><input id="emit" type="text" class="i-text2" placeholder="请输入郵箱"></input><br><br>
          <span style="color: #000;">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;稱：</span><input id="names" type="text" class="i-text2" placeholder="请输入昵稱"></input><br><br>
          <span style="color: #000;">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input id="password2" type="password" class="i-text2" placeholder="请输入密码"></input><br><br>
          <span style="color: #000;">確&nbsp;&nbsp;認&nbsp;&nbsp;密&nbsp;&nbsp;码：</span><input id="password3" type="password" class="i-text2" placeholder="请输入確認密码"></input><br><br>
          <span style="color: #000;">驗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;證&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;碼：</span><input id="yzm" type="text" class="i-text2" placeholder="请输入驗證碼"></input><br><br>
        </p>
        <div class="div-s2">
          <button id="input-button2" type="submit">注冊</button>
        </div>
      </form>
    </div>


    <div id="divs1" class="div1">
      <img src="static/images/shucai1.png" id="iop1" style="display: none;" class="iop-img"/>
      <img src="static/images/shucai2.png" id="iop2" class="iop-img2"/>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
$(function() {
  $("#iop2").click(function () {
    $("#div1").hide()
    $("#div2").show()
    $("#divs1").css({"background-color":"#DFDBD8","top":"77px","height":"605px"})
  })
  $("#iop1").click(function () {
    $("#div2").hide()
    $("#div1").show()
    $("#divs1").css({"background-color":"#F6B2B8","top":"180px","height":"388px"})
  })
  $("#iop1").click(function () {
    $("#iop2").show()
    $("#iop1").hide()
    $("#divs1").css({"background-color":"#F6B2B8","top":"180px","height":"388px"})
  })
  $("#iop2").click(function () {
    $("#iop1").show()
    $("#iop2").hide()
    $("#divs1").css({"background-color":"#DFDBD8","top":"77px","height":"605px"})
  })
  $("#input-button1").click(function () {

    //获取用户输入的用户名
    var username = $("#zhanhao").val();
    var password = $("#password").val()
    if(username != '' && password != ''){
      setTimeout("alert('登录成功')",1000)
      // alert("登陆成功")
      if(username != ''){
        // alert("用户名有值")
        $("#zhanhao").css("border-color","#0e932e")
        $("#css-img2").hide()
        $("#css-img1").show()
      }else{
        setTimeout("alert('用户名不能为空')",500)
        $("#zhanhao").css("border-color","#f4ea2a")
        $("#css-img2").show()
        $("#css-img1").hide()
      }
      if(password != ''){
        // alert("密码有值")
        $("#password").css("border-color","#0e932e")
        $("#css-img3").show()
        $("#css-img4").hide()
      }else{
        setTimeout("alert('密码不能为空')",500)
        $("#password").css("border-color","#f4ea2a")
        $("#css-img4").show()
        $("#css-img3").hide()
      }

    }else {
      setTimeout("alert('登陆失败')",1000)
      if(username != ''){
        // alert("用户名有值")
        $("#zhanhao").css("border-color","#0e932e")
        $("#css-img2").hide()
        $("#css-img1").show()
      }else{
        setTimeout("alert('用户名不能为空')",500)
        $("#zhanhao").css("border-color","#f4ea2a")
        $("#css-img2").show()
        $("#css-img1").hide()
      }
      if(password != ''){
        // alert("密码有值")
        $("#password").css("border-color","#0e932e")
        $("#css-img3").show()
        $("#css-img4").hide()
      }else{
        setTimeout("alert('密码不能为空')",500)
        $("#password").css("border-color","#f4ea2a")
        $("#css-img4").show()
        $("#css-img3").hide()
      }
    }
  })
})
export default {
  name: "Admin",
  data(){
    return{
      zhanhao:'',
      password:'',
      lists:'',
      name:'',
      ztais:'',
      vip:'',
    }
  },
  methods:{
    login(form){
      let params = {"zhanhao":form.zhanhao,"password":form.password}
      this.$axios.get('http://localhost:8080/userlists',{params}).then((response)=>{
        if(response.data.ztai == "管理员"){
          this.lists = response.data.list.img;
          this.name = response.data.list.name;
          this.ztais = response.data.list.ztai;
          alert("管理员登录成功")
          this.$router.push({
            path: '/user',
            name: 'User',
            query: {
              zhanhao: this.zhanhao,
              list: this.lists,
              name: this.name,
              ztai: this.ztais
            }
          })
        }
        if(response.data.ztai == "普通用户"){
          this.lists = response.data.list.img;
          this.name = response.data.list.name;
          this.ztais = response.data.list.ztai;
          this.vip = response.data.list.vip;
          alert("用户登录成功")
          this.$router.push({
            path: '/body',
            name: 'Body',
            query: {
              zhanhao: this.zhanhao,
              list: this.lists,
              name: this.name,
              ztai: this.ztais,
              vip: this.vip,
            }
          })
        }
        if(response.data.ztai == "高级经理"){
          this.lists = response.data.list.img;
          this.name = response.data.list.name;
          this.ztais = response.data.list.ztai;
          this.vip = response.data.list.vip;
          alert("经理登录成功")
          this.$router.push({
            path: '/body',
            name: 'Body',
            query: {
              zhanhao: this.zhanhao,
              list: this.lists,
              name: this.name,
              ztai: this.ztais,
              vip: this.vip,
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.opp1{
  width: 500px;
  border: 1px solid #fff;
  height: 388px;
  background-color: #fff;
  border-radius: 50px;
  position: fixed;
  top: 180px;
  left: 500px;
}
.opp2{
  width: 500px;
  border: 1px solid #fff;
  height: 605px;
  background-color: #fff;
  border-radius: 50px;
  position: fixed;
  top: 77px;
  left: 500px;
}
.i-p1{
  margin-top: 80px;
  margin-left: 28px;
}
.i-text{
  width: 284px;
  height: 42px;
  border-radius: 50px;
  padding-left: 15px;
  outline: none;
  font-size: 12px;
  border-color: #6e696982;
}
.i-text2{
  width: 222px;
  height: 42px;
  border-radius: 50px;
  padding-left: 15px;
  outline: none;
  font-size: 12px;
  border-color: #6e696982;
}
.ico-img1{
  width: 25px;
  height: 25px;
  position: fixed;
  top: 269px;
  left: 827px;
}
.ico-img2{
  width: 25px;
  height: 25px;
  position: fixed;
  top: 269px;
  left: 827px;
}
.ico-img3{
  width: 25px;
  height: 25px;
  position: fixed;
  top: 359px;
  left: 827px;
}
.ico-img4{
  width: 25px;
  height: 25px;
  position: fixed;
  top: 359px;
  left: 827px;
}
.login{
  width: 106px;
  position: absolute;
  top: 8px;
  left: 0px
}
.div-s2{
  width: 200px;
  height: 49px;
  margin: 0 auto;
  position: fixed;
  left: 592px;
}
#input-button1{
  margin: 0 auto;
  width: 200px;
  height: 49px;
  border-radius: 50px;
  position: fixed;
  left: 587px;
  top: 447px;
  top: 447px;
}
#input-button2{
  margin: 0 auto;
  width: 200px;
  height: 49px;
  border-radius: 50px;
}
.div1{
  position: fixed;
  top: 179px;
  left: 884px;
  width: 117px;
  height: 390px;
  border-radius: 0px 50px 50px 0px;
  background-color: #F6B2B8;
}
.iop-img{
  width: 273px;
  margin-top: 133px;
  position: fixed;
  left: 883px;
}
.iop-img2{
  width: 273px;
  margin-top: 133px;
  position: fixed;
  left: 862px;
}
.iop-img3{
  width: 477px;
  height: 395px;
}
</style>
