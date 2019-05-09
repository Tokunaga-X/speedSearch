
var btn=document.getElementById('btn')

btn.onclick=function(){
    var text=document.getElementById("input")
    window.open("https://www.zhihu.com/search?type=content&q=" + encodeURI(input.value))
}
