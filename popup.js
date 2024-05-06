"use strict"

var searchInputElement = document.getElementById("input")
var searchButtonElement = document.getElementById("btn")
var searchSelectElement = document.getElementById("select")

//设置打开页面光标就聚焦在输入栏
document.addEventListener("DOMContentLoaded", function () {
    searchInputElement.focus()

    // 获取选项页面中的复选框状态
    chrome.storage.sync.get(
        {
            google: true,
            baidu: true,
            zhihu: true,
            douban: true,
            bilibili: true,
            taobao: true,
        },
        function (items) {
            // 动态添加选项
            const OPTIONS = [
                { value: "google", text: "谷歌", checked: items.google },
                { value: "baidu", text: "百度", checked: items.baidu },
                { value: "zhihu", text: "知乎", checked: items.zhihu },
                { value: "douban", text: "豆瓣", checked: items.douban },
                { value: "bilibili", text: "B站", checked: items.bilibili },
                { value: "taobao", text: "淘宝", checked: items.taobao },
            ]

            OPTIONS.forEach(option => {
                if (option.checked) {
                    var newOption = new Option(option.text, option.value)
                    searchEngine.appendChild(newOption)
                }
            })
        }
    )
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
