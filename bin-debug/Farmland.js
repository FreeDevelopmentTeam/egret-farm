// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Farmland extends eui.Component
 */
var Farmland = (function (_super) {
    __extends(Farmland, _super);
    function Farmland(CLid) {
        var _this = _super.call(this) || this;
        //土地默认
        _this.farm_land_normal = null;
        _this.need_anim = null;
        _this.farm_land_area = null;
        _this.farm_land_cai = null;
        //土地详情
        _this.farm_land_detail = null;
        //创建时传入土地id
        _this.CreateLandId = null;
        //ui对象组
        _this.ui_objs = new Array();
        //回调方法组
        _this.func_calls = new Array();
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.OnComplete, _this);
        _this.skinName = "resource/myskins/farm_land.exml";
        // Farmland.need_srcs.push(ScType[0], ScType[1], ScType[2]);
        _this.CreateLandId = CLid;
        return _this;
    }
    ;
    Farmland.prototype.OnComplete = function () {
        this.ui_objs.push(this.farm_land_normal, this.farm_land_cai);
        this.func_calls.push(this.land_handle.bind(this, this, this), this.cai_handle.bind(this, this.farm_land_detail));
        this.ClickEvent_Listerner(this.ui_objs, this.func_calls);
        // this.farm_land_normal.addEventListener(egret.TouchEvent.TOUCH_TAP,this.land_anim.bind,this)
    };
    //点击注册事件方法[ui_objs:响应对象组 callbacks:回调方法组]
    Farmland.prototype.ClickEvent_Listerner = function (ui_objs, callbacks) {
        var leng = callbacks.length;
        if (ui_objs.length != leng) {
            return;
        }
        for (var i = 0; i < leng; i++) {
            ui_objs[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, callbacks[i], ui_objs[i]);
        }
    };
    //土地处理
    Farmland.prototype.land_handle = function () {
        console.log("土地处理");
        // this.start_anim()
    };
    // //播放土地动画
    // private land_anim(){
    //      this.start_anim()
    // }
    //蔬菜动画开始
    Farmland.prototype.start_anim = function () {
        this.cai_anim.play(0);
    };
    //蔬菜动画停止
    Farmland.prototype.end_anim = function () {
        this.cai_anim.stop();
    };
    //点击弹窗
    Farmland.prototype.cai_handle = function (farm_land_detail) {
        console.log('蔬菜点击弹窗');
        this.farm_land_detail.visible = true;
    };
    // //可扩地处理
    // private not_land_handle() {
    //     console.log("可扩地处理");
    //     //在事件监听的回调函数中this指向当前回调的对象
    //     this.visible = false;
    // }
    // //菜处理
    // private cai_handle() {
    //     console.log("菜菜处理");
    //     this.visible = false;
    // }
    //资源图片更换
    // public change_picture(src: string, ui_obj: eui.Image) {
    //     ui_obj.source = src;
    // }
    //土地图片变化
    Farmland.prototype.change_Landpic = function (land_src) {
        this.farm_land_normal.source = land_src;
    };
    Farmland.prototype.change_Caipic = function (Cai_src) {
        this.farm_land_cai.source = Cai_src;
    };
    //----静态成员----//
    //施肥等操作资源路径组
    Farmland.need_srcs = new Array();
    //计数标记【只是做例子用不一定非这样】
    Farmland.indexs = 0;
    return Farmland;
}(eui.Component));
__reflect(Farmland.prototype, "Farmland");
