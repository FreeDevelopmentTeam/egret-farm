// TypeScript file

/**
 * Farmland extends eui.Component
 */




class Farmland extends eui.Component {
    //土地默认
    public farm_land_normal: eui.Image = null;;


    public need_anim: eui.Component = null;
    //土地面积
    public farm_land_area: eui.Label = null;
    public farm_land_cai: eui.Image = null;


    //土地详情
    public farm_land_detail: eui.Image = null;

    //蔬菜动画组
    private cai_anim: egret.tween.TweenGroup;



    //创建时传入土地id
    public CreateLandId: Number = null


    //ui对象组
    private ui_objs: eui.UIComponent[] = new Array();
    //回调方法组
    private func_calls: Function[] = new Array();
    //----静态成员----//



    //施肥等操作资源路径组
    public static need_srcs: string[] = new Array();
    //计数标记【只是做例子用不一定非这样】
    public static indexs: number = 0;
    constructor(CLid: Number, landArea) {
        super()
        this.addEventListener(eui.UIEvent.COMPLETE, this.OnComplete, this);
        this.skinName = "resource/myskins/farm_land.exml";



        //土地id
        this.CreateLandId = CLid

        //土地面积
        this.farm_land_area.text = `${landArea}㎡`
    }

    private OnComplete() {

        this.ui_objs.push(this.farm_land_normal);
        this.func_calls.push(this.land_handle.bind(this, this.farm_land_detail));
        this.ClickEvent_Listerner(this.ui_objs, this.func_calls);
        // this.farm_land_normal.addEventListener(egret.TouchEvent.TOUCH_TAP,this.land_anim.bind,this)

    }

    //点击注册事件方法[ui_objs:响应对象组 callbacks:回调方法组]
    private ClickEvent_Listerner(ui_objs: eui.UIComponent[], callbacks: Function[]) {
        let leng: number = callbacks.length;
        if (ui_objs.length != leng) { return; }
        for (let i = 0; i < leng; i++) {
            ui_objs[i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, callbacks[i], ui_objs[i]);
        }
    }

    //土地处理
    private land_handle(farm_land_detail) {
        console.log("土地处理");
        console.log(this.CreateLandId)

        this.farm_land_detail.visible = true
        setTimeout(() => {

            this.farm_land_detail.visible = false
        }, 3000)
    }

    //蔬菜动画开始
    public start_anim() {
        this.cai_anim.play(0);
    }

    //蔬菜动画停止
    public end_anim() {
        this.cai_anim.stop();
    }


    //土地图片变化
    public change_Landpic(land_src: string) {
        this.farm_land_normal.source = land_src;

    }

    public change_Caipic(Cai_src: string) {
        this.farm_land_cai.source = Cai_src;

    }



}