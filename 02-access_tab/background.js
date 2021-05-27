chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const url = tab.url;
    if (url.match('https://app.usergram.info*')) {
        console.log("Close " + url);
        chrome.tabs.remove(tabId);
    }
});