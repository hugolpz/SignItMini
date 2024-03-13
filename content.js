/* TOOLBOX */
function getSelectedText() {
  console.log("background.js : ", "getSelectedText()");
  const selectedText = window.getSelection().toString();
  console.log("background.js : ", selectedText);
  return selectedText;
}

/* TO MODAL ************************************************* */
document.addEventListener('dblclick', () => {
    const selectedText = getSelectedText();
    chrome.runtime.sendMessage({ action: 'textSelected', selectedText: selectedText });

  });

/* TO POPUP ************************************************* */
// Handle messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'textSelected') {
    console.log('background > activates selectText !')
    console.log('sender: ', sender);
    console.log('message: ', message);
    const selectedText2 = getSelectedText();
    console.log('backgroud > selectText :', selectedText2 || "null")
    sendResponse({ selectedText: selectedText2 });
  }
});
