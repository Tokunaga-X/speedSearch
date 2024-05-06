"use strict"

// export const OPTIONS = [
//     { value: "google", text: "谷歌" },
//     { value: "baidu", text: "百度" },
//     { value: "zhihu", text: "知乎" },
//     { value: "douban", text: "豆瓣" },
//     { value: "bilibili", text: "B站" },
//     { value: "taobao", text: "淘宝" },
// ]

// // chrome.storage.sync.get("OptionList", ({ OptionList }) => {
// //     OptionList.forEach((item, index) => {
// //         OPTIONS[index].checked = item.checked
// //     })
// // })

// const select = document.getElementById("select")

// for (let i = 0; i < OPTIONS.length; i++) {
//     // if (!OPTIONS[i].checked) continue
//     const option = document.createElement("option")
//     option.value = OPTIONS[i].value
//     option.text = OPTIONS[i].text
//     select.appendChild(option)
// }

var searchInputElement = document.getElementById("input")
var searchButtonElement = document.getElementById("btn")
var searchSelectElement = document.getElementById("select")

//设置打开页面光标就聚焦在输入栏
window.onload = function () {
    searchInputElement.focus()
}

//设置回车等于点击按钮
searchInputElement.addEventListener("keyup", function (event) {
    event.preventDefault()
    if (event.keyCode === 13) {
        searchButtonElement.click()
    }
})

//搜索功能实现
searchButtonElement.onclick = function () {
    if (searchInputElement.value == "") {
        console.log("Search input is empty!")
        return
    }

    switch (searchSelectElement.value) {
        case "zhihu":
            openSearchPage(
                "https://www.zhihu.com/search?type=content&q=",
                searchInputElement.value
            )
            break
        case "douban":
            window.open(
                "https://www.douban.com/search?source=suggest&q=" +
                    encodeURI(searchInputElement.value)
            )
            break
        case "bilibili":
            window.open(
                "https://search.bilibili.com/all?keyword=" +
                    encodeURI(searchInputElement.value)
            )
            break
        case "taobao":
            window.open(
                "https://s.taobao.com/search?q=" +
                    encodeURI(searchInputElement.value)
            )
            break
        case "google":
            window.open(
                "https://www.google.com/search?q=" +
                    encodeURI(searchInputElement.value)
            )
            break
        case "baidu":
            window.open(
                "https://www.baidu.com/s?wd=" +
                    encodeURI(searchInputElement.value)
            )
            break
        default:
            console.log("empty!")
    }
}

function openSearchPage(baseUrl, query) {
    var searchURL = baseUrl + encodeURIComponent(query)
    chrome.tabs.create({ url: searchURL })
}
