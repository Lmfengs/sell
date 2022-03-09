<template>
  <div class="abody">
    <div class="waicengdiv">
      <div class="neicengdiv"></div>
      <span>正在为你加载页面</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Langjiazai"
}
</script>

<style scoped>
/*设置页面的内外边距为0*/
.abody{
  padding: 0;
  margin: 0;
}
.waicengdiv{
  /*绝对定位*/
  position: absolute;
  /*设置外层div的宽度为视口宽度*/
  width: 100vw;
  /*设置外层div的高度为视口高度*/
  height: 100vh;
  /*弹性布局*/
  display: flex;
  /*主轴的对齐方式为居中*/
  justify-content: center;
  /*设置flex容器下的flex子元素的对齐方向为垂直*/
  align-items: center;
  /*背景颜色为黑色*/
  background-color: #000;
}
.neicengdiv{
  /*绝对定位*/
  position: absolute;
  /*设置宽度为150px*/
  width: 150px;
  /*高度为150px*/
  height: 150px;
  /*圆角边框为50%*/
  border-radius: 50%;
  /*弹性布局*/
  display: flex;
  /*主轴的对齐方式为居中*/
  justify-content: center;
  /*设置flex容器下的flex子元素的对齐方向为垂直*/
  align-items: center;
  /*背景渐变色*/
  background: linear-gradient(0deg,
  #4B0082,
  #3A91CF 20%,
  #01FFFF 40%,
  #ffff00 60%,
  #FFA500 80%,
  #FF0000 100%);
  animation: donghua 1s linear infinite;
}
/*before:在被选定的标签之前添加新的内容*/
.neicengdiv:before{
  /*实现在网页中添加内容*/
  content: "";
  /*绝对定位*/
  position: absolute;
  /*设置模糊发光的宽度为150px*/
  width: 100px;
  /*设置模糊发光的高度为150px*/
  height: 100px;
  /*设置模糊发光的的圆角边框为50%*/
  border-radius: 50%;
  /*背景渐变色*/
  background: linear-gradient(0deg,
  #4B0082,
  #3A91CF 20%,
  #01FFFF 40%,
  #ffff00 60%,
  #FFA500 80%,
  #FF0000 100%);
  /*filter(滤镜): blur(高斯模糊);*/
  filter: blur(35px);
  /*弹性布局*/
  display: flex;
  /*主轴的对齐方式为居中*/
  justify-content: center;
  /*设置flex容器下的flex子元素的对齐方向为垂直*/
  align-items: center;
}
/*after:在每个选定的标签之后添加新的内容*/
.neicengdiv:after{
  /*实现在网页中添加内容*/
  content: "";
  /*设置内部黑圈的宽度*/
  width: 120px;
  /*设置内部黑圈的高度*/
  height: 120px;
  /*背景为黑色*/
  background: #000;
  /*绝对定位*/
  position: absolute;
  /*圆角边框*/
  border-radius: 50%;
  /*弹性布局*/
  display: flex;
  /*主轴的对齐方式为居中*/
  justify-content: center;
  /*设置flex容器下的flex子元素的对齐方向为垂直*/
  align-items: center;
}
span{
  color: #e8e5e5;
  position: absolute;
  font-size: 12px;
}
@keyframes donghua {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
