<template>
  <div class="zhuti">
    <div class="mok1">
      <el-carousel trigger="click" width="100%" height="500px">
        <el-carousel-item v-for="(item,index) in lengbolist" :key="index">
          <img :src="item.lbimg" style="width: 100%;height: 500px;" class="l1">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 功能模块 -->
    <div class="zhuti1">
      <div class="xs5">
        <div class="xs2" style="background-color: #8D4F40">
          <div class="xs3"><span>Java</span></div>
          <div class="xs4"><img src="static/images/Java1.jpg"></div>
          <div class="yu1"></div>
        </div>
      </div>
      <div class="xs5">
        <div class="xs2" style="background-color: #175440">
          <div class="xs3"><span>Java</span></div>
          <div class="xs4"><img src="static/images/CSS.jpg"></div>
          <div class="yu1"></div>
        </div>
      </div>
      <div class="xs5">
        <div class="xs2" style="background-color: #F9DF65">
          <div class="xs3"><span>Java</span></div>
          <div class="xs4"><img src="static/images/bangong.jpg"></div>
          <div class="yu1"></div>
        </div>
      </div>
      <div class="xs5">
        <div class="xs2" style="background-color: #99A9E0">
          <div class="xs3"><span>Java</span></div>
          <div class="xs4"><img src="static/images/qianduan.jpg"></div>
          <div class="yu1"></div>
        </div>
      </div>
      <div class="xs5">
        <div class="xs2" style="background-color: #C34638">
          <div class="xs3"><span>Java</span></div>
          <div class="xs4"><img src="static/images/jihe1.jpg"></div>
          <div class="yu1"></div>
        </div>
      </div>
      <div class="xs5">
        <div class="xs2" style="background-color: #36271A">
          <div class="xs3"><span>Java</span></div>
          <div class="xs4"><img src="static/images/C++.jpg"></div>
          <div class="yu1"></div>
        </div>
      </div>
      <div class="xs5">
        <div class="xs2" style="background-color: #C0A077">
          <div class="xs3"><span>Java</span></div>
          <div class="xs4"><img src="static/images/bangong1.jpg"></div>
          <div class="yu1"></div>
        </div>
      </div>
      <div class="xs5">
        <div class="xs2" style="background-color: #8D4F40">
          <div class="xs3"><span>Java</span></div>
          <div class="xs4"><img src="static/images/Java1.jpg"></div>
          <div class="yu1"></div>
        </div>
      </div>
    </div>
    <!-- 头条和广告模块 -->
    <div class="xs6">
      <div class="xs7">
        <div class="aihao3">
          <img src="static/images/totia.png"><span class="dabiao">每日头条</span>
        </div>
        <div class="aihao1" v-for="(item,index) in tablelist" :key="index" v-if="index<1">
          <div class="aihao4">
            <img :src="item.timg" class="totiaoimg">
          </div>
          <div class="aihao5">
            <span>{{item.ttitle}}</span>
          </div>
          <div class="aihao6">
            <span>{{item.ttext}}</span>
          </div>
        </div>
        <div class="aihao2">
          <div class="aihao7">
            <div class="aihao8">
              <div class="aihao10" v-for="(item,index) in tablelist" :key="item.index">
                <div class="aihao11">
                  <span>{{item.ttitle}}</span>
                </div>
                <div class="aihao12">
                  <span>{{item.ttext}}</span>
                </div>
              </div>
            </div>
            <div class="aihao9">
              <el-pagination
                background
                layout="total, prev, pager, next"
                style="padding-left: 108px;"
                :total="page.totalCount"
                :current-page="page.currPageNo"
                :page-size="page.pageSize"
                @current-change="handleCurrentchange">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
      <div class="xss8">
        <div class="block">
          <div class="demonstration"><img src="static/images/AD.png" class="imgs"><span class="dabiao">广告</span></div>
          <el-carousel trigger="click" width="100%" height="500px">
            <el-carousel-item v-for="item in guangaodata" :key="item.index">
              <div class="xss9">
                <span v-if="false">{{item.gid}}</span>
                <span>{{item.gname}}</span>
                <img src="static/images/sanchu.png" width="20px" height="20px" @click="ondelete(item)">
              </div>
              <img :src="item.gimg" style="width: 100%;height: 466px;">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- 推荐模块 -->
    <div class="aihao13">
      <div class="aihao14">
      </div>
      <div class="aihao15">
        <div class="ds1">
          <div class="li">
            <div class="yu2">
              <img src="static/images/jinengshu.png">
            </div>
            <div class="yu3">
              <span>CSDN 技能树</span>
            </div>
          </div>
          <div class="li">
            <div class="yu2">
              <img src="static/images/zishu.png">
            </div>
            <div class="yu3">
              <span>CSDN 指数</span>
            </div>
          </div>
          <div class="li">
            <div class="yu2">
              <img src="static/images/liexi.png">
            </div>
            <div class="yu3">
              <span>每日一练</span>
            </div>
          </div>
        </div>
        <div class="ds2">
          <div class="li1">
            <div class="pyth1"><img src="static/images/zhibo.png" class="phty2" /><span class="phty3">直播</span></div>
            <div class="pyth5"><span class="phty4">更多</span><img src="static/images/youjianto.png"></div>
          </div>
          <div class="li2">
            <div class="li3" v-for="item in shiping" :key="item">
              <div class="ol1">
                <img :src="item.sptb" class="op">
                <img :src="item.spimg">
                <div class="op1"><span>{{item.sptext}}</span></div>
                <div class="op2">
                  <img :src="item.spbf" style="display: block">
                </div>
              </div>
              <div class="ol2">
                <div class="ol3">
                  <span>{{item.spneirong}}</span>
                </div>
                <div class="ol4">
                  <span>{{item.spdate}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$(document).ready(function () {
  $("#sanchu").click(function () {
    $(".kozao1").hide()
  })
  $("#texts1").click(function () {
    $(".kozao1").show()
  })
  $(".kozao13").mouseover(function () {
    $(".kozao14").eq($(".kozao13").index(this)).show()
    $(".kozao9").hide()
    $(this).css({"background-color":"#000","color":"#fff"})
  })
  $(".kozao13").mouseout(function () {
    $(".kozao14").eq($(".kozao13").index(this)).hide()
    // $(".kozao14").eq($(".kozao13").index(this)).show()
    $(".kozao9").show()
    $(this).css({"background-color":"#fff","color":"#000"})
  })
  // $(".kozao13").mouseover(function () {
  //   $(this).css({"background-color":"#000","color":"#fff"})
  // })

  $(".tongtong1").mouseover(function () {
    // $(".vues4").eq($(".ls2").index(this)).siblings().show()
    $(this).css({"background-color":"red","color":"#fff"}).siblings().css({"background-color":"#fff","color":"#000"})
    // alert("你好")
  })
  $(".ls2").mouseout(function () {
    $(".ls1").css({"width":"100%","float":"left"})
  })


  $("#texts1").focus(function () {
    $(".vues2").fadeIn(1000);
  })
  $("#texts1").bind(function () {
    $(".vues2").fadeOut(1000);
  })
  // var l = document.getElementById(mok1)
  // $(l).mouseover(function () {
  //   $(this).css({"width":"50%","background-color":"red"}).siblings().css({"width":"100%","background-color":"#fff"});
  // })
  $(".iem7").click(function () {
    $(".iem10").show()
  })
  $(".iem18").click(function () {
    $(".iem10").hide()
  })
  // $(".hade2>.xs1").click(function () {
  //   $(".iem1").show()
  // })
  // $(".hade2>.xs1").mouseout(function () {
  //   $(".iem1").hide()
  // })
  $("#moks1").mouseover(function () {
    $(this).css({"background-color":"red","color":"#fff"})
  })

  $(".divx3").click(function () {
    $(this).addClass("divx10").siblings().removeClass("divx10")
  })

  $("#texts1").bind(function () {
    $(".vues2").fadeOut(1000);
  })
  $(".hade2>.xs1").click(function () {
    $(this).css({"background-color":"#96acc5","color":"#fff"}).siblings().css({"background-color":"#fff","color":"#849fbd"})
  })
  $(".hade3>.xs1").click(function () {
    $(this).css({"background-color":"#96acc5","color":"#fff"}).siblings().css({"background-color":"#fff","color":"#849fbd"})
  })
  $(".aihao10").mouseover(function () {
    $(this).css({"background-color":"#5C6A7E","color":"#fff"}).siblings().css({"background-color":"#fff","color":"#000"})
  })
  $(".aihao10").mouseout(function () {
    $(this).css({"background-color":"#fff","color":"#000"})
  })
  $(".xs2").mouseover(function () {
    $(".xs2>.yu1").eq($(".xs2").index(this)).show()
  })
  $(".xs2").mouseout(function () {
    $(".xs2>.yu1").eq($(".xs2").index(this)).hide()
  })
  $(".li3>.ol1").mouseover(function () {
    $(".ds2>.li2>.li3>.ol1>.op2").eq($(".li3>.ol1").index(this)).show()
  })
  $(".li3>.ol1").mouseout(function () {
    $(".ds2>.li2>.li3>.ol1>.op2").eq($(".li3>.ol1").index(this)).hide()
  })
  $("#iu").click(function () {
    $(".men1").show()
  })
})
export default {
  name: "shouye",
  data() {
    return {
      drawer: false,
      innerDrawer: false,
      guangaodata:'',
      tablelist:'',
      shiping:'',
      texts:'',
      textlists1:'',
      datatextslist:'',
      href:'',
      ico:'',
      Id:'',
      wenjianlist:'',
      names:'',
      wjnamelists:'',
      imglist:'',
      titlename:'',
      wjlist:'',
      textlistss:'',
      valueslist:'',
      leixing:'',
      data:'',
      daxiao:'',
      bianhao:'',
      valuesai:'',
      huoqu:'',
      lengbolist:'',
    };
  },
  created() {
    this.getguanggao();
    this.lodaData();
    this.getshiping();
    this.getwjlists();
    this.getwjanmelist();
    this.getwenjians();
    // this.getTitle();
    // this.getdataid();
    // this.getdatainsert();
    this.getdatatext();
    this.getbtexts();
    this.getlblist();
  },
  methods: {
    getlblist(){
      this.$axios.get('http://localhost:8080/getlbtulist').then((response) => {
        this.lengbolist = response.data.list
      })
    },
    getbtexts(){
      $.ajax({
        type:"get",
        url:"http://localhost:8080/getbtext",
        dataType:"json",
        success:function (data) {
          var li = "<div>";
          $.each(data.list,function (i,n) {
            li += "<div>",
              +"<span>",
              +n["btext"],
              +"</span>",
              +"</div>",
              +"<div>",
              +"<span>",
              +n["bneir"],
              +"</span>",
              +"</div>"
          })
          li += "</div>";
          $(".aihao14").append(htmls1)
        },error:function () {
          alert("资源加载失败")
        }
      })
    },
    getvalueslist(){
      let params = {
        texts: this.valuesai
      }
      this.$axios.get('http://localhost:8080/textlist',{params}).then((response) => {
        if(this.valuesai != null && this.valuesai != ""){
          $(".kozao10").hide()
          $(".kozao19").show()
          this.valueslist = response.data.list
          this.getdatatext()
        }else{
          $(".kozao10").show()
          $(".kozao19").hide()
        }
      }).catch(error =>{
        alert("资源加载失败")
      })
    },
    getvalueslist2(){
      let params = {
        texts: this.valuesai
      }
      this.$axios.get('http://localhost:8080/textlist',{params}).then((response) => {
        if(this.valuesai != null && this.valuesai != ""){
          $(".kozao10").hide()
          $(".kozao19").show()
          this.valueslist = response.data.list
          this.getdatatext()
          var huoqus = this.valuesai
          alert(huoqus)
          this.$router.push({
            path:'/nrong',
            name:'Nrong',
            query:{
              texts:huoqus
            }
          })
          $(".kozao1").hide()
        }else{
          $(".kozao10").show()
          $(".kozao19").hide()
        }
      }).catch(error =>{
        alert("资源加载失败")
      })
    },
    getwenjians(){
      this.$axios.get("http://localhost:8080/wenjians").then((response) => {
        this.wjlist = response.data.list
      })
    },
    getwangzhiin(){
      let params = {
        images: this.imglist,
        titles: this.titlename,
        wjname: this.name
      }
      this.$axios.get('http://localhost:8080/wangzhiinsert',{params}).then((response) => {
        alert("添加成功")
      })
    },
    getwjanmelist(){
      this.$axios.get('http://localhost:8080/wjnamelist').then((response) => {
        this.wjnamelists = response.data.list
      })
    },
    getwjlists(){
      this.$axios.get('http://localhost:8080/getwjlist').then((response) => {
        console.log(response.data.lists)

        this.wenjianlist = response.data.lists;
      })
    },
    getwjinsert(){
      let params = {
        wjname:this.names
      }
      this.$axios.get('http://localhost:8080/wenjian',{params}).then((response) => {
        alert("添加成功")
        this.getwjlists();
        $(".iem10").hide()
      })
    },
    getguanggao(){
      this.$axios.get('http://localhost:8080/guangaolist').then((response) => {
        this.guangaodata = response.data.list
      }).catch(error => {
        alert("资源加载失败")
      })
      // $.ajax({
      //   url:'http://localhost:8080/guangaolist',
      //   dataType:'json',
      //   type:'get',
      //   success:function (data) {
      //     var htmls = "<ul>";
      //     $.each(data.list,function (i,n) {
      //       htmls += "<li>",
      //             +"<span>",
      //             +n["gid"],
      //             +"</span>",
      //             +"<span>",
      //             +n["gimages"],
      //             +"</span>",
      //             +"<span>",
      //             +n["gname"],
      //             +"</span>",
      //             +"</li>"
      //     })
      //     htmls += "</ul>";
      //     $("#gg").append(htmls);
      //   },
      //   error:function () {
      //     alert("资源加载失败")
      //   }
      // })
    },
    ondelete(item){
      let params = {'gid':item.gid}
      this.$axios.get('http://localhost:8080/deletedata',{params}).then((response) => {
        if(response.data.tuin == "yes"){
          alert("删除成功")
          this.guangaodata;
        }else if(response.data.tuin == "no"){
          alert("删除失败")
        }
      })
    },
    lodaData(pageIndex,pageSize){
      let params = {'pageIndex':pageIndex}
      this.$axios.get('http://localhost:8080/listsize',params).then((response) => {
        this.tablelist = response.data.list
        this.page = response.data.page
        this.tablelist[index] = !this.tablelist[index];
      })
    },
    handleCurrentchange(value){
      this.page.currPageNo = value
      this.lodaData(this.page.currPageNo,this.page.pageSize)
    },
    getshiping(){
      this.$axios.get('http://localhost:8080/shipings').then((response) => {
        this.shiping = response.data.list;
      })
    },
    // getTitle(){
    //   let params = {'texts':this.texts}
    //   this.$axios.get('http://localhost:8080/textlist',{params}).then((response)=>{
    //     var textval = $("#texts1").val()
    //     if(textval != null && textval != ""){
    //       // alert("输入框有值")
    //       $("#lishimk").hide()
    //       $("#lishimk2").show()
    //       if(this.texts != null && this.texts != ""){
    //         // alert("查询成功")
    //         console.log(response.data.list)
    //         this.textlists1 = response.data.list;
    //         // var t = this.texts;
    //         // alert("有值"+t)
    //         // this.$router.push({
    //         //   path: '/texts',
    //         //   name: 'Texts'
    //         // })
    //       }else{
    //         // alert("查询失败")
    //         // alert("内容不能为空")
    //       }
    //     }else{
    //       // alert("输入框没值")
    //       $("#lishimk").show()
    //       $("#lishimk2").hide()
    //     }
    //   })
    // },
    // getTitle1(){
    //   let params = {'texts':this.texts}
    //   this.$axios.get('http://localhost:8080/textlist',{params}).then((response)=>{
    //     if(this.texts != null && this.texts != ""){
    //       console.log(response.data.list)
    //       this.textlistss = response.data.list;
    //       var name = this.texts;
    //       alert(name)
    //       this.$router.push({
    //         path:'texts',
    //         name:'Texts',
    //         query:{
    //           texts: name,
    //         }
    //       })
    //     }else{
    //       alert("查询失败")
    //       // alert("内容不能为空")
    //     }
    //   })
    // },
    getdatatext(){
      this.$axios.get('http://localhost:8080/datalists').then((response) => {
        console.log(response.data.list)
        this.datatextslist = response.data.list
        // this.$router.push({
        //   path:'/texts',
        //   name:'Texts',
        //   // query:{
        //   //
        //   // }
        // })
      })
    },
    getdatainsert(){
      let params = {
        'texts': this.valuesai,
        'href': this.href,
        'ico':this.ico,
        'images':this.images,
        'leixing':this.leixing,
        'daxiao':this.daxiao,
        'data':this.data,
        'bianhao':this.bianhao
      }
      this.$axios.get("http://localhost:8080/datainsert",{params}).then((response) => {
        if(this.valuesai != null && this.valuesai != ""){
          if(response.data.returns == "yes"){
            alert("添加成功")
            this.getdatatext();
          }else{
            alert("添加失败")
          }
        }else{
          alert("警告不能为空，无法进入添加")
        }
      })
    },
    getdataid(items){
      var items = items.id;
      alert(items)
      this.$router.push({
        path:'/texts',
        name:'Texts',
        query:{
          id1: items,
        }
      })
    },
    gettextsid(index){
      var id = index.id;
      this.$router.push({
        path:'texts',
        name:'Texts',
        query:{
          id: id,
        }
      })
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 745px) and (max-width: 1920px) {
  #sanchu{
    width: 2%;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .kozao20>.kozao13:hover{
    background-color: #000;
    color: #fff;
  }
  .kozao1{
    width: 100%;
    height: 550px;
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 1;
  }
  .kozao2{
    width: 100%;
    height: 99px;
    padding-top: 46px;
  }
  .kozao3{
    width: 100%;
    height: 450px;
  }
  .kozao4{
    width: 90%;
    height: 50px;
    margin: 0 auto;
  }
  .kozao5{
    width: 90%;
    height: 390px;
    margin: 0 auto;
    padding-right: 66px;
    padding-top: 20px;
  }
  .kozao6{
    width: 95%;
    height: 50px;
    float: left;
  }
  .kozao6>input{
    width: 100%;
    height: 50px;
    border: 0px;
    border-bottom: 1px solid #000;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1rem;
    font-family: cursive;
    outline: none;
  }
  .kozao7{
    width: 5%;
    height: 50px;
    float: left;
  }
  .kozao7>img{
    width: 96%;
    padding-left: 15px;
  }
  .kozao8{
    width: 50%;
    height: 370px;
    float: left;
    border-right: 1px solid #000;
  }
  .kozao9{
    width: 50%;
    height: 370px;
    border: 1px solid #000;
    float: left;
  }
  .kozao10{
    width: 100%;
    height: 370px;
  }
  .kozao11{
    width: 70%;
    height: 35px;
    float: left;
    font-family: cursive;
    font-size: 0.9rem;
    padding-left: 10px;
    color: #2d1b8f;
    line-height: 35px;
  }
  .kozao12{
    width: 30%;
    height: 35px;
    float: left;
    line-height: 30px;
    color: #aaa5a5;
    padding-left: 111px;
  }
  .kozao12>img{
    width: 34%;
  }
  .kozao12>span{
    font-family: cursive;
    font-size: 0.9rem;
    vertical-align: middle;
  }
  .kozao13{
    width: 100%;
    height: 30px;
    font-family: cursive;
    font-size: 0.5rem;
    line-height: 27px;
    float: left;
    padding-left: 10px;
  }
  .kozao14{
    width: 50%;
    height: 370px;
    border: 1px solid #000;
    float: left;
  }
  .kozao15{
    width: 100%;
    height: 35px;
    border: 1px solid #000;
    font-family: cursive;
    font-size: 1rem;
    padding-left: 10px;
    line-height: 33px;
  }
  .kozao16{
    width: 100%;
    height: 271px;
    border: 1px solid #000;
    padding-left: 10px;
  }
  .kozao17{
    width: 100%;
    height: 60px;
    border: 1px solid #000;
    padding-left: 10px;
    padding-right: 10px;
  }
  .kozao17>button{
    width: 28%;
    height: 58px;
    font-size: 1rem;
    font-family: cursive;
    border-radius: 20px;
    border: 0;
    outline: none;
    border: 1px solid #000;
    margin-right: 10px;
  }
  .kozao18{
    width: 100%;
    height: 67px;
    border: 1px solid #000;
    font-family: cursive;
    padding-left: 56px;
    font-size: 1rem;
    padding-top: 22px;
    color: #9f5a25;
  }
  .kozao19{
    width: 100%;
    height: 370px;
  }
  .kozao20{
    width: 100%;
    height: 370px;
    float: left;
  }
  .tongtong2{
    width: 100%;
    height: 30px;
    border: 1px solid #000;
    font-size: 0.5rem;
    font-family: cursive;
  }
  .tongtong1{
    width: 100%;
    height: 400px;
    border: 1px solid #00ff00;
    float: left;
  }
  #lishimk2{
    width: 100%;height: 400px;border: 1px solid #0000ff;display: none;
  }
  #select{
    width: 75%;
    height: 27px;
    border-radius: 9px;
    font-size: 0.5rem;
    padding-left: 5px;
    outline: none;
  }
  .option{
    height: 100px;
    border: 1px solid #000;
    font-family: cursive;
    font-size: 0.5rem;
  }
  .iem16{
    width: 50%;
    height: 35px;
    float: left;
    padding-left: 37px;
  }
  .iem17{
    width: 60%;
    height: 32px;
    border: 0px;
    border-radius: 20px;
    margin: 0 auto;
    font-size: 0.5rem;
    font-family: cursive;
    line-height: 20px;
    background-color: #1A73E8;
    color: #fff;
    border: 0.5px solid #1A73E8;
    outline: none;
  }
  .iem18{
    width: 60%;
    height: 32px;
    border: 0px;
    border-radius: 20px;
    margin: 0 auto;
    font-size: 0.5rem;
    font-family: cursive;
    line-height: 20px;
    background-color: #fff;
    color: #1A73E8;
    border: 0.5px solid #a19f9f;
    outline: none;
  }
  .iem10{
    width: 90%;
    height: 550px;
    position: absolute;
    top: 0px;
  }
  .iem11{
    background-color: #fff;
    width: 84%;
    height: 153px;
    margin: 0 auto;
    margin-top: 50%;
    border-radius: 20px;
    box-shadow: 0px 0px 20px #000;
    border: 0px;
  }
  .iem12{
    width: 23%;
    height: 30px;
    margin-left: 10px;
    text-align: center;
    position: relative;
    font-size: 1rem;
    font-f26mily: cursive;
    top: 26px;
    color: #5A6B8F;
    background-color: #fff;
    /*z-index: 1;*/
  }
  .iem13{
    width: 100%;
    height: 35px;
    margin-top: 15px;
  }
  .iem14{
    width: 20%;
    height: 35px;
    float: left;
    font-size: 0.1rem;
    text-align: center;
    line-height: 36px;
    font-family: cursive;
    padding-left: 9px;
  }
  .iem15{
    width: 80%;
    height: 35px;
    float: left;
  }
  .iem15>input{
    height: 35px;
    width: 85%;
    margin-left: 5px;
    font-size: 0.5rem;
    font-family: cursive;
    outline: none;
  }
  .men1{
    position: absolute;
    top: 80px;
    left: 894px;
    width: 25%;
    height: 550px;
    background-color: #fff;
    border-radius: 10px;
  }
  .men2{
    width: 94%;
    height: 502px;
    border: 1px solid #000;
    font-family: cursive;
    font-size: 1rem;
    margin: 0 auto;
    margin-top: 33px;
  }
  .men2>.diwu1{
    width: 25%;
    height: 30px;
    position: relative;
    top: -13px;
    text-align: center;
    margin-left: 10px;
    background-color: #fff;
  }
  .diwu2{
    width: 100%;
    height: 30px;
    line-height: 20px;
    margin: 0 auto;
    margin-bottom: 6px;
    float: left;
  }
  .men2>.diwu3{
    width: 97%;
    height: 391px;
    margin: 0 auto;
    margin-top: 5px;
  }
  .iem1{
    width: 20%;
    height: 30px;
    font-size: 0.1rem;
    text-align: center;
    float: left;
    line-height: 27px;
  }
  .iem2{
    width: 75%;
    height: 30px;
    font-size: 0.1rem;
    /*text-align: center;*/
    float: left;
  }
  .iem2>input{
    width: 100%;
    height: 27px;
    outline: none;
    /*border: 0px;*/
    border-radius: 9px;
    padding-left: 10px;
    border: 0.1px solid;
    font-size: 0.5rem;
    font-family: cursive;
  }
  .iem3{
    width: 100%;
    height: 281px;
    border: 1px solid #000;
    float: left;
  }
  .iem4{
    margin-top: 5px;
    width: 100%;
    height: 40px;
  }
  .iem5{
    width: 28%;
    height: 40px;
    float: left;
  }
  .iem6{
    width: 72%;
    height: 40px;
    float: left;
    padding-left: 102px;
  }
  .iem7{
    font-size: 0.1rem;
    height: 37px;
    outline: none;
    border-radius: 4px;
    border: 0.1px solid #a19f9f;
    color: #1A73E8;
    background-color: #fff;
    line-height: 35px;
    text-align: center;
    width: 100%;
    font-family: cursive;
  }
  .iem8{
    font-size: 0.1rem;
    height: 37px;
    outline: none;
    border: 0;
    border-radius: 35px;
    border: 0.1px solid #1A73E8;
    color: #fff;
    background-color: #1A73E8;
    line-height: 35px;
    text-align: center;
    width: 41%;
    font-family: cursive;
    margin-left: 10px;
  }
  .iem9{
    font-size: 0.1rem;
    height: 37px;
    outline: none;
    border: 0;
    border-radius: 35px;
    border: 0.1px solid #a19f9f;
    background-color: #fff;
    color: #1A73E8;
    line-height: 35px;
    text-align: center;
    width: 41%;
    font-family: cursive;
    margin-left: 10px;
  }
  .mok1{
    width: 100%;
    height: 500px;
    background-color: #fff;
  }
  .ls1{
    width: 100%;
    border: 1px solid red;
    height: 400px;
    float: left;
  }
  .ls2{
    width: 50%;
    height: 30px;
    border: 1px solid #000;
  }
  .ls3{
    width: 100%;
    height: 30px;
    border: 1px solid darkred;
    font-size: 0.5rem;
    line-height: 27px;
    font-family: cursive;
    padding-left: 10px;
    background-color: #fff;
  }
  /*#mok1:hover{*/
  /*  background-color: red;*/
  /*}*/
  .er1{
    width: 100%;
    height: 400px;
    border: 1px solid red;
  }
  .er2{
    width: 100%;
    height: 30px;
    border: 1px solid #000;
    line-height: 30px;
    font-size: 0.5rem;
    color: #000;
    padding-left: 10px;
    margin-top: 7px;
    font-family: cursive;
  }
  .er3{
    width: 100%;
    height: 171px;
    border: 1px solid #000;
    line-height: 30px;
    font-size: 0.5rem;
    color: #000;
    padding-left: 10px;
  }
  .er3>img{
    width: 47.5%;
    margin-top: 10px;
    height: 91%;
  }
  .er4{
    width: 100%;
    height: 45px;
    border: 1px solid #000;
    line-height: 30px;
    font-size: 0.5rem;
    color: #000;
  }
  .er5{
    width: 50%;
    height: 45px;
    border: 1px solid #000;
    line-height: 30px;
    font-size: 0.5rem;
    color: #000;
    padding-left: 10px;
    float: left;
  }
  .er5>button{
    width: 92%;
    height: 90%;
    border: 0;
    border-radius: 10px;
    font-family: cursive;
    font-size: 1rem;
    background-color: #d4d3d3;
  }
  .er6{
    width: 50%;
    height: 45px;
    border: 1px solid #000;
    line-height: 30px;
    font-size: 0.5rem;
    color: #000;
    padding-left: 10px;
    float: left;
  }
  .er6>button{
    width: 92%;
    height: 90%;
    border: 0;
    border-radius: 10px;
    font-family: cursive;
    font-size: 1rem;
    background-color: #d4d3d3;
  }
  .datatext1{
    width: 100%;
    height: 400px;
  }
  .datatext1>.div0{
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #000;
  }
  .datatext1>.div0>.div1{
    width: 70%;
    height: 30px;
    float: left;
    font-family: fangsong;
    font-size: 0.5rem;
    color: #FC5531;
    font-weight: 600;
    line-height: 27px;
    padding-left: 10px;
  }
  .datatext1>.div0>.div2{
    width: 30%;
    height: 30px;
    float: left;
    vertical-align: center;
    font-family: fangsong;
    font-size: 0.5rem;
    color: #c5bfbf;
    font-weight: 600;
    line-height: 24px;
    padding-left: 34px;
    padding-right: 10px;
  }
  .datatext1>.div0>.div2>img{
    width: 40%;
    /*margin-top: 3px;*/
  }

  /*.vues1{*/
  /*  width: 100%;*/
  /*  height: 500px;*/
  /*  border: 1px solid #000;*/
  /*}*/
  .items1{
    width: 100%;
    height: 28px;
    line-height: 26px;
    padding-left: 10px;
    font-family: cursive;
    font-size: 0.1rem;
    color: #304060;
  }
  .vues2{
    width: 38.9%;
    height: 400px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #000;
    position: absolute;
    top: 44px;
    left: 416px;
  }
  .vues3{
    width: 50%;
    height: 400px;
    border: 1px solid #000;
    float: left;
    color: #000;
  }
  .xss8{
    margin-left: 7px;
    width: 26.16%;
    height: 500px;
    float: left;
    background-color: #fff;
    border-radius: 10px;
  }
  .vues4{
    width: 50%;
    height: 400px;
    border: 1px solid #000;
    float: left;
  }
  .lmf{
    width: 45%;
    height: 29px;
    background-color: #fff;
    margin: 0 auto;
  }
  .lmf1{
    width: 86%;
    float: left;
    height: 29px;
  }
  .lmf1>input{
    width: 100%;
    height: 26px;
    outline: none;
    border: 0px;
    font-size: 0.1rem;
    padding-left: 10px;
    padding-right: 10px;
    color: #304060;
    font-family: cursive;
  }
  .lmf2{
    width: 14%;
    float: left;
    height: 29px;
    background-color: #304060;
    font-size: 0.9rem;
    text-align: center;
    font-family: cursive;
    color: #fff;
    line-height: 28px;
  }
  .yu2{
    width: 17%;
    padding-left: 20px;
    padding-right: 10px;
    height: 59px;
    float: left;
    padding-top: 12px;
  }
  .yu2>img{
    max-width: 32px;
  }
  .yu3{
    width: 83%;
    padding-left: 1px;
    padding-right: 10px;
    height: 59px;
    float: left;
  }
  .yu3>span{
    font-size: 1rem;
    line-height: 55px;
    padding-left: 5px;
  }
  .pyth1{
    width: 60%;
    height: 55px;
    float: left;
    line-height: 45px;
  }
  .phty2{
    max-width: 15%;
    margin-right: 2.5px;
  }
  .phty3{
    vertical-align: middle;
    font-weight: 700;
    font-size: 1.2rem;
  }
  .phty4{

  }
  .pyth5{
    width: 40%;
    height: 54px;
    float: left;
    line-height: 51px;
    color: #999595;
    padding-left: 75px;
    vertical-align: middle;
  }
  .pyth5>img{
    width: 28%;
  }
  .ds1{
    width: 100%;
    height: 180px;
    border: 1px solid #c7c0c0;
    margin-top: 10px;
    border-radius: 5px;
  }
  .ds1>.li{
    width: 100%;
    height: 60px;
  }
  .ds2{
    width: 100%;
    height: 470px;
    margin-top: 10px;
    border: 1px solid #c7c0c0;
    border-radius: 5px;
  }
  .ds2>.li1{
    width: 100%;
    height: 55px;
    padding-left: 20px;
    padding-right: 20px;
    border: 0;
    border-bottom: 1px solid #c7c0c0;
  }
  .ds2>.li2{
    width: 100%;
    height: 385px;
  }
  .ds2>.li2>.li3{
    width: 100%;
    height: 96px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .ds2>.li2>.li3>.ol1{
    margin-top: 15px;
    width: 40%;
    height: 80px;
    float: left;
  }
  .ds2>.li2>.li3>.ol1>.op{
    height: 24px;
    max-width: 70%;
    position: relative;
    top: 1.5px;
    left:4px;
    z-index: 1;
  }
  .ds2>.li2>.li3>.ol1>.op1{
    position: relative;
    top: -97.2px;
    left: 27px;
    z-index: 1;
    font-size: 0.3rem;
    color: #fff;
  }
  .ds2>.li2>.li3>.ol1>.op2{
    z-index: 3;
    width: 30px;
    height: 30px;
    position: relative;
    top: -114px;
    display: none;
    padding-left: 25%;
  }
  .ds2>.li2>.li3>.ol1>img{
    width: 100%;
    height: 78px;
    position: relative;
    top: -26px;
  }
  .ds2>.li2>.li3>.ol2{
    margin-top: 15px;
    width: 60%;
    height: 80px;
    float: left;
  }
  .ds2>.li2>.li3>.ol2>.ol3{
    width: 100%;
    height: 51.5px;
    font-size: 0.9rem;
    padding-left: 10px;
  }
  .ds2>.li2>.li3>.ol2>.ol4{
    width: 100%;
    height: 26.5px;
    padding-left: 10px;
    color: #8b8989;
    font-size: 0.7rem;
    line-height: 31px;
  }
  .meta{
    width: 100%;
    height: 100%;
    background-color: #aeb8c3;
  }
  .hade{
    width: 100%;
    height: 75px;
    background-color: #5a6b8f;
    margin: 0 auto;
    padding-top: 9px;
  }
  .hade1{
    width: 100%;
    height: 30px;
    margin: 0 auto;
    margin-bottom: 6px;
  }
  .hade2{
    width: 100%;
    height: 30px;
    background-color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    display: block;
  }
  .hade2>.xs1{
    width: 7.69%;
    height: 30px;
    float: left;
    font-size: 0.1rem;
    color: #304060;
    text-align: center;
    line-height: 31px;
    display: block;
    font-family: fangsong;
  }
  .hade3{
    width: 100%;
    height: 30px;
    background-color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    display: none;
  }
  .hade3>.xs1{
    width: 16.6%;
    height: 30px;
    border: 1px solid #000;
    float: left;
    font-size: 0.1rem;
    color: #849fbd;
    text-align: center;
    line-height: 27px;
    display: none;
    font-family: fangsong;
  }
  .zhuti{
    width: 100%;
    height: 1800px;
    background-color: #fff;
  }
  .zhuti1{
    width: 90%;
    height: 170px;
    margin: 0 auto;
    background-color: #fff;
    padding-top: 5px;
    padding-left: 5px;

  }
  .xs2{
    width: 100%;
    height: 100%;
    float: left;
    background-color: #fff;
  }
  .xs2>.xs3{
    width: 100%;
    float: left;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 0.2rem;
    text-align: center;
    font-family: cursive;
    color: #fff;
  }
  .xs2>.xs4{
    width: 100%;
    float: left;
    height: 124px;
  }
  .xs2>.xs4>img{
    width: 100%;
    height: 124px;
  }
  .xs2>.yu1{
    width: 100%;
    height: 124px;
    background-color: #000;
    opacity: 0.6;
    position: relative;
    top: 28px;
    display: none;
  }
  .xs5{
    width: 12.5%;
    /*padding-left: 5px;*/
    padding-right: 5px;
    float: left;
    background-color: #fff;
  }
  .xs6{
    width: 90%;
    height: 499px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .xs7{
    width: 73.25%;
    height: 500px;
    float: left;
    background-color: #fff;
  }
  .xs8{
    width: 25%;
    height: 500px;
    background-color: #fff;
    float: left;
    display: block;
  }
  .xs10{
    width: 25%;
    height: 145px;
    background-color: #fff;
    float: left;
    display: none;
  }

  .el-carousel__item{
    z-index: 0;
  }
  .xs9{
    position: absolute;
    top: 6px;
    width: 55px;
    height: 25px;
    border: 1px solid #fff;
    left: 1138px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 22px;
  }
  .xss9{
    position: absolute;
    top: 6px;
    width: 55px;
    height: 25px;
    border: 1px solid #fff;
    left: 285px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 22px;
  }
  .demonstration{
    width: 100%;
    height: 34px;
    padding-top: 2px;
  }
  .imgs{
    width: 30px;
    height: 30px;
  }
  .l1{
    width: 100%;
    height: 465px;
  }
  .aihao4{
    width: 100%;
    height: 395px;
  }
  .aihao5{
    width: 100%;
    height: 35px;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 35px;
    padding-left: 5px;
    font-family: cursive;
    background-color: #fff;
  }
  .aihao6{
    width: 100%;
    height: 35px;
    font-size: 1rem;
    line-height: 31px;
    padding-left: 5px;
    font-family: cursive;
    background-color: #fff;
  }
  .aihao7{
    width: 99%;
    height: 465px;
    border-left: 1px solid #d8d4d4;
  }
  .aihao8{
    width: 100%;
    height: 430px;
    background-color: #fff;
  }
  .aihao9{
    width: 100%;
    height: 35px;
    background-color: #fff;
  }
  .aihao10{
    width: 100%;
    height: 86px;
    border: 0;
    border-bottom: 1px solid #cdc6c6;
  }
  .aihao11{
    width: 100%;
    height: 35px;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 35px;
    padding-left: 5px;
    font-family: cursive;
  }
  .aihao12{
    width: 100%;
    height: 51px;
    font-size: 1rem;
    line-height: 31px;
    padding-left: 5px;
    font-family: cursive;
  }
  .aihao13{
    width: 90%;
    height: 1000px;
    border: 1px solid #000;
    background-color: #fff;
    margin-top: 10px;
    margin: 0 auto;
    margin-top: 15px;
  }
  .aihao3{
    width: 99.4%;
    height: 35px;
    padding-left: 1px;
    background-color: #fff;
    border-bottom: 1px solid #d8d4d4;
  }
  .aihao3>img{
    width: 30px;
    height: 30px;
  }
  .aihao1{
    width: 56%;
    height: 465px;
    float: left;
  }
  .aihao2{
    width: 44%;
    height: 465px;
    float: left;
  }
  .el-carousel__indicators .el-carousel__indicators--horizontal{
    display: none;
  }
  li.el-carousel__indicator.el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 4px;
    display: none;
  }
  button.el-carousel__button{
    display: none;
  }
  /*去掉轮播图指示点*/
  /deep/ .el-carousel__indicator--horizontal .el-carousel__button {
    width: 10px;
    height: 10px;
    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 50%;
    opacity: 0.5;
    display: none;
  }
  /deep/ .el-carousel__indicator--horizontal.is-active .el-carousel__button {
    width: 10px;
    height: 10px;
    background: #ffffff;
    border-radius: 50%;
    opacity: 1;
  }
  .el-carousel__arrow .el-carousel__arrow--left .carousel-arrow-left-left-leave-active .carousel-arrow-left-left-leave-to{
    z-index: 0;
    display: none;
  }
  .totiaoimg{
    width: 100%;
    height: 395px;
  }
  .aihao14{
    width: 75%;
    height: 1000px;
    border: 1px solid #000;
    float: left;
  }
  .aihao15{
    width: 25%;
    height: 1000px;
    border: 1px solid #000;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
  }
  .dabiao{
    vertical-align: middle;
    font-size: 1.2rem;
    font-family: cursive;
    font-weight: 600;
    margin-left: 5px;
  }
}
</style>
