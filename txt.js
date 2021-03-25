/**
 * @author kbj
 */
var txt = {   

    init : function(){
        var _this = this;
        _this.registEvent();
    }

    ,registEvent : function(){
        var _this = this;
        $("#down").on("click",function(){
            // params { txt_file_title , txt_file_content}
            _this.saveToFile_Chrome("test_txt.txt", "텍스트 파일을 다운받습니다.");
        });
    }
    // IE or Not IE Check
    ,isIE : function(){
        return (navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) ||
        navigator.userAgent.toLowerCase().indexOf("msie") !== -1;
    }

    // If IE
    ,saveToFile_IE : function(fileName, content){
        var blob = new Blob([content], { type: "text/plain", endings: "native" });
        window.navigator.msSaveBlob(blob, fileName);
        //window.navigator.msSaveOrOpenBlob(blob, fileName);
    }

    // If Not IE
    ,saveToFile_Chrome : function(fileName, content){
        var blob = new Blob([content], { type: 'text/plain' });
        objURL = window.URL.createObjectURL(blob);
                
        if (window.__Xr_objURL_forCreatingFile__) {
            window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
        }
        window.__Xr_objURL_forCreatingFile__ = objURL;
        var a = document.createElement('a');
        a.download = fileName;
        a.href = objURL;
        a.click();
    }
}

$(function(){
    txt.init();
})