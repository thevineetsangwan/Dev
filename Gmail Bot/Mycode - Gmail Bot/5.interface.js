console.log("Hello, I am service worker");

chrome.runtime.onMessage.addListener(
  function(emailContent, sender, sendResponse) {
      console.log(emailContent);
  }
)