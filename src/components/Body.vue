<template>
  <div class="body">
    <!--导航栏-->
    <div class="divs1">
      <div class="divs3">
        <div class="divs8">
          <input class="inputs1" type="text"/>
          <div class="divs9">
          <img style="margin-right: 3px" src="static/images/sousuo.png" width="15px" height="15px" /><span style="vertical-align: middle">搜索</span>
          </div>
        </div>
        <div class="imh" style="width: 35px;height: 35px;float: left;"><img id="imgs" :src="images" style="border-radius: 50px;" width="35px" height="35px"/></div>
      </div>
      <div class="divs2">
        <div class="divs4"><span>博客</span></div>
        <div class="divs4"><span>课程</span></div>
        <div class="divs4"><span>文库·商城</span></div>
        <div class="divs4"><span>问答</span></div>
        <div class="divs4"><span>社区</span></div>
        <div class="divs4"><span>开源</span></div>
        <div class="divs4"><span>会员中心</span></div>
        <div class="divs4"><span>收藏</span></div>
        <div class="divs4"><span>动态</span></div>
        <div class="divs4"><span>信息</span></div>
        <div class="divs7"><div class="divs6"><span>创作</span></div></div>
      </div>
    </div>
    <!--主体-->
    <div class="bodys1">
      <div class="bodys2"></div>
      <div class="bodys3">
        <!--功能模块-->
        <div class="neirongs">
          <div class="neirongs1">
            <div class="neirongs2">
              <div class="neirongs4">
                <div class="neirongs5">
                  <span>JAVA</span>
                </div>
              </div>
            </div>
            <div class="neirongs3">
              <img src="static/images/Java1.jpg">
            </div>
          </div>
        </div>
        <div class="neirongs">
          <div class="neirongs7">
            <div class="neirongs2">
              <div class="neirongs4">
                <div class="neirongs6">
                  <span>CSS</span>
                </div>
              </div>
            </div>
            <div class="neirongs3">
              <img src="static/images/CSS.jpg">
            </div>
          </div>
        </div>
        <div class="neirongs">
          <div class="neirongs9">
            <div class="neirongs2">
              <div class="neirongs4">
                <div class="neirongs8">
                  <span>前端</span>
                </div>
              </div>
            </div>
            <div class="neirongs3">
              <img src="static/images/bangong.jpg">
            </div>
          </div>
        </div>
        <div class="neirongs">
          <div class="neirongs15">
            <div class="neirongs2">
              <div class="neirongs4">
                <div class="neirongs14">
                  <span>C/C++</span>
                </div>
              </div>
            </div>
            <div class="neirongs3">
              <img src="static/images/qianduan.jpg">
            </div>
          </div>
        </div>
        <div class="neirongs">
          <div class="neirongs11">
            <div class="neirongs2">
              <div class="neirongs4">
                <div class="neirongs10">
                  <span>Python</span>
                </div>
              </div>
            </div>
            <div class="neirongs3">
              <img src="static/images/jihe1.jpg">
            </div>
          </div>
        </div>
        <div class="neirongs">
          <div class="neirongs17">
            <div class="neirongs2">
              <div class="neirongs4">
                <div class="neirongs16">
                  <span>AI</span>
                </div>
              </div>
            </div>
            <div class="neirongs3">
              <img src="static/images/C++.jpg">
            </div>
          </div>
        </div>
        <div class="neirongs">
          <div class="neirongs13">
            <div class="neirongs2">
              <div class="neirongs4">
                <div class="neirongs12">
                  <span>数据库</span>
                </div>
              </div>
            </div>
            <div class="neirongs3">
              <img src="static/images/bangong1.jpg">
            </div>
          </div>
        </div>
        <!--推荐模块-->
        <div class="divstyle1">
          <div class="divstyle2">
            <img src="static/images/totia.png" style="float: left;" width="30px" height="30px">
          </div>
          <div class="divstyle3">
            <div>
              <div class="pagedata1">
                <div class="pagedata3">
                  <div v-for="(item,index) in tablelist" v-if="index<1">
                    <div class="pagedata2">
                      <img :src="item.timg" width="500px" height="400px" />
                    </div>
                    <div class="pagedata4">
                      <div class="pagedata5"><span>{{item.ttitle}}</span></div>
                      <div class="pagedata6"><span>{{item.ttext}}</span></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div style="width: 291px;height: 500px;float: left;">
                    <div v-for="item in tablelist" id="item">
                      <div class="pagedata9">
                        <div class="pagedata7"><span>{{item.ttitle}}</span></div>
                        <div class="pagedata8"><span>{{item.ttext}}</span></div>
                      </div>
                    </div>
                    <div style="width: 291px;height: 45px;margin-top: 5px;">
                      <el-pagination
                        background
                        layout="total, prev, pager, next"
                        :total="page.totalCount"
                        :current-page="page.currPageNo"
                        :page-size="page.pageSize"
                        @current-change="handleCurrentchange">
                      </el-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="guangao">
            <div class="block">
            <span class="demonstration">
              <img src="static/images/AD.png" width="30px" height="30px"/>
            </span>
              <el-carousel trigger="click" width="425px" height="501px">
                <el-carousel-item v-for="item in guangaolist" :key="gid">
                  <div v-if="flase">{{item.gid}}</div>
                  <div class="gname"><span>{{item.gname}}</span>
                    <img src="static/images/sanchu.png" width="20px" height="20px" @click="ondelete(item)">
                  </div>
                  <img :src="item.gimg" width="425px" height="501px"/>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>


      </div>
    </div>

    <div class="di1">
      <div class="di2">
       <div style="width: 1038px;height: 80px;">
         <div class="di3"><span>关注</span></div>
         <div class="di3 di5"><span>推荐</span></div>
         <div class="di3"><span>资讯</span></div>
         <div class="di3"><span>热播</span></div>
       </div>

        <div class="di6">
          <div class="di4" style="display: none;">第1</div>
          <div class="di4">第2</div>
          <div class="di4" style="display: none;">第3</div>
          <div class="di4" style="display: none;">第4</div>
        </div>
      </div>

    </div>

    <!--头像信息下拉框-->
    <div class="divl1" style="display: none;">
      <div class="div-styles1">
        <div class="div-styles2"><span>{{zhanghao}}</span></div>
        <div class="div-styles2">
          <div class="divl4">
            {{vips}}
            <!--            <img class="divl2" src="static/images/vip3.png" width="17px" height="17px">-->
            <!--            <div class="divl3">VIP</div>-->
          </div>
        </div>
        <div class="div-styles3">
          <div class="div-styles4">
            <div class="div-styles5">1</div>
            <div class="div-style6"><span>粉丝</span></div>
          </div>
          <div class="div-styles4">
            <div class="div-styles5">1</div>
            <div class="div-style6"><span>关注</span></div>
          </div>
          <div class="div-styles4">
            <div class="div-styles5">1</div>
            <div class="div-style6"><span>获赞</span></div>
          </div>
        </div>
        <div class="div-styles7">
          <div class="div-styles8">
            <div class="texts1">
              <div class="div-styles9">
                <img class="imgs1" src="static/images/yonghu.png">
                <img class="imgs2" src="static/images/yonghu2.png" style="display: none;">
              </div>
            </div>
            <div class="texts2">
              <span>个人中心</span>
            </div>
          </div>
          <div class="div-styles8">
            <div class="texts1">
              <div class="div-styles9">
                <img class="imgs1" src="static/images/neirong.png">
                <img class="imgs2" src="static/images/neirong2.png" style="display: none;">
              </div>
            </div>
            <div class="texts2">
              <span>内容管理</span>
            </div>
          </div>
          <div class="div-styles8">
            <div class="texts1">
              <div class="div-styles9">
                <img class="imgs1" src="static/images/xuexi.png">
                <img class="imgs2" src="static/images/xuexi2.png" style="display: none;">
              </div>
            </div>
            <div class="texts2">
              <span>学习平台</span>
            </div>
          </div>
          <div class="div-styles8">
            <div class="texts1">
              <div class="div-styles9">
                <img class="imgs1" src="static/images/dingdan.png">
                <img class="imgs2" src="static/images/dingdan2.png" style="display: none;">
              </div>
            </div>
            <div class="texts2">
              <span>我的订单</span>
            </div>
          </div>
          <div class="div-styles8">
            <div class="texts1">
              <div class="div-styles9">
                <img class="imgs1" src="static/images/qianbao.png">
                <img class="imgs2" src="static/images/qianbao2.png" style="display: none;">
              </div>
            </div>
            <div class="texts2">
              <span>我的钱包</span>
            </div>
          </div>
          <div class="div-styles8">
            <div class="texts1">
              <div class="div-styles9">
                <img class="imgs1" src="static/images/api.png">
                <img class="imgs2" src="static/images/api2.png" style="display: none;">
              </div>
            </div>
            <div class="texts2">
              <span>我的API</span>
            </div>
          </div>
          <div class="div-styles8">
            <div class="texts1">
              <div class="div-styles9">
                <img class="imgs1" src="static/images/renzheng.png">
                <img class="imgs2" src="static/images/renzheng2.png" style="display: none;">
              </div>
            </div>
            <div class="texts2">
              <span>我的认证</span>
            </div>
          </div>
          <div class="div-styles8">
            <div class="texts1">
              <div class="div-styles9">
                <img class="imgs1" src="static/images/choujiang.png">
                <img class="imgs2" src="static/images/choujiang2.png" style="display: none;">
              </div>
            </div>
            <div class="texts2">
              <span>签到抽奖</span>
            </div>
          </div>
          <div class="div-styles8">
            <div class="texts1">
              <div class="div-styles9">
                <img class="imgs1" src="static/images/tueichu.png">
                <img class="imgs2" src="static/images/tueichu2.png" style="display: none;">
              </div>
            </div>
            <div class="texts2">
              <span>退出</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
$(document).ready(function () {
  $(".di3").click(function () {
    $(this).addClass("di5").siblings().removeClass("di5")
    var i = $(this).index()
    $(".di4").eq(i).show().siblings().hide()
  })
  $(".div-styles8").mouseover(function () {
    $(this).css("background-color","#8390a9")
    $(this).find(".imgs1").hide()
    $(this).find(".imgs2").show()
    $(this).find(".texts2").css("color","#fff")
  })
  $(".div-styles8").mouseout(function () {
    $(this).css("background-color","#fff")
    $(this).find(".imgs2").hide()
    $(this).find(".imgs1").show()
    $(this).find(".texts2").css("color","#6f71ab")
  })
  $("#imgs").mouseover(function () {
    $(this).css({"width":"45px","height":"45px"})
    $(".divl1").show()
  })
  $("#imgs").mouseout(function () {
    $(this).css({"width":"35px","height":"35px"})
    $(".divl1").hide()
  })
  $(".divl1").mouseover(function () {
    $("#imgs").css({"width":"45px","height":"45px"})
    $(".divl1").show()
  })
  $(".divl1").mouseout(function () {
    $("#imgs").css({"width":"35px","height":"35px"})
    $(".divl1").hide()
  })
  $(".list li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".content").eq($(".list li").index(this)).addClass("active-1").siblings().removeClass("active-1")
  })
})
export default {
  name: "Body",
  data(){
    return{
      images:'',
      guangaolist:'',
      tablelist:'',
    }
  },
  created() {
    this.getlist();
    this.lodaData();
    this.ondelete();
  },
  methods:{
    getlist(){
      this.images = this.$route.query.lists;
      this.$axios.post('http://localhost:8080/guangaolist').then((response)=>{
        // this.gid=response.data.list.gid
        console.log(response.data.list);
        this.guangaolist = response.data.list;
      })
    },
    lodaData(pageIndex,pageSize){
      let params = {'pageIndex':pageIndex}
      this.$axios.get('http://localhost:8080/listsize',params).then((response)=>{
        console.log(response.data.list)
        this.tablelist = response.data.list
        this.page = response.data.page
        this.tablelist[index] = !this.tablelist[index];
      })
    },
    handleCurrentchange(value){
      this.page.currPageNo = value //获取当前页码
      this.lodaData(this.piage.currPageNo,this.page.pageSize)
    },
    ondelete(item){
      let params = {'gid':item.gid}
      this.$axios.get('http://localhost:8080/deletedata',{params}).then((response)=>{
        console.log(params)
        if (response.data.tuin == "yes"){
          alert("删除成功")
          this.getlist()
        }else{
          alert("删除失败")
        }
      })
    }
    // onSubmit(){
    //   this.$axios.get('http://localhost:8080/listsize').then((response)=>{
    //     console.log(response.data.list)
    //     this.tablelist = response.data.list
    //     this.page = response.data.page
    //   })
    // }
  }
}
</script>

<style scoped>
.di6{
  width: 1038px;
  height: 420px;
}
.di5{
  background-color: #648eb9;
  color: #fff;
}
.di4{
  width: 1038px;
  height: 420px;
}
.di3{
  width: 130px;
  height: 79px;
  float: left;
  text-align: center;
  font-size: 14px;
  line-height: 79px;
}
.di2{
  background-color: #f3f3f3;
  width: 1038px;
  height: 500px;
}
.di1{
  width: 1486px;
  height: 500px;
  background-color: #99a9bf;
  margin-left: 15px;
  margin-right: 15px;
}
.pagedata9{
  width: 265px;
  height: 90px;
}
.pagedata7{
  width: 265px;
  height: 45px;
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
  color: #000;
  padding-left: 20px;
  padding-right: 10px;
}
.pagedata8{
  width: 265px;
  height: 45px;
  font-size: 14px;
  color: #999;
  padding-left: 20px;
  padding-right: 10px;
}
.pagedata5{
  width: 500px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
  color: #000;
}
.pagedata6{
  width: 500px;
  height: 50px;
  font-size: 14px;
  color: #999;
}
.pagedata4{
  width: 500px;
  height: 100px;
}
.pagedata3{
  width: 500px;
  height: 400px;
  float: left;
}
.pagedata2{
  width: 500px;
  height: 400px;
}
.pagedata1{
  width:793px;
  height: 500px;
  float: left;
  position: absolute;
  top: 407px;
  left: 259px;
}
.divstyle2{
  width: 797px;
  height: 30px;
}
.divstyle3{
  width: 797px;
  height: 501px;
}
.divstyle1{
  width: 797px;
  height: 531px;
  float: left;
  margin-top: 20px;
}
.gname{
  position: absolute;
  top: 10px;
  width: 55px;
  height: 25px;
  border: 1px solid #fff;
  left: 360px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 22px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item.is-active{
  z-index: 0;
}
.el-carousel__item{
  z-index: 0;
}
.guangao{
  width: 425px;
  height: 501px;
  background-color: #fff;
  float: left;
  margin-top: 20px;
}
.divs2{
  height: 36px;
  width: 1519px;
  background-color: #fff;
}
.divs4{
  width: 138px;
  height: 36px;
  text-align: center;
  font-size: 12px;
  float: left;
  line-height: 36.5px;
  color: #7372AB;
  background-color: #fff;
}
.divs4:hover{
  background-color: #7372AB;
  color: #fff;
}
.divs6{
  width: 80px;
  height: 36px;
  margin: 0 auto;
  background-color: #6f71ab;
}
.divs7{
  width: 138px;
  height: 36px;
  text-align: center;
  font-size: 12px;
  float: left;
  line-height: 36.5px;
  color: #7372AB;
  background-color: #fff;
  text-align: center;
  color: #fff;
  font-size: 12px;
}
.divs5{
  background-color: #7372AB;
  color: #fff;
}
.neirongs{
  width: 178px;
  height: 195px;
  float: left;
}
.neirongs1{
  width: 152px;
  height: 195px;
  /*border-radius: 0 15px 15px 0;*/
  background-color: #8d4f40;
  float: left;
}
.neirongs7{
  width: 152px;
  height: 195px;
  /*border-radius: 0 15px 15px 0;*/
  background-color: #175440;
  float: left;
}
.neirongs2{
  width: 152px;
  height: 77.5px;
}
.neirongs3{
  width: 152px;
  height: 115.5px;
}
.neirongs3>img{
  width: 152px;
  height: 117.5px;
}
.neirongs4{
  width: 140px;
  height: 50px;
  border: 0px;
  border-bottom: 1px solid #ffffff91;
  margin: 0 auto;
}
.neirongs5{
  width: 50px;
  height: 30px;
  background-color: #8d4f40;
  font-size: 18px;
  font-width: 700;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  position: relative;
  top: 37px;
  left: -1px;
  font-family: fangsong;
}
.neirongs6{
  width: 50px;
  height: 30px;
  background-color: #175440;
  font-size: 18px;
  font-width: 700;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  position: relative;
  top: 37px;
  left: -1px;
  font-family: fangsong;
}
.neirongs8{
  width: 50px;
  height: 30px;
  background-color: #f9df65;
  font-size: 18px;
  font-width: 700;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  position: relative;
  top: 37px;
  left: -1px;
  font-family: fangsong;
}
.neirongs9{
  width: 152px;
  height: 195px;
  /*border-radius: 0 15px 15px 0;*/
  background-color: #f9df65;
  float: left;
}
.neirongs10{
  width: 50px;
  height: 30px;
  background-color: #c34638;
  font-size: 18px;
  font-width: 700;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  position: relative;
  top: 37px;
  left: -1px;
  font-family: fangsong;
}
.neirongs11{
  width: 152px;
  height: 195px;
  /*border-radius: 0 15px 15px 0;*/
  background-color: #c34638;
  float: left;
}
 .neirongs12{
   width: 50px;
   height: 30px;
   background-color: #c0a077;
   font-size: 15px;
   font-width: 700;
   text-align: center;
   color: #fff;
   margin: 0 auto;
   position: relative;
   top: 37px;
   left: -1px;
   font-family: fangsong;
 }
.neirongs13{
  width: 152px;
  height: 195px;
  /*border-radius: 0 15px 15px 0;*/
  background-color: #c0a077;
  float: left;
}
.neirongs14{
     width: 50px;
     height: 30px;
     background-color: #99a9e0;
     font-size: 15px;
     font-width: 700;
     text-align: center;
     color: #fff;
     margin: 0 auto;
     position: relative;
     top: 37px;
     left: -1px;
     font-family: fangsong;
}
.neirongs15{
  width: 152px;
  height: 195px;
  /*border-radius: 0 15px 15px 0;*/
  background-color: #99a9e0;
  float: left;
}
.neirongs16{
  width: 50px;
  height: 30px;
  background-color: #36271a;
  font-size: 15px;
  font-width: 700;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  position: relative;
  top: 37px;
  left: -1px;
  font-family: fangsong;
}
.neirongs17{
  width: 152px;
  height: 195px;
  /*border-radius: 0 15px 15px 0;*/
  background-color: #36271a;
  float: left;
}
.imh{
  position: absolute;
  left: 1243px;
  top: 20.3px;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  z-index: 1;
  float: left;
}
.body{
  background-color: #1e1c4e;
  width: auto;
  height: 100%;
  padding-bottom: 20px;
}
.divs1{
  background-color: #42406F;
  width: 100%;
  height: 120px;
}
.divs3{
  height: 84px;
  width: 1519px;
  padding-top: 20px;
}
.divs8{
  background-color: #fff;
  width: 450px;
  height: 36px;
  margin: 0 auto;
  background-color: #1e1c4e;
}
.divs9{
  width: 65px;
  height: 36px;
  background-color: #1e1c4e;
  font-size: 12px;
  color: #fff;
  text-align: center;
  float: left;
  line-height: 36px;
}
.inputs1{
  float: left;
  outline: none;
  height: 36px;
  width: 384.8px;
  font-size: 12px;
  padding-left: 10px;
  color: #7372AB;
  padding-inline: 20px;
}
.bodys1{
  width: 1516px;
  height: 780px;
  margin-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
}
.bodys2{
  width: 200px;
  height: 762px;
  background-color: #fff;
  float: left;
  margin-right: 20px;
}
.bodys3{
  width: 1266px;
  height: 780px;
  background-color: #fff;
  float: left;
  padding-left: 20px;
  padding-top: 15px;
}
.divl4{
  width: 41px;
  height: 17px;
  margin: 0 auto;
}
.divl4>img{
  position: absolute;
  left: 149px;
}
.divl2{
  float: left;
}
.divl3{
  width: 41px;
  font-size: 12px;
  padding-left: 5px;
  background-color: #adadad;
  float: left;
  height: 17px;
}
.divl1{
  position: absolute;
  left: 1084.5px;
  top: 45px;
}
.div-styles1{
  width: 352.5px;
  height: 600px;
  background-color: #fff;
  padding-top: 25px;
  position: absolute;
}
.div-styles2{
  width: 352.5px;
  height: 28px;
  font-size: 12px;
  text-align: center;
  line-height: 15px;
}
.div-styles3{
  border-top: 1px solid #d1cbcb;
  border-bottom: 1px solid #d1cbcb;
  width: 352.5px;
  height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.div-styles4{
  width: 116.6px;
  height: 50px;
  float: left;
  background-color: #000;
}
.div-styles5{
  width: 116.6px;
  height: 30px;
  background-color: #fff;
  font-size: 12px;
  text-align: center;
  font-width: 700;
  line-height: 10px;
}
.div-style6{
  width: 116.6px;
  height: 20px;
  background-color: #fff;
  font-size: 12px;
  text-align: center;
  font-width: 700;
  line-height: 10px;
}
.div-styles7{
  width: 352.5px;
  height: 449px;
  background-color: #d1cbcb;
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 5px;
}
.div-styles8{
  height: 110.6px;
  width: 110.6px;
  background-color: #fff;
  float: left;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
}
.texts1{
  width: 110.6px;
  height: 65.3px;
  padding-top: 35px;
}
.texts2{
  width: 110.6px;
  height: 45.3px;
  font-size: 12px;
  text-align: center;
  color: #6f71ab;
}
.div-styles9{
  width: 20px;
  height: 20px;
  margin: 0 auto;
}
.div-styles9>img{
  width: 20px;
  height: 20px;
}
</style>
