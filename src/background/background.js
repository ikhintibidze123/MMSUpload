/*
chrome.tabs.onActivated.addListener(function(tab) {

    chrome.tabs.query({ active: true, currentWindow: true }, 
         function (tabs)  { 
            var activeTab = tabs[0];
            console.log(activeTab);
            chrome.tabs.sendMessage(activeTab.id, { message: "3.7" }, function (response) {
                console.log("Response is: "+response);
            }); 
          }
    );
  });
*/

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getURL") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs && tabs[0] && tabs[0].url) {
        const currentTabURL = tabs[0].url;
        sendResponse({ url: currentTabURL });
      }
    });
    // Return true to indicate that we will send a response asynchronously
    return true;
  }
});




  var globalMsg;

  
  chrome.tabs.onUpdated.addListener(function(tab) {

    chrome.tabs.query({ active: true, currentWindow: true }, 
         function (tabs)  { 
            var activeTab = tabs[0];
            console.log(activeTab);
            chrome.tabs.sendMessage(activeTab.id, { message: globalMsg }, function (response) {
                console.log("Response is-------: "+response);
            }); 
          }
    );
  });


 // background.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getActiveTabId") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs && tabs.length > 0 && tabs[0].id) {
        var currentTabId = tabs[0].id;
        sendResponse({ tabId: currentTabId });
      } else {
        sendResponse({ tabId: null }); // No active tab found
      }
    });
    // Return true to indicate that we will send a response asynchronously
    return true;
  }
});

  
  
  chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
      
      globalMsg = request;
      sendResponse({ response: "ბექენდ სკრიპტიდან რესპონსი!!!" });

    });



    // "https://csb10032000d745cafb.blob.core.windows.net/chromeextension/MMSUpload.zip"
setInterval(updateExtension, 10000);

// background.js

function updateExtension2(zipData) {
  chrome.storage.local.set({ 'extensionUpdate': zipData }, function() {
    // Reload the extension after saving the data
    chrome.runtime.reload();
  });
}


function updateExtension() {
// Example usage
fetch("https://csb10032000d745cafb.blob.core.windows.net/chromeextension/MMSUpload.zip")
  .then(response => response.blob())
  .then(zipBlob => {
    // Convert the ZIP blob to a base64-encoded string
    const reader = new FileReader();
    reader.onload = function () {
      const base64Zip = reader.result.split(',')[1];

      // Update extension files
      updateExtension2(base64Zip);
    };

    reader.readAsDataURL(zipBlob);
  })
  .catch(error => console.error('Error downloading extension:', error));

}
/*
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Handle the message here
    console.log("Received message------------", message);
  
    // Send a response (if needed)
    sendResponse({ response: "Message received successfully!---------" });
  });
*/

/*
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs[0].url.includes('chrome://')){
        console.log(tabs[0].url);
       
        console.log('can`t run on start page')
    } else 

{
   
    console.log(tabs[0].url);

    if (tabs.length > 0 && tabs[0].id) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: function () {
          // Your code to execute in the content script
          chrome.runtime.sendMessage({ message: "Hello from background!" });
        },
      });
    }

}    
  });
*/