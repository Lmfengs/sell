<template>
  <div>
    <img src="static/images/beijing-im2.jpg" width="100%" height="721px">
    <img class="login" src="static/images/Logo.png"/>
    <div class="div-s1" id="div1">
      <form>
        <p class="i-p1">
          <span>账号：</span><input id="zhanhao" type="text" class="i-text" v-model="zhanhao" placeholder="请输入账号"></input><br><br><br>
          <span>密码：</span><input id="password" type="password" class="i-text" v-model="password" placeholder="请输入密码"></input>
        </p>
      </form>
      <div class="div-s2">
        <button id="input-button1" v-on:click="login($data)" type="submit">登录</button>
      </div>
    </div>
    <img id="css-img1" style="display: none;" src="static/images/dagoico.png"/>
    <img id="css-img2" style="display: none;" src="static/images/jinggaoico.png"/>
    <img id="css-img3" style="display: none;" src="static/images/dagoico.png"/>
    <img id="css-img4" style="display: none;" src="static/images/jinggaoico.png"/>
    <img src="static/images/shucai1.png" id="iop1" style="display: none;" class="iop-img"/>
    <img src="static/images/shucai2.png" id="iop2" class="iop-img2"/>
    <img src="static/images/hueihua1.png" style="display: none;" id="iop3" class="iop-img3" />
    <div class="div-s3" id="div2" style="display: none;">
      <p class="i-p1">
        <span style="color: #000;">用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;戶&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><input id="name2" type="text" class="i-text" placeholder="请输入用戶名"></input><br><br>
        <span style="color: #000;">郵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span><input id="emit" type="text" class="i-text" placeholder="请输入郵箱"></input><br><br>
        <span style="color: #000;">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;稱：</span><input id="names" type="text" class="i-text" placeholder="请输入昵稱"></input><br><br>
        <span style="color: #000;">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input id="password2" type="password" class="i-text" placeholder="请输入密码"></input><br><br>
        <span style="color: #000;">確&nbsp;&nbsp;認&nbsp;&nbsp;密&nbsp;&nbsp;码：</span><input id="password3" type="password" class="i-text" placeholder="请输入確認密码"></input><br><br>
        <span style="color: #000;">驗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;證&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;碼：</span><input id="yzm" type="text" class="i-text" placeholder="请输入驗證碼"></input><br><br>
      </p>
      <div class="div-s2">
        <button id="input-button2" type="submit">注冊</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
$(function(){
  $("#iop2").click(function () {
    $("#div1").hide()
    $("#div2").show()
  })
  $("#iop1").click(function () {
    $("#div2").hide()
    $("#div1").show()
  })
  $("#iop1").click(function () {
    $("#iop2").show()
    $("#iop1").hide()
  })
  $("#iop2").click(function () {
    $("#iop1").show()
    $("#iop2").hide()
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

  })$("#input-button1").click(function () {

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
  data() {
    return {
      zhanhao:'',
      password:''
    }
  },
  methods:{
    login(form){
      let params = {"zhanhao":form.zhanhao,"password":form.password}
      this.$axios.get('http://localhost:8080/userlists',params).then((response)=>{
        if(response.data == "yes"){
          alert("登陸成功")
        }else{
          alert("登錄失敗")
        }
      })
      // let params={"zhanhao":zhanhao,
      //             "password":password};
      // this.$axios.get('http://localhost:8080/userlists',params).then((response) => {
      //   if(response.data == "yes"){
      //     alert("登錄成功")
      //   }else{
      //     alert("失敗")
      //   }
      //
      // })
    }
  }
}
</script>

<style>
  .div-s1 {
    width: 500px;
    border: 1px solid #fff;
    height: 388px;
    position: absolute;
    top: 1px;
    background-color: #fff;
    /*opacity: 0.7;*/
    margin-left: 522px;
    border-radius: 50px;
    margin-top: 16%;
  }
  .div-s3 {
    width: 600px;
    border: 1px solid #fff;
    height: 600px;
    position: absolute;
    top: -145px;
    background-color: #fff;
    /*opacity: 0.7;*/
    margin-left: 422px;
    border-radius: 50px;
    margin-top: 16%;
  }
  .i-p1{
    margin-top: 80px;
    margin-left: 60px;
  }
  .i-text{
    width: 316px;
    height: 42px;
    border-radius: 50px;
    padding-left: 15px;
    outline: none;
    font-size: 12px;
    border-color: #6e696982;
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
  }
  #input-button1{
    margin: 0 auto;
    width: 200px;
    height: 49px;
    border-radius: 50px;
  }
  #input-button2{
    margin: 0 auto;
    width: 200px;
    height: 49px;
    border-radius: 50px;
  }
  #css-img1{
    position: absolute;
    top: 334px;
    left: 900px;
    width: 25px;
  }
  #css-img2{
    position: absolute;
    top: 334px;
    left: 900px;
    width: 25px;
  }
  #css-img3{
    position: absolute;
    top: 423px;
    left: 900px;
    width: 25px;
  }
  #css-img4{
    position: absolute;
    top: 423px;
    left: 900px;
    width: 25px;
  }
  .iop-img{
    position: absolute;
    top: 350px;
    left: 1022px;
    width: 273px;
  }
  .iop-img2{
    position: absolute;
    top: 350px;
    left: 1001px;
    width: 273px;
  }
  .iop-img3{
    width: 477px;
    position: absolute;
    top: 197px;
    height: 395px;
    left: 881px;
  }
</style>
