webpackJsonp([465],{"07in":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mvHQ"),i=a.n(n),r=a("Pexp"),o=a("Tg7E"),l={data:function(){return{ratetextshow:["极差","失望","一般","满意","惊喜"],ratetext:{text1:"惊喜",text2:"惊喜"},toi:this.fun.getKeyByI(),good:"",order_id:"",api:"",content:"",level:5,level2:5,order:"",comment:"",distributor:{},order_list:[],type:""}},methods:{getStar_:function(e){console.log(e),this.ratetext.text1=this.ratetextshow[e-1]},getStar_2:function(e){console.log(e),this.ratetext.text2=this.ratetextshow[e-1]},toComment:function(e){var t=this;0==this.comment.length?Object(o.MessageBox)({title:"提示",message:"您还没有输入相关的评论内容",showCancelButton:!0}).then(function(a){"confirm"==a&&t.submitData(e)}):this.submitData(e)},getDistributor:function(){var e=this;$http.get(e.getApi,e.data,"").then(function(t){1===t.result?(e.order_info=t.data,e.order_list=e.order_info.order_goods,e.distributor=e.order_info.distributor):o.MessageBox.alert(t.msg,"提示")},function(e){})},submitData:function(){var e=this,t={};"delivery"===this.type?t={distributor_order_id:e.order_id,distributor_id:e.distributor.id,provider_id:e.order_info.provider_id,content:this.comment,level:this.level}:"distributor"===this.type&&(t={distributor_order_id:e.order_id,distributor_id:e.distributor.id,content:this.comment,level:this.level,efficiency_level:this.level2});var a=i()(t);$http.post(e.api,{eltion:a}).then(function(t){1===t.result?(o.MessageBox.alert(t.msg,"提示"),e.$router.go(-1)):o.MessageBox.alert(t.msg,"提示")},function(e){})},initData:function(){this.comment="",this.order_list=[],this.distributor={},this.level=5,this.toi=this.fun.getKeyByI(),this.order_id=this.$route.params.order_id,this.api=this.$route.params.api,this.type=this.$route.params.name,"delivery"===this.type?(this.getApi="plugin.kingtimes.frontend.distributor.distributorOrderDetail",this.data={distributor_order_id:this.order_id}):"distributor"===this.type&&(this.getApi="plugin.kingtimes.frontend.order.orderDetail.index",this.data={order_id:this.order_id}),this.order_id?this.getDistributor():this.$router.push(this.fun.getUrl("member",{}))}},activated:function(){this.initData()},components:{cTitle:r.a}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"evaluate"}},[a("c-title",{attrs:{hide:!1,text:"评价"}}),e._v(" "),a("div",{staticStyle:{height:"40px"}}),e._v(" "),a("div",{attrs:{id:"shop"}},[a("div",{staticClass:"add"},[e._m(0),e._v(" "),"delivery"===e.type?a("ul",{staticClass:"add_center"},[a("li",[e._v("补货商："+e._s(e.distributor.realname)+" ("+e._s(e.distributor.mobile)+")")])]):e._e(),e._v(" "),"delivery"!==e.type?a("ul",{staticClass:"add_center"},[a("li",[e._v("配送站："+e._s(e.distributor.realname)+" "+e._s(e.distributor.mobile))])]):e._e()]),e._v(" "),e._l(e.order_list,function(t,n){return a("div",{key:n,staticClass:"goods"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.thumb}})]),e._v(" "),a("div",{staticClass:"warp"},[a("ul",{staticClass:"inner"},[a("li",{staticClass:"name"},[e._v(e._s(t.title))]),e._v(" "),t.goods_option_title?a("li",{staticClass:"option"},[e._v("规格: "+e._s(t.goods_option_title))]):e._e()]),e._v(" "),a("ul",{staticClass:"price"},[a("li",{staticClass:"product_price"},[a("small",[e._v("¥")]),e._v(e._s((Number(t.goods_price)/t.total).toFixed(2))+"\n          ")]),e._v(" "),a("li",{staticClass:"option"},[e._v(" ×"+e._s(t.total))])])])])}),e._v(" "),a("div",{attrs:{id:"pjall"}},["delivery"===e.type?a("div",{staticClass:"pj clearfloat"},[a("span",[e._v("评分:")]),e._v(" "),a("van-rate",{on:{change:e.getStar},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}}),e._v(" "),a("span",[e._v(e._s(e.ratetext.text1))])],1):e._e(),e._v(" "),"delivery"!==e.type?a("div",{staticClass:"pj clearfloat"},[a("span",[e._v("满意度:")]),e._v(" "),a("van-rate",{on:{change:e.getStar},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}}),e._v(" "),a("span",[e._v(e._s(e.ratetext.text1))])],1):e._e(),e._v(" "),"delivery"!==e.type?a("div",{staticClass:"pj clearfloat"},[a("span",[e._v("    时效:")]),e._v(" "),a("van-rate",{on:{change:e.getStar_2},model:{value:e.level2,callback:function(t){e.level2=t},expression:"level2"}}),e._v(" "),a("span",[e._v(e._s(e.ratetext.text2))])],1):e._e(),e._v(" "),a("div",{staticStyle:{height:"0.625rem"}}),e._v(" "),a("van-cell-group",[a("van-field",{attrs:{type:"textarea",placeholder:"请输入评论内容",rows:"2"},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1)],1)],2),e._v(" "),a("div",{staticClass:"submit-tbn"},[a("mt-button",{attrs:{type:"default"},on:{click:e.toComment}},[e._v("提交评价")])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"add_left"},[t("i",{staticClass:"iconfont icon-icon_location"})])}]};var s=a("VU/8")(l,d,!1,function(e){a("R5NV")},"data-v-3aaef3ef",null);t.default=s.exports},R5NV:function(e,t,a){var n=a("vZNt");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("83a52808",n,!0,{})},vZNt:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,'\n@charset "UTF-8";\n#evaluate[data-v-3aaef3ef] {\n  /*清除浮动代码*/\n}\n#evaluate #shop[data-v-3aaef3ef] {\n    background: #FFF;\n    padding: 0.625rem 0 0 0;\n}\n#evaluate #shop .add[data-v-3aaef3ef] {\n      background-color: #fff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0.625rem 0.875rem;\n      text-align: left;\n}\n#evaluate #shop .add .add_left[data-v-3aaef3ef] {\n        width: 1.5rem;\n}\n#evaluate #shop .add .add_left i[data-v-3aaef3ef] {\n          font-size: 1.125rem;\n          line-height: 1.75rem;\n          text-align: center;\n          color: #666;\n}\n#evaluate #shop .add .add_center[data-v-3aaef3ef] {\n        line-height: 1.625rem;\n        font-size: 14px;\n}\n#evaluate #shop .add .add_center li[data-v-3aaef3ef]:first-child {\n          font-weight: bold;\n}\n#evaluate #shop .add .add_right[data-v-3aaef3ef] {\n        width: 1.5rem;\n        position: absolute;\n        right: 0;\n}\n#evaluate #shop .add .add_right i[data-v-3aaef3ef] {\n          font-size: 1.5rem;\n          line-height: 3.25rem;\n          text-align: center;\n          color: #c9c9c9;\n}\n#evaluate .goods[data-v-3aaef3ef]:after {\n    content: "";\n    display: block;\n    clear: both;\n}\n#evaluate .goods[data-v-3aaef3ef] {\n    /*display: flex;\n    align-items: stretch;\n    flex-flow: row wrap;\n    background: #efeded;\n    padding: 5px;\n    margin-bottom: 5px;\n    .img {\n      flex: 3;\n      img {\n        width: 100%;\n      }\n    }\n    .inner {\n      flex: 5;\n      padding: 0 5px;\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n    }\n    .name {\n      flex: 5;\n      text-align: left\n    }\n    .price {\n      flex: 2;\n      align-items: center;\n    }*/\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background: #fafafa;\n}\n#evaluate .goods .img[data-v-3aaef3ef] {\n      width: 6rem;\n      height: 6rem;\n      padding: 0.875rem;\n      display: inline-block;\n      /*background:blue;*/\n}\n#evaluate .goods .img img[data-v-3aaef3ef] {\n        width: 100%;\n}\n#evaluate .goods .warp[data-v-3aaef3ef] {\n      width: 70vw;\n      padding: 0.625rem 1rem 0 0;\n      display: inline-block;\n}\n#evaluate .goods .warp .inner[data-v-3aaef3ef] {\n        width: 70%;\n        float: left;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding: 0 0.625rem;\n        text-align: left;\n}\n#evaluate .goods .warp .inner .name[data-v-3aaef3ef] {\n          text-align: left;\n          color: #333333;\n          margin-bottom: 0.625rem;\n          font-size: 14px;\n}\n#evaluate .goods .warp .price[data-v-3aaef3ef] {\n        width: 30%;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        text-align: right;\n        color: #333333;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        float: left;\n}\n#evaluate .goods .warp .price p[data-v-3aaef3ef] {\n          margin-top: 0;\n}\n#evaluate .goods .product_price[data-v-3aaef3ef] {\n      margin-bottom: 0.625rem;\n      font-size: 14px;\n}\n#evaluate .goods .option[data-v-3aaef3ef] {\n      color: #8c8c8c;\n      font-size: 12px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#evaluate #pjall[data-v-3aaef3ef] {\n    background: #FFF;\n    padding: 0.625rem 0.875rem;\n}\n#evaluate #pjall .upfile[data-v-3aaef3ef] {\n      text-align: left;\n      margin-top: 0.625rem;\n}\n#evaluate #pjall .upfile li[data-v-3aaef3ef] {\n        width: 20vw;\n        float: left;\n        height: 20vw;\n        line-height: 20vw;\n}\n#evaluate #pjall .upfile i[data-v-3aaef3ef] {\n        font-size: 1rem;\n        border: 0.0625rem dashed #919191;\n        font-weight: normal;\n        color: #919191;\n        padding: 0.625rem;\n}\n#evaluate #pjall .upfile img[data-v-3aaef3ef] {\n        width: 100%;\n}\n#evaluate #pjall textarea[data-v-3aaef3ef] {\n      width: 87%;\n      margin-top: 0.625rem;\n      padding: 0.625rem;\n}\n#evaluate #pjall .pj[data-v-3aaef3ef] {\n      text-align: left;\n      padding-top: .5rem;\n}\n#evaluate #pjall .pj span[data-v-3aaef3ef] {\n        float: left;\n        font-size: 14px;\n        padding-right: 0.625rem;\n}\n#evaluate #pjall .pj .van-rate[data-v-3aaef3ef] {\n        float: left;\n}\n#evaluate #pjall .van-cell-group[data-v-3aaef3ef] {\n      border: 1px solid #bfcbd9;\n      border-radius: 4px;\n}\n#evaluate #pjall .van-cell-group .van-cell[data-v-3aaef3ef] {\n        border-radius: 4px;\n}\n#evaluate button[data-v-3aaef3ef] {\n    width: 90%;\n    margin-top: 1.25rem;\n    height: 2.25rem;\n}\n#evaluate .submit-tbn button[data-v-3aaef3ef] {\n    width: 90%;\n    background-color: #f15353;\n    height: 2.875rem;\n    border-radius: 0.25rem;\n    font-size: 16px;\n    color: #fff;\n    border: none;\n}\n#evaluate .clearfloat[data-v-3aaef3ef]:after {\n    display: block;\n    clear: both;\n    content: "";\n    visibility: hidden;\n    height: 0;\n}\n#evaluate .clearfloat[data-v-3aaef3ef] {\n    zoom: 1;\n}\n',""])}});