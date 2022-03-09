<template>
  <div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;">
    <img src="static/images/LBRdTRCMRO_small.png" style="width: 100vw;height: 100vh;">
    <div style="width: 900px;height: 550px;display: flex;flex-direction: column;align-items: center;position: absolute">
      <div style="width: 900px;height: 200px;display: flex;flex-direction: row;justify-content: center;align-items: center;">
        <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
      </div>
      <div style="width: 900px;height: 550px;background-color: #fff;display: flex;justify-content: flex-start;flex-direction: row;opacity: 0.8;border-radius: 20px;padding-top: 20px;padding-bottom: 20px;">
        <img src="static/images/gongju.jpg" width="500px" style="border-radius: 20px 0px 0px 20px;" />
        <div style="width: 22px;height: 100px;display: flex;flex-direction: column;align-items: center;">
          <div class="zh2">
            <span>&nbsp;&nbsp;用户名：</span><input @keyup="getzhanghao()" class="input" type="text" id="zhanghaoname" v-model="zhanhao" placeholder="请输入用户名" /><span class="zhuce1" id="zhanhao">{{msg1}}</span>
          </div>
          <div class="zh2">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;密码：</span><input @keyup="getpasswords()" class="input" id="passwordlist" type="password" v-model="password" placeholder="请输入密码" /><span class="zhuce1" id="password">{{msg2}}</span>
          </div>
          <div class="zh2">
            <span>确认密码：</span><input id="quenrenmima" @keyup="getquerenpassword" v-model="qrpassword" class="input" type="password" placeholder="请再次输入密码" /><span id="zhuce1" class="zhuce1">{{msg3}}</span>
          </div>
          <div class="zh2">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;QQ号：</span><input id="qqx" @keyup="getqq()" class="input" v-model="qq" type="text" placeholder="请输入QQ号" /><span class="zhuce1" id="qq">{{msg4}}</span>
          </div>
          <div class="zh2">
            <span>真实姓名：</span><input id="zhenshiname" class="input" @keyup="getzhenshixm()" v-model="name" type="text" placeholder="请输入你的真实名字" /><span class="zhuce1" id="name">{{msg5}}</span>
          </div>
          <div class="zh2">
            <span>&nbsp;&nbsp;身份证：</span><input id="shengfenzheng" class="input" @keyup="getshengfenzheng()" v-model="sfz" type="text" placeholder="请输入你的身份证" /><span class="zhuce1" id="sfz">{{msg6}}</span>
          </div>
          <div class="zh2">
            <span>&nbsp;&nbsp;验证码：</span><input id="yanzhengma" @keyup="getyanzhengma()" class="input" type="text" placeholder="请输入验证码" />
          </div>
          <div class="zh8">
            <div class="zh3"><button style="border: 0px;" type="submit" class="zh3" @click="oninsert"><span>立即注册</span></button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zhucemk",
  data(){
    return{
      zhanhao:'',
      password:'',
      qq:'',
      name:'',
      sfz:'',
      qrpassword:'',
      active: 0,
      percentage: 0,
      colors: [
        {color: "#282828", percentage: 0},
        {color: '#f56c6c', percentage: 20},
        {color: '#e6a23c', percentage: 40},
        {color: '#6f7ad3', percentage: 60},
        {color: '#1989fa', percentage: 80},
        {color: '#5cb87a', percentage: 100}
      ],
      zhanghaonamelist:'',
      passwordnamelist:'',
      querenpasswords:'',
      qqslist:'',
      zhengshixingmingname:'',
      shengfwnzhengs:'',
      yanzhengmas:'',
      msg1:'',
      msg2:'',
      msg3:'',
      msg4:'',
      msg5:'',
      msg6:'',
    }
  },
  created() {
  },
  methods:{
    getzhanghao(){
      var zhanghao = $("#zhanghaoname").val()
      if(zhanghao != null && zhanghao != ""){
        this.zhanghaonamelist = 14.4;
        // this.percentage = 14.28;
      }else{
        this.zhanghaonamelist = 0;
        // this.percentage -= 14.28
      }
      this.percentage = this.zhanghaonamelist + this.passwordnamelist + this.querenpasswords + this.qqslist + this.zhengshixingmingname + this.shengfwnzhengs + this.yanzhengmas;
      if(this.percentage > 100){
        this.percentage = 100
      }
    },
    getpasswords(){
      var password = $("#passwordlist").val()
      if(password != null && password != ""){
        this.passwordnamelist = 14.4;
      }else{
        this.passwordnamelist = 0;
      }
      this.percentage = this.zhanghaonamelist + this.passwordnamelist + this.querenpasswords + this.qqslist + this.zhengshixingmingname + this.shengfwnzhengs + this.yanzhengmas;
      if(this.percentage > 100){
        this.percentage = 100
      }
    },
    getquerenpassword(){
      var quenremmima = $("#quenrenmima").val()
      if(quenremmima != null && quenremmima != ""){
        this.querenpasswords = 14.4;
        // this.percentage = 14.28;
      }else{
        this.querenpasswords = 0;
        // this.percentage -= 14.28
      }
      this.percentage = this.zhanghaonamelist + this.passwordnamelist + this.querenpasswords + this.qqslist + this.zhengshixingmingname + this.shengfwnzhengs + this.yanzhengmas;
      if(this.percentage > 100){
        this.percentage = 100
      }
    },
    getqq(){
      var qqs = $("#qqx").val()
      if(qqs != null && qqs != ""){
        this.qqslist = 14.4;
      }else{
        this.qqslist = 0;
      }
      this.percentage = this.zhanghaonamelist + this.passwordnamelist + this.querenpasswords + this.qqslist + this.zhengshixingmingname + this.shengfwnzhengs + this.yanzhengmas;
      if(this.percentage > 100){
        this.percentage = 100
      }
    },
    getzhenshixm(){
      var zhengshixingming = $("#zhenshiname").val()
      if(zhengshixingming != null && zhengshixingming != ""){
        this.zhengshixingmingname = 14.4;
        // this.percentage = 14.28;
      }else{
        this.zhengshixingmingname = 0;
        // this.percentage -= 14.28
      }
      this.percentage = this.zhanghaonamelist + this.passwordnamelist + this.querenpasswords + this.qqslist + this.zhengshixingmingname + this.shengfwnzhengs + this.yanzhengmas;
      if(this.percentage > 100){
        this.percentage = 100
      }
    },
    getshengfenzheng(){
      var shengfenzhengs = $("#shengfenzheng").val()
      if(shengfenzhengs != null && shengfenzhengs != ""){
        this.shengfwnzhengs = 14.4;
      }else{
        this.shengfwnzhengs = 0;
      }
      this.percentage = this.zhanghaonamelist + this.passwordnamelist + this.querenpasswords + this.qqslist + this.zhengshixingmingname + this.shengfwnzhengs + this.yanzhengmas;
      if(this.percentage > 100){
        this.percentage = 100
      }
    },
    getyanzhengma(){
      var yanzhengmas = $("#yanzhengma").val()
      if(yanzhengmas != null && yanzhengmas != ""){
        this.yanzhengmas = 14.4;
        // this.percentage = 14.28;
      }else{
        this.yanzhengmas = 0;
        // this.percentage -= 14.28
      }
      this.percentage = this.zhanghaonamelist + this.passwordnamelist + this.querenpasswords + this.qqslist + this.zhengshixingmingname + this.shengfwnzhengs + this.yanzhengmas;
      if(this.percentage > 100){
        this.percentage = 100
      }
    },
    oninsert(){
      let params = {
                    zhanhao:this.zhanhao,
                    password:this.password,
                    qq:this.qq,
                    name:this.name,
                    sfz:this.sfz}
      this.$axios.get('http://localhost:8080/getinsert.com', {params}).then((response)=>{
        // if (response.data.return == 'yes'){
        //   alert("添加成功！")
        // }else if(response.data.return == 'no'){
        //   alert("添加失败!")
        // }
        if(this.zhanhao != null && this.zhanhao != ""){
          // this.$message({
          //   message: '账号有值',
          //   type: 'success',
          //   offset: 10
          // });
          this.msg1 = "有值"
          $("#zhanhao").css("color","#5CB87A")
          if(this.password != null && this.password != ""){
            // this.$message({
            //   message: '密码有值',
            //   type: 'success',
            //   offset: 10
            // });
            this.msg2 = "有值"
            $("#password").css("color","#5CB87A")
           if(this.qrpassword != null && this.qrpassword != ""){
             var pw = $("#passwordlist").val();
             var qrpw = $("#quenrenmima").val();
             if(qrpw != pw){
               this.msg3 = "密码不一致";
               $("#zhuce1").css("color","red")
             }else{
               // this.$message({
               //   message: '密码一致',
               //   type: 'success',
               //   offset: 10
               // });
               this.msg3 = "密码一致";
               $("#zhuce1").css("color","#5CB87A")
               if(this.qq != null && this.qq != ""){
                 this.msg4 = "有值"
                 $("#qq").css("color","#5CB87A")
                 if(this.name != null && this.name != ""){
                   this.msg5 = "有值"
                   $("#name").css("color","#5CB87A")
                   if(this.sfz != null && this.sfz != ""){
                     this.msg6 = "有值"
                     $("#sfz").css("color","#5CB87A")
                   }else{
                     // this.$message({
                     //   message: '身份证不能为空',
                     //   type: 'warning',
                     //   offset: 10
                     // });
                     this.msg6 = "身份证不能为空"
                     $("#sfz").css("color","red")
                   }
                 }else{
                   // this.$message({
                   //   message: '真实姓名不能为空',
                   //   type: 'warning',
                   //   offset: 10
                   // });
                   this.msg5 = "真实姓名不能为空"
                   $("#name").css("color","red")
                 }
               }else{
                 // this.$message({
                 //   message: 'qq不能为空',
                 //   type: 'warning',
                 //   offset: 10
                 // });
                 this.msg4 = "qq不能为空"
                 $("#qq").css("color","red")
               }
             }
             this.msg3 = "有值"
             $("#password").css("color","#5CB87A")
           }else{
             // this.$message({
             //   message: '确认密码不能为空',
             //   type: 'warning',
             //   offset: 10
             // });
             this.msg3 = "确认密码不能为空"
             $("#zhuce1").css("color","red")
           }
          }else{
            // this.$message({
            //   message: '密码不能为空',
            //   type: 'warning',
            //   offset: 10
            // });
            this.msg2 = "密码不能为空"
            $("#password").css("color","red")
          }
        }else{
          // this.$message({
          //   message: '账号不能为空',
          //   type: 'warning',
          //   offset: 10
          // });
          this.msg1 = "账号不能为空"
          $("#zhanhao").css("color","red")
        }
      })
    }
  }
}
</script>

<style scoped>
.el-progress__text{
  color: #fff;
}
.ziti{
  padding-left: 20px;
  color: #e1dede;
}
.bodys1{
  width: auto;
  height: 721px;
  background-color: #525f78;
  padding-top: 4.5%;
}
.zhuce1{
  font-size: 12px;
  font-weight: 100;
  margin-left: 20px;
}
.zh1{
  width: 500px;
  height: 600px;
  margin: 0 auto;
  background-color: #9cadc7;
  padding-top: 10px;
}
.zh2{
  width: 620px;
  height: 35px;
  margin-top: 10px;
  font-size: 14px;
  font-family: cursive;
  padding-left: 20px;
  font-weight: 700;
}
.zh2>.input{
  width: 325px;
  height: 35px;
  padding-left: 10px;
  border: 0.5px solid #000;
  outline: none;
  background-color: #fff;
  border: 0px;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 0.1rem;
}
.zh3{
  width: 325px;
  height: 35px;
  background-color: #455976;
  border: 0px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 34.5px;
  outline: none;
}
.zh4{
  width: 500px;
  height: 35px;
}
.zh5{
  width: 35px;
  height: 35px;
  margin: 0 auto;
}
.zh6{
  width: 250px;
  height: 35px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  font-size: 16px;
  font-family: cursive;
}
.zh7{
  margin: 0px auto;
  color: #424040;
  width: 142px;
  line-height: 34px;
  height: 35px;
  font-weight: 700;
}
.zh8{
  width: 440px;
  height: 35px;
  margin-top: 15px;
  font-size: 14px;
  font-family: cursive;
  font-weight: 700;
  color: #fff;
  border-radius: 10px;
}
</style>
