webpackJsonp([184],{"9oLx":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Gu7T"),a=o.n(n),r=o("Dd8w"),i=o.n(r),s=o("SJI6"),d=o("r3ZR"),c=o("VkqP"),l=1,h=i()({data:function(){return{title:"搜索",inputs:"",amout:!1,loading:!1,allLoaded:!0,topStatus:"",bottomStatus:"",wrapperHeight:0,order_by:"",order_field:"",datas:[]}},computed:Object(s.mapState)(["message","blurst","view"])},Object(s.mapMutations)(["views"]),{methods:{enterSearch:function(t){13===t.keyCode&&(t.preventDefault(),this.search())},sortOut:function(t){0!=this.datas.length&&(console.log("得到的信息",t),l=1,this.datas=[],this.order_field=t.order_field,this.order_by=t.order_by,this.gotoSearch(l))},handleTopChange:function(t){this.topStatus=t},loadTop:function(){this.$refs.loadmore.onTopLoaded()},loadBottom:function(){console.log("加载更多启动"),l++,this.gotoSearch(l),this.$refs.loadmore.onBottomLoaded()},slider:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;t.amout=!(e<80)}},goback:function(){this.$router.go(-1)},search:function(){l=1,this.datas=[],this.gotoSearch(l,!1)},gotoSearch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=(!(arguments.length>1&&void 0!==arguments[1])||arguments[1],JSON.parse(this.$route.params.id));$http.get("plugin.micro.frontend.controllers.MicroShop.search-goods",{"search[keyword]":this.inputs,page:e,"search[category]":o,order_field:this.order_field,order_by:this.order_by,"search[couponid]":this.$route.params.coupon}).then(function(e){if(1==e.result){var o;if(t.loading=!1,t.allLoaded=!1,e.data.data.length<=0)return t.loading=!0,void(t.allLoaded=!0);if(e.data.current_page>e.data.last_page)return t.loading=!0,void(t.allLoaded=!0);if((o=t.datas).push.apply(o,a()(e.data.data)),e.data.data.length<20)return t.loading=!0,void(t.allLoaded=!0)}})}},beforeRouteLeave:function(t,e,o){window.MCateScrollTop=document.documentElement.scrollTop||document.body.scrollTop,o()},activated:function(){var t=JSON.parse(localStorage.getItem("mailLanguage"));t.micro?this.fun.setWXTitle(t.micro.title+"商品"):this.fun.setWXTitle("微店商品"),this.amout=!1,this.slider(),this.wrapperHeight=document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top,window.location.href.indexOf("#/microShopShare/micro_share_catelist/")>-1&&setTimeout(function(){window.scrollTo(0,window.MCateScrollTop)},200),1===this.$route.params.fromHome&&(this.datas=[],this.order_field="",this.order_by="",l=1,this.gotoSearch(l))},created:function(){var t=JSON.parse(localStorage.getItem("mailLanguage"));t.micro?this.fun.setWXTitle(t.micro.title+"商品"):this.fun.setWXTitle("微店商品"),1!==this.$route.params.fromHome&&(this.datas=[],this.order_field="",this.order_by="",l=1,this.gotoSearch(l))},mounted:function(){this.slider(),window.MCateScrollTop=0},components:{cGoodsList:d.a,cSort:c.a}}),p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"search",transition:"fadeInLeft"}},[o("div",{staticClass:"uou",class:{mout:t.amout},style:{width:3==t.fun.getPhoneEnv()?"375px":""},attrs:{id:"soso"}},[o("div",{staticClass:"search"},[o("mt-button",{staticStyle:{background:"#fff","box-shadow":"none"},attrs:{slot:"prepend",icon:"back"},on:{click:t.goback},slot:"prepend"}),t._v(" "),o("div",{staticClass:"searchBox"},[o("form",{attrs:{action:"#"},on:{submit:function(t){t.preventDefault()}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs,expression:"inputs"}],attrs:{type:"search",placeholder:"搜索当前分类商品"},domProps:{value:t.inputs},on:{keypress:t.enterSearch,input:function(e){e.target.composing||(t.inputs=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"img-icon",on:{click:t.search}},[o("div",{staticClass:"img-icon-btn"})])]),t._v(" "),o("van-col",{staticStyle:{"margin-top":"0.8rem"},attrs:{span:1}},[o("i",{directives:[{name:"show",rawName:"v-show",value:t.view,expression:"view"}],staticClass:"fa fa-th-large",on:{click:function(e){return t.$store.commit("views")}}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:!t.view,expression:"!view"}],staticClass:"fa fa-th-list",on:{click:function(e){return t.$store.commit("views")}}})])],1),t._v(" "),o("c-sort",{attrs:{goods:t.datas,text:"搜索结果"},on:{sortIn:t.sortOut}})],1),t._v(" "),o("div",{staticStyle:{height:"82px",display:"block"}}),t._v(" "),o("div",{ref:"wrapper",staticClass:"page-loadmore-wrapper",style:{height:t.wrapperHeight+"px"}},[o("mt-loadmore",{ref:"loadmore",attrs:{"top-method2":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,topPullText:"",topDropText:"",topLoadingText:"",bottomPullText:"",bottomDropText:"下拉加载...",bottomLoadingText:""},on:{"top-status-change2":t.handleTopChange}},[o("c-goodsList",{staticClass:"osll",attrs:{goods:t.datas,text:"搜索结果",loading:t.loading}})],1)],1)])},staticRenderFns:[]};var u=o("VU/8")(h,p,!1,function(t){o("AAca")},"data-v-dc792c26",null);e.default=u.exports},AAca:function(t,e,o){var n=o("S4YA");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("15101483",n,!0,{})},S4YA:function(t,e,o){var n=o("kxFB");(t.exports=o("FZ+f")(!1)).push([t.i,"\n#search .osll[data-v-dc792c26] {\n  min-height: 100vh;\n  margin-top: 1.2vw;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n#search .page-loadmore-wrapper2[data-v-dc792c26] {\n  height: 100vh;\n  overflow: hidden;\n}\n#search .uou[data-v-dc792c26] {\n  position: fixed;\n  z-index: 99;\n  top: 0px;\n  transition: 0.2s;\n  -webkit-transition: 0.2s;\n  width: 100%;\n}\n#search .mout[data-v-dc792c26] {\n  top: -2.25rem;\n}\n.search[data-v-dc792c26] {\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 0.0625rem solid #f5f5f5;\n  width: 100%;\n  /*.el-button.el-button--default {*/\n  /*float: left;*/\n  /*width: 10%;*/\n  /*border: none;*/\n  /*padding-top: 1rem;*/\n  /*}*/\n}\n.search .mint-button.mint-button--default[data-v-dc792c26] {\n    float: left;\n    width: 10%;\n    border: none;\n    padding-top: 0.4rem;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n.search .el-input.el-input-group.el-input-group--append[data-v-dc792c26] {\n    float: left;\n    width: 80%;\n    margin-left: 2%;\n    height: 2.8125rem;\n}\n.search .el-input-group__append .el-button.el-button--default[data-v-dc792c26] {\n    background: #f2f2f2;\n    padding-top: 0.25rem;\n    line-height: 1rem;\n    padding-right: 1.8125rem;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-radius: 0 3.125rem 3.125rem 0;\n}\n.search .el-input.el-input-group.el-input-group--append .el-input-group__append[data-v-dc792c26] {\n    background: #f2f2f2;\n}\n.search .el-col-1[data-v-dc792c26] {\n    margin: 0.75rem 0rem;\n    color: #666;\n    font-size: 16px;\n}\n.search .searchBox[data-v-dc792c26] {\n    position: relative;\n    font-size: 14px;\n    display: inline-table;\n    float: left;\n    width: 80%;\n    margin-left: 2%;\n    height: 2.8125rem;\n}\n.search .searchBox input[data-v-dc792c26] {\n      vertical-align: middle;\n      border: none;\n      background: #f2f2f2 none;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      outline: 0;\n      padding: 0.1875rem 0.625rem;\n      height: 1.875rem;\n      line-height: 1.875rem;\n      margin-top: 0.5rem;\n      color: #8c8c8c;\n      font-size: 14px;\n      width: 17.75rem;\n      border-radius: 0.9375rem;\n      z-index: 10;\n}\n.search .searchBox .img-icon[data-v-dc792c26] {\n      border: none;\n      color: #a9a9a9;\n      display: table-cell;\n      position: relative;\n      border-radius: 0;\n      height: 1.875rem;\n      top: 0.0625rem;\n      opacity: 2;\n      left: -2.25rem;\n}\n.search .searchBox .img-icon .img-icon-btn[data-v-dc792c26] {\n        position: absolute;\n        z-index: 12;\n        width: 1rem;\n        height: 1rem;\n        top: 50%;\n        left: 50%;\n        margin-left: -0.5rem;\n        margin-top: -0.5rem;\n        background: url("+n(o("NzrC"))+") no-repeat center center;\n        background-size: 80% 80%;\n}\n",""])}});