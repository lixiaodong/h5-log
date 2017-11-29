/**
 * Created by jettylee on 2017/8/17.
 * TODO 1.添加
 *
 */



var H5Log = {
    container:null,
    btnH5Log:null,
    toolBar:null,
    maxCacheSize:1000,//最大缓存大小
    css:'.h5-log-refresh,.h5-log-tool-bar{font-size:14px;bottom:420px;background:#000333;padding:5px}.tinRightIn{-webkit-animation-name:tinRightIn;animation-name:tinRightIn}@-webkit-keyframes tinRightIn{0%{opacity:0;-webkit-transform:scale(1,1) translateX(900%);transform:scale(1,1) translateX(900%)}50%,70%,90%{opacity:1;-webkit-transform:scale(1.1,1.1) translateX(0);transform:scale(1.1,1.1) translateX(0)}100%,60%,80%{opacity:1;-webkit-transform:scale(1,1) translateX(0);transform:scale(1,1) translateX(0)}}@keyframes tinRightIn{0%{opacity:0;-webkit-transform:scale(1,1) translateX(900%);transform:scale(1,1) translateX(900%)}50%,70%,90%{opacity:1;-webkit-transform:scale(1.1,1.1) translateX(0);transform:scale(1.1,1.1) translateX(0)}100%,60%,80%{opacity:1;-webkit-transform:scale(1,1) translateX(0);transform:scale(1,1) translateX(0)}}.tinRightOut{-webkit-animation-name:tinRightOut;animation-name:tinRightOut}@-webkit-keyframes tinRightOut{0%,20%,40%,50%{opacity:1;-webkit-transform:scale(1,1) translateX(0);transform:scale(1,1) translateX(0)}10%,30%{opacity:1;-webkit-transform:scale(1.1,1.1) translateX(0);transform:scale(1.1,1.1) translateX(0)}100%{opacity:0;-webkit-transform:scale(1,1) translateX(900%);transform:scale(1,1) translateX(900%)}}@keyframes tinRightOut{0%,20%,40%,50%{opacity:1;-webkit-transform:scale(1,1) translateX(0);transform:scale(1,1) translateX(0)}10%,30%{opacity:1;-webkit-transform:scale(1.1,1.1) translateX(0);transform:scale(1.1,1.1) translateX(0)}100%{opacity:0;-webkit-transform:scale(1,1) translateX(900%);transform:scale(1,1) translateX(900%)}}.magictime{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.h5-log-refresh{position:fixed;z-index:9999;color:#fff;right:40px}.h5-log-container,.h5-log-tool-bar{right:0;color:#fff;position:fixed;z-index:9999}.h5-log-tool-bar{display:block}.h5-log-container{padding:10px;overflow:auto;word-break:break-all;display:none;width:100%;height:60%;bottom:0;background:rgba(0,0,0,.6);font-size:12px}.btn-h5-log{position:fixed;width:50px;height:50px;right:10px;bottom:50px;background:green;border-radius:50%;line-height:50px;font-size:16px;text-align:center;color:#7fff00;z-index:9999}',
    getItem:function () {

    },
    setItem:function (k,v) {

    },
    showElement:function () {

    },
    init:function () {
        if(!this.debug){return;}

        var html = '<div class="h5-log-tool-bar">';
        html += '<div class="h5-log-btn-look" style="">查看</div>';
        html += '<span class="h5-log-close" style="">关闭</span>';
        html += '<span class="h5-log-refresh" onclick="location.reload(true)" >刷新</span>';
        html += '</div>';
        document.body.innerHTML += html;

        document.body.innerHTML += '<div class="h5-log-container twisterInUp magictime"></div>';
        document.body.innerHTML += '<div class="btn-h5-log">日志</div>';
        document.head.innerHTML += '<style>'+this.css+'</style>';

        this.container = document.querySelector('.h5-log-container');
        this.btnH5Log = document.querySelector('.btn-h5-log');
        this.toolBar = document.querySelector('.h5-log-tool-bar');
        var btnClose = document.querySelector('.h5-log-close');
        var that = this;
        this.btnH5Log.onclick = function () {
            that.container.style.display = 'block';
            that.btnH5Log.style.display = 'none';
            that.toolBar.style.display = 'block';
            this.style.className = 'h5-log-close';
            that.container.className = 'h5-log-container tinRightIn magictime';
        }

        btnClose.onclick = function () {
            // that.container.style.display = 'none';
            that.btnH5Log.style.display = 'block';
            that.toolBar.style.display = 'none';
            this.style.className = 'tinRightOut magictime';
            that.container.className = 'tinRightOut magictime';
        }


    },

    initEvent:function () {

    },

    debug:true,
    log:function (msg) {
        if(typeof msg =='object'){
            msg = JSON.stringify(msg);
        }
        var date = new Date();
        var d = (date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds();
        H5Log.container.innerHTML += d+'->'+msg+'</br></br>';
        H5Log.container.scrollTop=H5Log.container.scrollHeight;
    },
    btnH5LogWarning:function () {
        this.btnH5Log.style.backgroundColor='red';
    }



};

H5Log.init();

