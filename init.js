/**
 * Created by jackShall on 2016/7/12.
 */
var demoApp = new Vue({
    el: '#demoApp',
    data: {
        demoData: [],
        scrollerHeight: ''
    },
    created: function() {
        var that = this;
        $.getJSON('iscroll-json.json',function(res){
            that.demoData = res;

            //先初始化scroller的高度
            scrollerHeight = res.length * 65;
            $('.list').css('height', scrollerHeight + 'px');
            //初始化插件
            var myScroll = new IScroll('#wrapper', {probeType: 1});

            //滚动监听
            myScroll.on('scroll', function() {
                //滚到底部时加载数据
                if(-(this.y - $(window).height()) >= this.scrollerHeight){

                    $.getJSON('iscroll-json.json',function(res2){
                        //因为加载的是本地的数据，加个定时器模拟一下加载效果
                        setTimeout(function(){
                            //这个for循环是更新vue渲染列表的数据
                            for(var i = 0; i < res2.length; i++){
                                that.demoData.push(res2[i]);
                            }

                            //更新一下scroller的高度
                            scrollerHeight += res2.length * 65;
                            $('.list').css('height', scrollerHeight + 'px');
                            //用iScroll自带的方法更新一下myScroll实例
                            myScroll.refresh();
                        },1000);
                    })
                }
            });
        })
    }
});
