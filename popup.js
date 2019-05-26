"use strict"

var btn=document.getElementById('btn')
//设置打开页面光标就聚焦在输入栏
window.onload=function(){
    document.getElementById("input").focus();
}
//搜索功能实现
btn.onclick=function(){
    var text=document.getElementById("input")
    if(input.value==""){
        console.log("empty!")
    }
    else{
        var select=document.getElementById("select")
        if(select.value=="zhihu"){
            window.open("https://www.zhihu.com/search?type=content&q=" + encodeURI(input.value))
        }
        else if(select.value=="douban"){
            window.open("https://www.douban.com/search?source=suggest&q=" + encodeURI(input.value))
        }
        else if(select.value=="bilibili"){
            window.open("https://search.bilibili.com/all?keyword=" + encodeURI(input.value))
        }
        else if(select.value=="taobao"){
            window.open("https://s.taobao.com/search?q=" + encodeURI(input.value))
        }
    }
}
//设置回车等于点击按钮
document.getElementById('input').addEventListener("keyup",function(event){
    event.preventDefault()
    if (event.keyCode == 13) {
        document.getElementById('btn').click();
    }
})
