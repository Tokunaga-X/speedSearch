"use strict"

const OPTIONS = [
    { value: "google", text: "谷歌" },
    { value: "baidu", text: "百度" },
    { value: "zhihu", text: "知乎" },
    { value: "douban", text: "豆瓣" },
    { value: "bilibili", text: "B站" },
    { value: "taobao", text: "淘宝" },
]

// chrome.storage.sync.get("OptionList", ({ OptionList }) => {
//     OptionList.forEach((item, index) => {
//         OPTIONS[index].checked = item.checked
//     })
// })

var searchInputElement = document.getElementById("input")
var searchButtonElement = document.getElementById("btn")
var searchSelectElement = document.getElementById("select")

//设置打开页面光标就聚焦在输入栏
window.onload = function () {
    searchInputElement.focus()

    for (let i = 0; i < OPTIONS.length; i++) {
        // if (!OPTIONS[i].checked) continue
        const option = document.createElement("option")
        option.value = OPTIONS[i].value
        option.text = OPTIONS[i].text
        select.appendChild(option)
    }
}

//设置回车等于点击按钮
searchInputElement.addEventListener("keyup", function (event) {
    event.preventDefault()
    if (event.key === "Enter") {
        searchButtonElement.click()
    }
})

//搜索功能实现
searchButtonElement.onclick = function () {
    if (!searchInputElement.value) {
        console.log("Search input is empty!")
        return
    }

    var searchInputResult = searchInputElement.value.trim()

    switch (searchSelectElement.value) {
        case "zhihu":
            openSearchPage(
                "https://www.zhihu.com/search?type=content&q=",
                searchInputResult
            )
            break
        case "douban":
            openSearchPage(
                "https://www.douban.com/search?source=suggest&q=",
                searchInputResult
            )
            break
        case "bilibili":
            openSearchPage(
                "https://search.bilibili.com/all?keyword=",
                searchInputResult
            )
            break
        case "taobao":
            openSearchPage("https://s.taobao.com/search?q=", searchInputResult)
            break
        case "google":
            openSearchPage(
                "https://www.google.com/search?q=",
                searchInputResult
            )
            break
        case "baidu":
            openSearchPage("https://www.baidu.com/s?wd=", searchInputResult)
            break
        default:
            console.log("empty!")
    }
}

function openSearchPage(baseUrl, query) {
    var searchURL = baseUrl + encodeURIComponent(query)
    chrome.tabs.create({ url: searchURL })
}
