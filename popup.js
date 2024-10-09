"use strict";

// 搜索引擎配置
const searchEngines = {
  google: {
    name: "谷歌",
    url: "https://www.google.com/search?q=",
  },
  twitter: {
    name: "X/推特",
    url: "https://x.com/search?q=",
  },
  baidu: {
    name: "百度",
    url: "https://www.baidu.com/s?wd=",
  },
  zhihu: {
    name: "知乎",
    url: "https://www.zhihu.com/search?type=content&q=",
  },
  douban: {
    name: "豆瓣",
    url: "https://www.douban.com/search?source=suggest&q=",
  },
  bilibili: {
    name: "B站",
    url: "https://search.bilibili.com/all?keyword=",
  },
  taobao: {
    name: "淘宝",
    url: "https://s.taobao.com/search?q=",
  },
};

// 使用常量存储常用的DOM元素引用
const searchButtonElement = document.getElementById("btn");
const searchSelectElement = document.getElementById("select");
const searchInputElement = document.getElementById("input");

document.addEventListener("DOMContentLoaded", function () {
  searchInputElement.focus();
  loadSearchEngines();
});

function loadSearchEngines() {
  chrome.storage.sync
    .get(Object.keys(searchEngines), function (result) {
      Object.keys(searchEngines).forEach(function (key) {
        if (result[key]) {
          addSearchEngineOption(key, searchEngines[key].name);
        }
      });
    })
    .catch(function (error) {
      console.error("获取搜索引擎设置时出错：", error);
      alert("加载搜索引擎选项时出错，请刷新页面重试。");
    });
}

function addSearchEngineOption(value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.text = text;
  searchSelectElement.appendChild(option);
}

searchInputElement.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchButtonElement.click();
  }
});

searchButtonElement.onclick = function () {
  const searchInput = searchInputElement.value.trim();
  if (!searchInput) {
    alert("请输入搜索内容！");
    return;
  }

  const selectedEngine = searchSelectElement.value;
  if (searchEngines[selectedEngine]) {
    openSearchPage(searchEngines[selectedEngine].url, searchInput);
  } else {
    alert("请选择一个有效的搜索引擎！");
  }
};

function openSearchPage(baseUrl, query) {
  const searchURL = baseUrl + encodeURIComponent(query);
  chrome.tabs.create({ url: searchURL });
}
