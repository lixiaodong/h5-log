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

//重写console方法
var console = {};
console.log = H5Log.log;
console.warn = H5Log.warn;
console.info = H5Log.info;
console.error = H5Log.error;