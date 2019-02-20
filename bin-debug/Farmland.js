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
// enum landType{"luobo_0_png","luobo_1-png","bocai_0_png","bocai_1_png"};
// enum ScType { "need_water_png", "need_fertilize_png", "need_weed_png" };
//土地类
var Farmland = (function (_super) {
    __extends(Farmland, _super);
    function Farmland() {
        var _this = _super.call(this) || this;
        //土地默认
        _this.farm_land_normal = null;
        //土地图片
        _this.farm_land_seed = null;
        //可扩地图片
        _this.not_land = null;
        //长菜图片
        _this.cai = null;
        //施肥操作需求等动画
        _this.need_anim = null;
        //ui对象组
        _this.ui_objs = new Array();
        //回调方法组
        _this.func_calls = new Array();
        _this.addEventListener(eui.UIEvent.COMPLETE, _this.OnComplete, _this);
        _this.skinName = "resource/myskins/farm_land.exml";
        Farmland.need_srcs.push(ScType[0], ScType[1], ScType[2]);
        return _this;
    }
    ;
    Farmland.prototype.OnComplete = function () {
        //创建动画
        this.need_anim = new control_anim();
        this.need_anim.skinName = "resource/myskins/anim.exml";
        this.need_anim.x = 120;
        this.need_anim.y = 40;
        this.need_anim.start_anim();
        this.addChild(this.need_anim);
        this.ui_objs.push(this.farm_land_seed, this.not_land, this.cai, this.need_anim);
        this.func_calls.push(this.land_handle, this.not_land_handle, this.cai_handle, this.anim_handle);
        this.ClickEvent_Listerner(this.ui_objs, this.func_calls);
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
    };
    //可扩地处理
    Farmland.prototype.not_land_handle = function () {
        console.log("可扩地处理");
        //在事件监听的回调函数中this指向当前回调的对象
        this.visible = false;
    };
    //菜处理
    Farmland.prototype.cai_handle = function () {
        console.log("菜菜处理");
        this.visible = false;
    };
    //资源图片更换
    Farmland.prototype.change_picture = function (src, ui_obj) {
        ui_obj.source = src;
    };
    //土地图片变化
    Farmland.prototype.change_Landpic = function (land_src) {
        this.farm_land_normal.source = land_src;
    };
    //施肥等动画处理
    Farmland.prototype.anim_handle = function (event) {
        console.log(event);
        var curr = event.currentTarget;
        Farmland.indexs += 1;
        if (Farmland.indexs >= 3) {
            Farmland.indexs = 0;
        }
        curr.change_image(Farmland.need_srcs[Farmland.indexs]);
        console.log("动画处理");
    };
    //----静态成员----//
    //施肥等操作资源路径组
    Farmland.need_srcs = new Array();
    //计数标记【只是做例子用不一定非这样】
    Farmland.indexs = 0;
    return Farmland;
}(eui.Component));
__reflect(Farmland.prototype, "Farmland");
