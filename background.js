

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed.');
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log('Tab activated:', activeInfo);
});

