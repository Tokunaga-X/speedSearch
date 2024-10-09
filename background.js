// 在安装扩展时设置默认值

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    google: true,
    baidu: true,
    zhihu: true,
    douban: true,
    bilibili: true,
    taobao: true,
    twitter: true,
  });
});
