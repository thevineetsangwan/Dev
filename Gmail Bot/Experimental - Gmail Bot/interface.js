console.log("Hello, I am service worker");

chrome.runtime.onMessage.addListener(
  function(emailContent, sender, sendResponse) {
      console.log(emailContent);
      (async function(){
          const tabs = await chrome.tabs.query({url: 'https://chat.openai.com/*'});
          const tab = tabs[0];
          chrome.tabs.sendMessage(tab.id, emailContent);
       })();
  }
)