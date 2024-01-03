export function fillCurrentFloor(document, message) {

  var currentFloor = document.getElementsByName("floor");
  currentFloor[0].value = message.message.currentFloor;

  const event = new Event('change', {
    bubbles: true,
  });
  
  currentFloor[0].dispatchEvent(event);

}



export function fillAllFloor(document, message) {

  var allFloor = document.getElementsByName("floors");
  allFloor[0].value = message.message.allFloor;
  
  const event = new Event('change', {
    bubbles: true,
  });
  
  allFloor[0].dispatchEvent(event);
}





export function fillBalcony(document, message) {

  var xpathExpression = "//div[@id='create-form-details']//span[text()='აივანი / ლოჯია']";
  var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

  var targetSpan = result.singleNodeValue;


  var firstSibling = targetSpan.parentElement.nextElementSibling;


  var paragraphs = firstSibling.querySelectorAll('p');

  var valuesArray = [];


  paragraphs.forEach(function (paragraph) {
    valuesArray.push(paragraph);
  });


  setTimeout(function () {

    if (valuesArray.length > 1) {

      var selectedElement = valuesArray[0];

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



export function fillWetPoint(document, message) {


  var xpathExpression = "//div[@id='create-form-details']//span[text()='სველი წერტილი']";
  var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

  var targetSpan = result.singleNodeValue;


  var firstSibling = targetSpan.parentElement.nextElementSibling;


  var paragraphs = firstSibling.querySelectorAll('p');

  var valuesArray = [];


  paragraphs.forEach(function (paragraph) {
    valuesArray.push(paragraph);
  });


  setTimeout(function () {

    if (message.message.rooms > 8) valuesArray[valuesArray.length - 1].click();
    else
      if (valuesArray.length > 1) {

        var integerNumber = parseInt(message.message.wetPointCount, 10);

        var selectedElement = valuesArray[integerNumber - 1];

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


export function fillProject(document, message) {

  setTimeout(function () {
    var xpathExpression = "//div[@id='create-form-details']//span[text()='პროექტი']";
    var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    var targetSpan = result.singleNodeValue;


    var firstSibling = targetSpan.parentElement.nextElementSibling;


    var paragraphs = firstSibling.querySelectorAll('p');

    paragraphs.forEach(function (paragraph) {
      if (paragraph.textContent.trim() === message.message.project)
        paragraph.click();
    });
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


export function fillDescription(document, message) {
  var xpathExpression = '//*[@id="create-app-desc"]//textarea';
  var textareaElement = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

  if (textareaElement) {
    textareaElement.value = message.message.description;

    const event = new Event('change', {
      bubbles: true,
    });
    textareaElement.dispatchEvent(event);

  } else {
    console.log('Textarea element not found');
  }

}
export function fillPriceGEL(document, message) {
  var xpathExpression = "//div[@id='create-app-price']//span[text()='სრული ფასი']";
  var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  var targetSpan = result.singleNodeValue;

  targetSpan.click();

  var xpath = '//*[@id="create-app-price"]//input[@type="text"]';
  var textInputElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  textInputElement.click();

  if (textInputElement) {

    var textToType = message.message.priceGEL;

    // Iterate through each character with a delay
    for (var i = 0; i < textToType.length; i++) {
      (function (index) {
        var char = textToType.charAt(index);

        // Trigger keydown event
        var keydownEvent = new KeyboardEvent('keydown', {
          key: char,
          bubbles: true,
          cancelable: true,
        });
        setTimeout(() => textInputElement.dispatchEvent(keydownEvent), index * 100);

        // Trigger keypress event
        var keypressEvent = new KeyboardEvent('keypress', {
          key: char,
          bubbles: true,
          cancelable: true,
        });
        setTimeout(() => textInputElement.dispatchEvent(keypressEvent), index * 100);

        // Set the value of the input field
        setTimeout(() => {
          textInputElement.value += char;

          // Trigger input event
          var inputEvent = new Event('input', {
            bubbles: true,
            cancelable: true,
          });
          textInputElement.dispatchEvent(inputEvent);
        }, index * 100);
      })(i);
    }
  } else {
    console.error("Text input element not found");
  }
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

export function fillOther(document, message) {

  // Get the parent element that contains all the checkboxes
  const checkboxContainer = document.querySelector('.fields-radio-group.text-checkbox-group');

  // Get all the checkboxes within the container
  const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');

  // Loop through each checkbox and set its checked value to true
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });

}
