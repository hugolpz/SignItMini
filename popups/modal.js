document.addEventListener('DOMContentLoaded', () => {
    const $modal = document.getElementById('selectedTextModal');
    const $contentDiv = document.getElementById('selectedTextContent');
    const $closeModalButton = document.getElementById('closeModal');
  
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === 'textSelected') {
        $contentDiv.textContent = message.selectedText;
        showModal();
      }
    });
  
    $closeModalButton.addEventListener('click', () => {
      hideModal();
    });
  
    function showModal() {
      $modal.style.display = 'block';
    }
  
    function hideModal() {
      $modal.style.display = 'none';
    }
  });