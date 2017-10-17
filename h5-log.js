/**
 * Created by jettylee on 2017/8/17.
 * TODO 1.添加
 *
 */



var H5Log = {
    container:null,
    btnH5Log:null,
    maxCacheSize:1000,//最大缓存大小
    getItem:function () {

    },
    setItem:function (k,v) {

    },
    init:function () {
        if(!this.debug){return;}
        document.body.innerHTML += '<div class="h5-log-close" style="display:none;position: fixed;z-index: 9999; font-size: 14px; color: white; bottom: 60%; right: 0px; background: #000333; padding: 5px;">关闭</div>';
        document.body.innerHTML += '<div class="h5-log-container twisterInUp magictime" style="padding:10px;overflow:auto;word-break:break-all;display: none;width: 100%;height: 60%;position: fixed;z-index: 9999;bottom: 0;right: 0;background: rgba(0,0,0,0.6);color: white;font-size: 12px;"></div>';
        document.body.innerHTML += '<div class="btn-h5-log" style="position: fixed; width: 50px; height: 50px; right: 10px; bottom: 50px; background: green; border-radius: 50%; line-height: 50px; font-size: 16px; text-align: center; color: chartreuse; z-index: 9999;">日志</div>';
        document.head.innerHTML += '<style> .tinRightIn { animation-name: tinRightIn } @keyframes tinRightIn { 0% { opacity: 0; transform: scale(1, 1) translateX(900%) } 50%, 70%, 90% { opacity: 1; transform: scale(1.1, 1.1) translateX(0) } 100%, 60%, 80% { opacity: 1; transform: scale(1, 1) translateX(0) } } .tinRightOut { animation-name: tinRightOut } @keyframes tinRightOut { 0%, 20%, 40%, 50% { opacity: 1; transform: scale(1,1) translateX(0) } 10%, 30% { opacity: 1; transform: scale(1.1, 1.1) translateX(0) } 100% { opacity: 0; transform: scale(1, 1) translateX(900%) } } .magictime { animation-duration: 1s; animation-fill-mode: both } </style>';
        this.container = document.querySelector('.h5-log-container');
        this.btnH5Log = document.querySelector('.btn-h5-log');
        var btnClose = document.querySelector('.h5-log-close');
        var that = this;
        this.btnH5Log.onclick = function () {
            that.container.style.display = 'block';
            that.btnH5Log.style.display = 'none';
            btnClose.style.display = 'block';
            this.style.className = 'h5-log-close';
            that.container.className = 'h5-log-container tinRightIn magictime';
        }

        btnClose.onclick = function () {
            // that.container.style.display = 'none';
            that.btnH5Log.style.display = 'block';
            this.style.display = 'none';
            this.style.className = 'tinRightOut magictime';
            that.container.className = 'tinRightOut magictime';
        }


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

/**
 * @param {String}  errorMessage   错误信息
 * @param {String}  scriptURI      出错的文件
 * @param {Long}    lineNumber     出错代码的行号
 * @param {Long}    columnNumber   出错代码的列号
 * @param {Object}  errorObj       错误的详细信息，Anything
 */
window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {


    H5Log.log("错误信息：" +errorMessage);
    H5Log.log("出错文件：" + scriptURI);
    H5Log.log("出错行号：" + lineNumber);
    H5Log.log("出错列号：" + columnNumber);
    H5Log.log("错误详情：" + errorObj);
    H5Log.btnH5LogWarning();
}
var console = {};
console.log = H5Log.log;