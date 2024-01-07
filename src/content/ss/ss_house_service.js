export function fillStatus(document, message) {
  var statusRadios = document.getElementsByName('Status');

  setTimeout(function () {
    for (var i = 0; i < statusRadios.length; i++) {
      var statusText = document.querySelector("label[for='" + statusRadios[i].id + "']");
      if (statusText.textContent.includes(message.message.constructionStatus)) {
        statusRadios[i].click();
        break;
      }
    }
  }, 2000);
}



export function fillCurrentFloor(document, message) {

  var currentFloor = document.getElementById("Floor");
  currentFloor.value = message.message.currentFloor;

  const event = new Event('change', {
    bubbles: true,
  });
  
  currentFloor.dispatchEvent(event);

}



export function fillAllFloor(document, message) {

  var allFloor = document.getElementById("Floors");
  allFloor.value = message.message.allFloor;

  const event = new Event('change', {
    bubbles: true,
  });
  
  allFloor.dispatchEvent(event);

}




export function fillPriceUSD(document, message) {

  var priceUSD = document.getElementById("PriceUsd");
  priceUSD.value = parseFloat(message.message.priceUSD.replace(/,/g, ''));

  var event = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  priceUSD.dispatchEvent(event);

}


/*
export function fillBalcony(document, message) {
  
  var balconyRadios = document.getElementsByName("Balcony_Loggia");

  setTimeout(function () {

    if (balconyRadios.length > 1) {

      var integerNumber = parseInt(message.message.rooms, 10);

      var selectedElement = roomRadios[integerNumber];

      if (selectedElement) {
        selectedElement.click();
      } else {
        console.log("Selected element is undefined.");
      }
    } else {
      console.log("There are not enough elements in the NodeList.");
    }
  }, 2000);

}
*/

export function fillWetPoint(document, message) {

  var wetPointCountRadios = document.getElementsByName("Toilet");
 
  setTimeout(function () {
    
    if (parseInt(message.message.wetPointCount) === 0) wetPointCountRadios[5].click(); else
    if (parseInt(message.message.wetPointCount) > 5) wetPointCountRadios[4].click(); else
    if (parseInt(message.message.wetPointCount) > 0) {

          var integerNumber = parseInt(message.message.wetPointCount - 1, 10);

          var selectedElement = wetPointCountRadios[integerNumber];

          if (selectedElement) {
            selectedElement.click();
          } else {
            console.log("Selected element is undefined.");
          }
        } else {
          console.log("There are not enough elements in the NodeList.");
        }
  }, 2000);

}



export function fillCondition(document, message) {

  setTimeout(function () {
    var xpathExpression = "//div[@id='create-form-details']//span[text()='მდგომარეობა']";
    var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    var targetSpan = result.singleNodeValue;
    
    var firstSibling = targetSpan.parentElement.nextElementSibling;


    var paragraphs = firstSibling.querySelectorAll('p');

    paragraphs.forEach(function (paragraph) {

      let cond2 =  message.message.condition.trim();

      if (cond2 === "ახალი გარემონტებული") cond2 = "ახალი რემონტით";
      
      if (paragraph.textContent.trim() === cond2) paragraph.click();
    });
  }, 2000);

}

export function fillProject(document, message) {

  var projectRadios = document.getElementsByName("Project");
  
  projectRadios.forEach((project) => {
      
    const labelElement = project.nextElementSibling;
    const labelText = labelElement.textContent.trim();

    if (labelText === message.message.project)    project.click();
      
    return;
  });
  
}

export function checkGas(document,message) {

  var gasCheckBox = document.getElementById("checkboxst_Field16_36");
  
  if (message.message.hasGas)  gasCheckBox.click();

  
}



export function fillAdditionFields(document, message) {


  var xpathExpression = "//div[@id='create-app-additional-info']//h4[text()='დამატებითი ინფორმაცია']";
  var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

  var targetSpan = result.singleNodeValue;


  var firstSibling = targetSpan.parentElement.nextElementSibling;

  var paragraphs = firstSibling.querySelectorAll('p');

  paragraphs.forEach(function (paragraph) {

    const elementTxt = paragraph.textContent.trim();
    if ((message.message.hasGas === "კი") && (elementTxt === "ბუნებრივი აირი")) paragraph.click();
    if ((message.message.hasbalcony === "კი") && (elementTxt === "აივანი")) paragraph.click();
    if ((message.message.hasBasement === "კი") && (elementTxt === "სარდაფი")) paragraph.click();
    if ((message.message.hasPassangerElevator === "კი") && (elementTxt === "ლიფტი")) paragraph.click();
    if ((message.message.hasParking === "კი") && (elementTxt === "გარაჟი")) paragraph.click();
    if ((message.message.hasStorageRoom === "კი") && (elementTxt === "სათავსო")) paragraph.click();
    if ((message.message.hasHeating === "კი") && (elementTxt === "ცენტ. გათბობა")) paragraph.click();
    if ((message.message.hasAirConditioner === "კი") && (elementTxt === "კონდიციონერი")) paragraph.click();
    if ((message.message.hasFurniture === "კი") && (elementTxt === "ავეჯი")) paragraph.click();
    if ((message.message.hasHotWater === "კი") && (elementTxt === "ცხელი წყალი")) paragraph.click();
    if ((message.message.hasInternet === "კი") && (elementTxt === "ინტერნეტი")) paragraph.click();
    if ((message.message.hasTV === "კი") && (elementTxt === "ტელევიზორი")) paragraph.click();
  });

}
  
export function fillYardArea(document, message) {

  const totalAreaInput = document.getElementsByName('areaOfYard')[0];
  totalAreaInput.value = message.message.yardSpace;
 
  const event = new Event('change', {
    bubbles: true,
  });
  
  totalAreaInput.dispatchEvent(event);

}


 
export function fillHouseTotalArea(document, message) {

  const totalAreaInput = document.getElementsByName('areaOfHouse')[0];
  totalAreaInput.value = message.message.estateSpace;
 
  const event = new Event('change', {
    bubbles: true,
  });
  
  totalAreaInput.dispatchEvent(event);
}
