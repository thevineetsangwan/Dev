console.log("Hi, i am the gpt script");

chrome.runtime.onMessage.addListener(
  function(emailContent, sender, sendResponse) {
      console.log(emailContent);
  }
)