const parentId = chrome.contextMenus.create({
    title: 'Extension sample',
    type: 'normal',
    contexts: ['all'],
    onclick: (info, tab) => {
        alert("Click Extension sample");
    }
});

chrome.contextMenus.create({
    title: 'Child 1',
    type: 'normal',
    contexts : ['all'],
    parentId : parentId,
    onclick: (info, tab) => {
        alert("Click Child 1");
    }
});

chrome.contextMenus.create({
    title: 'Child 2',
    type: 'normal',
    contexts : ['link'],
    parentId : parentId,
    onclick: (info, tab) => {
        alert("Click Child 2");
    }
});