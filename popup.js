
var btn=document.getElementById('btn')

window.onload=function(){
    document.getElementById("input").focus();
}

btn.onclick=function(){
    var text=document.getElementById("input")
    if(input.value==""){
        console.log("empty!")
    }
    else{
        window.open("https://www.zhihu.com/search?type=content&q=" + encodeURI(input.value))
    }
}
