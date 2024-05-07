document.addEventListener("DOMContentLoaded", () => {
    // 获取所有复选框元素
    var googleCheckbox = document.getElementById("googleCheckbox")
    var baiduCheckbox = document.getElementById("baiduCheckbox")
    var zhihuCheckbox = document.getElementById("zhihuCheckbox")
    var doubanCheckbox = document.getElementById("doubanCheckbox")
    var bilibiliCheckbox = document.getElementById("bilibiliCheckbox")
    var taobaoCheckbox = document.getElementById("taobaoCheckbox")

    // 加载用户设置
    const loadOptions = () => {
        chrome.storage.sync
            .get(["google", "baidu", "zhihu", "douban", "bilibili", "taobao"])
            .then(result => {
                console.log("result", result)
                googleCheckbox.checked = result["google"] || false
                baiduCheckbox.checked = result["baidu"] || false
                zhihuCheckbox.checked = result["zhihu"] || false
                doubanCheckbox.checked = result["douban"] || false
                bilibiliCheckbox.checked = result["bilibili"] || false
                taobaoCheckbox.checked = result["taobao"] || false
            })
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
})
