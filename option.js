document.addEventListener("DOMContentLoaded", function () {
    // 获取所有复选框元素
    var googleCheckbox = document.getElementById("googleCheckbox")
    var baiduCheckbox = document.getElementById("baiduCheckbox")
    var zhihuCheckbox = document.getElementById("zhihuCheckbox")
    var doubanCheckbox = document.getElementById("doubanCheckbox")
    var bilibiliCheckbox = document.getElementById("bilibiliCheckbox")
    var taobaoCheckbox = document.getElementById("taobaoCheckbox")

    // 保存用户设置
    function saveOptions() {
        chrome.storage.sync.set({
            google: googleCheckbox.checked,
            baidu: baiduCheckbox.checked,
            zhihu: zhihuCheckbox.checked,
            douban: doubanCheckbox.checked,
            bilibili: bilibiliCheckbox.checked,
            taobao: taobaoCheckbox.checked,
        })
    }

    // 加载用户设置
    function loadOptions() {
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
                googleCheckbox.checked = items.google
                baiduCheckbox.checked = items.baidu
                zhihuCheckbox.checked = items.zhihu
                doubanCheckbox.checked = items.douban
                bilibiliCheckbox.checked = items.bilibili
                taobaoCheckbox.checked = items.taobao
            }
        )
    }

    // 页面加载时加载用户设置
    loadOptions()

    // 当复选框状态改变时保存用户设置
    googleCheckbox.addEventListener("change", saveOptions)
    baiduCheckbox.addEventListener("change", saveOptions)
    zhihuCheckbox.addEventListener("change", saveOptions)
    doubanCheckbox.addEventListener("change", saveOptions)
    bilibiliCheckbox.addEventListener("change", saveOptions)
    taobaoCheckbox.addEventListener("change", saveOptions)
})

// 在安装扩展时设置默认值
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        google: true,
        baidu: true,
        zhihu: true,
        douban: true,
        bilibili: true,
        taobao: true,
    })
})
