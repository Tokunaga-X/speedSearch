"use strict"

var searchButtonElement = document.getElementById("btn")
var searchSelectElement = document.getElementById("select")
var searchInputElement = document.getElementById("input")

//设置打开页面光标就聚焦在输入栏
document.addEventListener("DOMContentLoaded", function () {
    searchInputElement.focus()

    var keys = ["google", "baidu", "zhihu", "douban", "bilibili", "taobao"]

    // 从 storage 中获取这些值并添加相应的 option 元素
    chrome.storage.sync.get(keys, function (result) {
        keys.forEach(function (key) {
            var isEnabled = result[key] // 获取键名对应的值
            if (isEnabled) {
                var option = document.createElement("option")
                option.value = key
                option.text = getEngineName(key) // 获取搜索引擎名称
                document.getElementById("select").appendChild(option)
            }
        })
    })

    // 辅助函数：根据键名获取搜索引擎名称
    function getEngineName(key) {
        switch (key) {
            case "google":
                return "谷歌"
            case "baidu":
                return "百度"
            case "zhihu":
                return "知乎"
            case "douban":
                return "豆瓣"
            case "bilibili":
                return "B站"
            case "taobao":
                return "淘宝"
            default:
                return ""
        }
    }
})

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
        case "google":
            openSearchPage(
                "https://www.google.com/search?q=",
                searchInputResult
            )
            break
        case "baidu":
            openSearchPage("https://www.baidu.com/s?wd=", searchInputResult)
            break
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
        default:
            console.log("empty!")
    }
}

function openSearchPage(baseUrl, query) {
    var searchURL = baseUrl + encodeURIComponent(query)
    chrome.tabs.create({ url: searchURL })
}
