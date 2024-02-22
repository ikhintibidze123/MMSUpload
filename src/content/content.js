// content.js
import { fillSSApartament, fillSSHouse, fillSSCommerce, fillSSLand, fillSSHotel, fillSSCommon } from './ss/ss_controller.js';
import { fillMyhomeApartament,fillMyhomeHouse,fillMyhomeCommerce,fillMyhomeLand,fillMyhomeHotel } from './myhome/myhome_controller.js';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "activateTab") {
    activateTab(request.tabId);
  }
});

function activateTab(tabId) {
  chrome.tabs.update(tabId, { active: true }, function (updatedTab) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log("Tab activated:", updatedTab);
    }
  });
}

chrome.runtime.sendMessage({ action: "getActiveTabId" }, function (response) {
  if (response && response.tabId) {
    var currentTabId = response.tabId;
    console.log("Current tab ID is:", currentTabId);

    // Activate a specific tab (e.g., Tab 2)
    chrome.runtime.sendMessage({ action: "activateTab", tabId: currentTabId });
  } else {
    console.log("No active tab found.");
  }
});

/*-------------------------*/
var currentTabURL = "";

chrome.runtime.sendMessage({ action: "getURL" }, function (response) {
  
  if (response && response.url) {
    currentTabURL = response.url;

    const expectedURL = "https://www.myhome.ge/ka/my/addProduct";
    const expectedURL2 = "https://home.ss.ge/ka/udzravi-qoneba/create";

    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

     // alert(JSON.stringify(message.message));
   
    if (encodeURIComponent(currentTabURL.trim()) === encodeURIComponent(expectedURL)) {
      
   
       
      switch (message.message.realEstateType) {
        case "ბინა":
            fillMyhomeApartament(document,message);
            break;
        case "სახლი":
        case "აგარაკი":
            fillMyhomeHouse(document,message);
            break;
        case "კომერციული":
            fillMyhomeCommerce(document,message);
            break;
        case "მიწა":
            fillMyhomeLand(document,message);
            break;
        case "სასტუმრო":
            fillMyhomeHotel(document,message);
            break;
        default:
            fillMyhomeApartament(document,message);
    }

    }

    else
    
    if (encodeURIComponent(currentTabURL.trim()) === encodeURIComponent(expectedURL2)) {
      
      fillSSCommon(document,message); 
      switch (message.message.realEstateType) {
        case "ბინა":
            fillSSApartament(document,message);
            break;
        case "სახლი":
        case "აგარაკი":
            fillSSHouse(document,message);
            break;
        case "კომერციული":
        case "სარდაფი":  
            fillSSCommerce(document,message);
            break;
        case "მიწა":
            fillSSLand(document,message);
            break;
        case "სასტუმრო":
            fillSSHotel(document,message);
            break;
        default:
            fillSSApartament(document,message);
    }
      };
    });
  }
});
