/*
    作者:helang
    邮箱:helang.love@qq.com
    jQuery插件库:http://www.jq22.com/mem395541
    CSDN博客:https://blog.csdn.net/u013350495
    微信公众号:web-7258
*/

;$.extend({
    HLidiom:function (params,data) {
        var helang={
            /* 配置 */
            config:{},
            /* 元素 */
            els:{},
            /* 已选择 */
            selectedArr:[],
            /* 待选择 */
            selectArr:[],
            /* 数据源 */
            listData:[],
            /* 添加选择 */
            addSelect:function(){

            },
            /* 删除选择 */
            delSelect:function(){

            },
            /* 随机排序 */
            randomSort:function(){
                return Math.random()>.5 ? -1 : 1;   //通过随机产生0到1的数，然后判断是否大于0.5从而影响排序，产生随机性的效果。
            },
            /* 设置选择 */
            setSelect:function(){
                var selectStr="";
                this.selectArr.forEach(function (v,i) {
                    selectStr+='<div><div class="item" data-index="'+i+'">'+ v +'</div></div>';
                });

                this.els.select.html(selectStr);
            },
            /* 设置关卡 */
            setPass:function(val){
                this.els.pass.html(val);
            },
            /* 设置金币 */
            setGold:function(val){
                this.els.gold.html(val);
            },
            /* 设置已选择 */
            setSelected:function(){
                var selectedStr="";
                for(var i=0; i<4; i++){
                    if(this.selectedArr[i] && this.selectedArr[i].txt){
                        selectedStr+='<div><div class="item" data-index="'+i+'">'+ this.selectedArr[i].txt +'</div></div>';
                    }else {
                        selectedStr+='<div><div class="item"></div></div>';
                    }
                }
                this.els.selected.html(selectedStr);
            },
            /* 修改已选择数据 */
            setSelectedData:function(j,v){
                for(var i=0;i<4;i++){
                    if(!this.selectedArr[i] || !this.selectedArr[i].txt){
                        this.selectedArr[i]={
                            index:j,
                            txt:v
                        };
                        break;
                    }
                }
                this.setSelected();
            },
            /* 下一关 */
            nextPass:function(){
                if(this.config.pass>=(this.listData.length-1)){
                    alert('恭喜通关');
                    return;
                }

                /* 获取当前数据 */

                var db=this.listData[this.config.pass];
                db[1]=db[1].split("").sort(this.randomSort);
                this.selectArr=db[1];
                this.selectedArr=[];
                this.setSelect();
                this.setSelected();

                /* 每过 1 关增加 5 个金币 */
                if(this.config.pass>0){
                    this.config.gold=this.config.gold+5;
                }
                this.setGold(this.config.gold);

                this.setPass(this.config.pass+1);

                this.els.img.css("background-image","url(img/"+db[0]+")");
            },
            /* 答案检测 */
            verify:function(){
                var str="";
                for(var i=0;i<4;i++){
                    if(this.selectedArr[i] && this.selectedArr[i].txt){
                        str+=this.selectedArr[i].txt
                    }
                }
                if(str==this.listData[this.config.pass][2]){
                    alert('解释：'+this.listData[this.config.pass][3]);
                    this.config.pass++;
                    this.nextPass();
                }
            },
            /* 提示功能 */
            reminder:function(){
                if(this.config.gold<10){
                    alert("没有足够的金币");
                    return;
                }
                /* 寻找当前需要填充的序号 */
                var sed=-1;
                for (var x=0;x<4;x++){
                    if(!this.selectedArr[x] || !this.selectedArr[x].txt){
                        sed=x;
                        break;
                    }
                }
                /* 寻找当前答案所在的位置 */
                var s=-1,st=this.listData[this.config.pass][2].charAt(sed);
                for (var y=0;y<this.selectArr.length;y++){
                    if(this.selectArr[y]==st){
                        s=y;
                        break;
                    }
                }

                this.setSelectedData(s,st);
                this.selectArr[s]='';
                this.setSelect();
                this.verify();

                this.config.gold=this.config.gold-10;
                this.setGold(this.config.gold);
            },
            /* 初始化 */
            init:function () {

                this.config={
                    pass:params.pass || 0,
                    gold:params.gold || 10
                };

                this.listData=data;

                this.els={
                    pass:$("#hl-pass"),
                    gold:$("#hl-gold"),
                    select:$("#hl-select"),
                    selected:$("#hl-selected"),
                    img:$("#hl-img"),
                    reminder:$("#hl-reminder"),
                    about:$("#hl-about")
                };

                this.nextPass();

                /* 事件监听 */
                this.els.select.on("click",".item",function () {
                    var i=$(this).data("index"),t=$(this).html();
                    helang.setSelectedData(i,t);
                    helang.selectArr[i]='';
                    helang.setSelect();
                    helang.verify();
                });

                this.els.selected.on("click",".item",function () {
                    var i=$(this).data("index"),t=$(this).html();

                    helang.selectArr[helang.selectedArr[i].index]=t;
                    helang.selectedArr[i]={};
                    helang.setSelect();
                    helang.setSelected();
                    helang.verify();
                });

                this.els.reminder.click(function () {
                    helang.reminder();
                });

                this.els.about.click(function () {
                    helang.about();
                });
            },
            /* 关于 */
            about:function () {
                alert('星益博客：blog.96xy.cn');
            }
        };

        helang.init();
   }
});