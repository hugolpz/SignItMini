console.log("settings.js")
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    console.log("settings.js> activetab: ",activeTab)
    chrome.tabs.sendMessage(activeTab.id,{action:'textSelected'},(response)=>{
      const selectedTextDiv = document.getElementById('selectedText');
      selectedTextDiv.textContent = response.selectedText;
    });
  });