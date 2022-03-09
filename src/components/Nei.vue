<template>
  <div class="body">
    <!--导航栏-->
    <div class="div1">
      <div class="div2"></div>
      <div class="div3"></div>
      <div class="div4"></div>
      <div class="div5"></div>
      <div class="div6"></div>
      <div class="div7"></div>
      <div class="div8"></div>
      <div class="div9"></div>
      <div class="div10"></div>

      <div class="a1"></div>
      <div class="a2">
        <div class="s1"></div>
        <div class="s2"></div>
        <div class="s3"></div>
        <div class="s4"></div>
        <div class="s5">
          <div class="s6">
            <div class="s7"></div>
            <div class="s8"></div>
          </div>
        </div>
        <div class="text1">
          <span><strong>博客</strong></span>
        </div>
      </div>
      <div class="a2">
        <div class="s1"></div>
        <div class="s2"></div>
        <div class="s3"></div>
        <div class="s4"></div>
        <div class="s5">
          <div class="s6">
            <div class="s7"></div>
            <div class="s8"></div>
          </div>
        </div>
        <div class="text1">
          <span><strong>课程</strong></span>
        </div>
      </div>
      <div class="a2">
        <div class="s1"></div>
        <div class="s2"></div>
        <div class="s3"></div>
        <div class="s4"></div>
        <div class="s5">
          <div class="s6">
            <div class="s7"></div>
            <div class="s8"></div>
          </div>
        </div>
        <div class="text1">
          <span><strong>商城</strong></span>
        </div>
      </div>
      <div class="a2">
        <div class="s1"></div>
        <div class="s2"></div>
        <div class="s3"></div>
        <div class="s4"></div>
        <div class="s5">
          <div class="s6">
            <div class="s7"></div>
            <div class="s8"></div>
          </div>
        </div>
        <div class="text1">
          <span><strong>问答</strong></span>
        </div>
      </div>
      <div class="a2">
        <div class="s1"></div>
        <div class="s2"></div>
        <div class="s3"></div>
        <div class="s4"></div>
        <div class="s5">
          <div class="s6">
            <div class="s7"></div>
            <div class="s8"></div>
          </div>
        </div>
        <div class="text1">
          <span><strong>社区</strong></span>
        </div>
      </div>
      <div class="a2">
        <div class="s1"></div>
        <div class="s2"></div>
        <div class="s3"></div>
        <div class="s4"></div>
        <div class="s5">
          <div class="s6">
            <div class="s7"></div>
            <div class="s8"></div>
          </div>
        </div>
        <div class="text1">
          <span><strong>插件</strong></span>
        </div>
      </div>
      <div class="a2">
        <div class="s1"></div>
        <div class="s2"></div>
        <div class="s3"></div>
        <div class="s4"></div>
        <div class="s5">
          <div class="s6">
            <div class="s7"></div>
            <div class="s8"></div>
          </div>
        </div>
        <div class="text1">
          <span><strong>开源</strong></span>
        </div>
      </div>

      <div class="y">
        <div class="li1">
          <div class="li2">
            <input id="text" type="text" placeholder="请输入" />
            <div class="li3">
              <span>搜索</span>
            </div>
          </div>
        </div>
        <div class="li4"></div>
        <div class="li5"></div>
        <div class="li6"></div>
        <div class="y1">
          <div class="y2">
            <div class="y3"></div>
          </div>
        </div>
      </div>


    </div>

    <!--主体-->

  </div>
</template>

<script>
// $(function () {

// })
$(document).ready(function () {
  $(".a2").click(function () {
    // alert("你好")
    $(this).addClass("yu").siblings().removeClass("yu")
  });
  $("#text").focus(function () {
    $(this).css("border","1px solid red")
  })
  $("#text").blur(function () {
    $(this).css("border","1px solid #000")
  })
  $(".li3").mouseover(function () {
    $(".li3>span").addClass("yu2")
  })
  $(".li3").mouseout(function () {
    $(".li3>span").removeClass("yu2")
  })
})
export default {
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.yu{
  background-color: #260b2c;
  text-shadow: 0 0 10px #fff;
}
.yu2{
  /*border: 1px solid #260b2c;*/
  text-shadow: 0 0 10px #fff;
}
.li1{
  width: 20px;
  height: 15px;
  border-top: 3px solid #2995a2;
  border-left: 3px solid #2995a2;
  float: left;
  position: absolute;
}
.li4{
  width: 20px;
  height: 15px;
  border-left: 3px solid #2995a2;
  border-bottom: 3px solid #2995a2;
  float: left;
  position: absolute;
  top: 26.8px;
  left: 616.5px;
}
.li5{
  width: 20px;
  height: 15px;
  border-top: 3px solid #2995a2;
  border-right: 3px solid #2995a2;
  float: left;
  position: absolute;
  left: 887.5px;
  top: 1.5px;
}
.li6{
  width: 20px;
  height: 15px;
  border-right: 3px solid #2995a2;
  border-bottom: 3px solid #2995a2;
  float: left;
  position: absolute;
  left: 887.5px;
  top: 27.5px;
}
.li2{
  border: 4px solid #260b2c;
  width: 372px;
  height: 36px;
}
.li2>input{
  float: left;
  height: 33px;
  position: absolute;
  top: 1px;
  width: 280px;
  outline: none;
  font-size: 12px;
  padding-left: 10px;
}
.li3{
  width: 90px;
  height: 36px;
  background-color: #260b2c;
  float: left;
  position: absolute;
  top: 0px;
  left: 282px;
  padding-left: 23px;
  padding-top: 6px;
}
.li3>span{
  font-width: 700;
  text-align: center;
  background: linear-gradient(to bottom,#08fbff,#79106f);
  -webkit-background-clip: text;
  color: transparent;
}
.y{
  border: 1px solid #d950d4;
  width: 400px;
  height: 44px;
  float: left;
  z-index: 100;
  background-color: #260b2c;
}
/*.y1{*/
/*  border: 2px solid #2995a2;*/
/*  width: 40px;*/
/*  height: 40px;*/
/*  border-radius: 50px;*/
/*  background-color: #000;*/
/*  position: fixed;*/
/*}*/
.y1{
  border: 2px solid #2995a2;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #000;
  box-shadow: 0 0 10px #2995a2,0 0 10px #2995a2 inset;
  animation: se1 1s infinite ease-in-out;
  position: absolute;
  left: 973px;
}
.y2{
  border: 2px dashed #825898;
  width: 30px;
  height: 30px;
  margin-left: 3px;
  margin-top: 3.5px;
  border-radius: 50px;
  background-color: #000;
  /*box-shadow: 0 0 10px #2995a2,0 0 10px #2995a2 inset;*/
  animation: se2 1s infinite ease-in-out;
}
@keyframes se1 {
  0%{-webkit-transform: rotate(0deg);}
  25%{-webkit-transform: rotate(90deg);}
  50%{-webkit-transform: rotate(180deg);}
  75%{-webkit-transform: rotate(270deg);}
  100%{-webkit-transform: rotate(360deg);}
}
@keyframes se2 {
  0%{-webkit-transform: rotate(0deg);}
  25%{-webkit-transform: rotate(90deg);}
  50%{-webkit-transform: rotate(180deg);}
  75%{-webkit-transform: rotate(270deg);}
  100%{-webkit-transform: rotate(360deg);}
}
.y3{
  background: linear-gradient(to bottom,#08fbff,#79106f);
  width: 25px;
  height: 25px;
  border-radius: 50px;
  animation: se2 1s infinite ease-in-out;
  margin-left: 0px;
  margin-top: 0px;
}
.text1{
  background: linear-gradient(to bottom,#08fbff,#79106f);
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  top: -69px;
  left: 19px;
  /*text-shadow: 0 0 20px #fff;*/
}
.s1{
  border-top: 2px solid #68efff;
  border-right: 2px solid #68efff;
  width: 50px;
  height: 15.5px;
  position: relative;
  left: 22px;
  top: 2px;
}
.s2{
  border-top: 4px solid #5ce9ff;
  border-right: 3px solid #5ce9ff;
  width: 35px;
  height: 22px;
  position: relative;
  top: -17px;
  left: 37px;
}
.s3{
  border-right: 3px solid #68efff;
  height: 3px;
  position: relative;
  top: -36px;
  left: -51px;
}
.s4{
  border-right: 3px solid #68efff;
  height: 3px;
  position: relative;
  top: -39px;
  left: -56px;
}
.s5{
  border-left: 2px solid #5e839d;
  height: 33.5px;
  width: 58px;
  border-bottom: 2px solid #5e839d;
  position: relative;
  left: -2px;
  top: -37px;
}
.s6{
  border-left: 2px solid #195162;
  border-bottom: 2px solid #195162;
  width: 35px;
  height: 25px;
  position: relative;
  top: 5px;
}
.s7{
  border-right: 3px solid #68efff;
  height: 3px;
  position: relative;
  top: 12px;
  left: 37px;
}
.s8{
  border-right: 3px solid #68efff;
  height: 3px;
  position: relative;
  top: 15px;
  left: 37px;
}
.body{
  background-color: #000;
  width: 100%;
  height: 1000px;
  padding-bottom: 20px;
  padding-top: 55.5px;
}
.div1{
  width: 100%;
  height: 50px;
  border: 2px solid #362559;
  background-color: #000;
  position: fixed;
  top: 3px;
}
.div2{
  border-top: 4px solid #5aeff3;
  width: 500px;
  border-right: 3px solid #6ae7eb;
  height: 25px;
  position: fixed;
  top: 0px;
  left: 1018px;
}
.div3{
  border-top: 2px solid #5bbbba;
  width: 1300px;
  border-right: 2px solid #5bbbba;
  height: 22px;
  position: fixed;
  top: 3px;
  left: 216px;
}
.div4{
  border-left: 2px solid #55758a;
  height: 30px;
  border-bottom: 2px solid #75b4c5;
  width: 1350px;
  position: fixed;
  top: 22px;
  left: 0px;
}
.div5{
  border-left: 5px solid #5bbbba;
  height: 4px;
  position: fixed;
  top: 1.5px;
  left: 204px;
}
.div6{
  border-left: 4px solid #5bbbba;
  height: 4px;
  position: fixed;
  top: 1.5px;
  left: 197px;
}
.div7{
  border-left: 3px solid #5bbbba;
  height: 4px;
  position: fixed;
  top: 1.5px;
  left: 190px;
}
.div8{
  border-right: 5px solid #5bbbba;
  height: 5px;
  position: fixed;
  left: 1513.5px;
  top: 29px;
}
.div9{
  border-right: 4px solid #5bbbba;
  height: 4px;
  position: fixed;
  left: 1513.5px;
  top: 38px;
}
.div10{
  border-right: 3px solid #5bbbba;
  height: 3px;
  position: fixed;
  left: 1513.5px;
  top: 46px;
}
.a1{
  width: 90px;
  height: 44.5px;
  border: 2px solid #fff;
  float: left;
}
.a2{
  width: 75px;
  height: 44.5px;
  border: 3px solid #a61388;
  float: left;
}

</style>
