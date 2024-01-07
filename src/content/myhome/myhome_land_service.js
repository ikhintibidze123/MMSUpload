export function fillRealEstateType(document, message) {

    var radioButtons = document.getElementsByName('ProductTypeID');

    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('click', function () {
            var selectedValue = this.value;
        });
    }

    switch (message.message.realEstateType) {
        case "ბინა":
            document.getElementById("ProductTypeID_284").click();
            break;
        case "სახლი":
        case "აგარაკი":
            document.getElementById("ProductTypeID_285").click();
            break;
        case "კომერციული":
            document.getElementById("ProductTypeID_286").click();
            break;
        case "მიწა":
            document.getElementById("ProductTypeID_287").click();
            break;
        case "სასტუმრო":
            document.getElementById("ProductTypeID_288").click();
            break;
        default:
            document.getElementById("ProductTypeID_284").click();
    }

    /*----GET HOUSE COUNTRY TYPE---*/
    if ((message.message.realEstateType == "სახლი") || (message.message.realEstateType == "აგარაკი")) {
        var dealTypeElement2 = document.getElementById('tabType');
        var statementRadioElements2 = dealTypeElement2.querySelectorAll('.statement_radio');


        for (var i = 0; i < statementRadioElements2.length; i++) {

            var textElement2 = statementRadioElements2[i].querySelector('.text');

            if (message.message.realEstateType === textElement2.textContent) {

                var radioInput2 = statementRadioElements2[i].querySelector('input[type="radio"]');

                if (radioInput2) {
                    radioInput2.click();
                    break;
                }
            }
        }
    }
}
export function fillRealEstateDealType(document, message) {

    var dealTypeElement = document.getElementById('addTypes');
    var statementRadioElements = dealTypeElement.querySelectorAll('.statement_radio');

    for (var i = 0; i < statementRadioElements.length; i++) {

        var textElement = statementRadioElements[i].querySelector('.text');

        if (message.message.dealType === textElement.textContent) {

            var radioInput = statementRadioElements[i].querySelector('input[type="radio"]');

            if (radioInput) {
                radioInput.click();
                break;
            }
        }
    }
}



export function fillTotalArea(document, message) {

    var estateSpace = document.getElementById("AreaSize_3667");
    estateSpace.value = message.message.estateSpace;
}




export function hasGas(document, message) {
    var gasCheckbox = document.getElementById("Air_900");
    if (message.message.hasGas == "კი") gasCheckbox.checked = true; else gasCheckbox.checked = false;
}





export function fillPrices(document, message) {

    fillPriceGEL(document, message);
    fillPrice1GEL(document, message);
 


// Use XPath to select the <span> element with the class "ccy-title"
const xpathResult = document.evaluate(
    '//button[@id="dropdownMenuButton"]//span[@class="ccy-title"]',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  
  // Store the initial text content of the <span>
  let initialTextContent = xpathResult.singleNodeValue.textContent;
  
  // Check if an element was found
  if (xpathResult.singleNodeValue) {
    // Periodically check for changes
    const intervalId = setInterval(function () {
      const ccyTitleSpan = xpathResult.singleNodeValue;
  
      if (ccyTitleSpan) {
        const currentTextContent = ccyTitleSpan.textContent;
  
        // Check if the text content has changed from "ლარი" to "დოლარი"
        if (currentTextContent === "დოლარი" && initialTextContent === "ლარი") {
          // Value has changed from "ლარი" to "დოლარი"
          fillPriceUSD(document, message);
          fillPrice1USD(document, message);
         
        }
        
        // Check if the text content has changed from "დოლარი" to "ლარი"
        if (currentTextContent === "ლარი" && initialTextContent === "დოლარი") {
          // Value has changed from "დოლარი" to "ლარი"
          fillPriceGEL(document, message);
          fillPrice1GEL(document, message);
         
        }
  
        // Update the initial text content for future comparisons
        initialTextContent = currentTextContent;
      }
    }, 1000); // Check every 1000 milliseconds (1 second)
  } else {
    console.log("Element not found");
  }
  
}



export function fillPriceGEL(document, message) {
    var price = document.getElementById("Price");
    price.value = message.message.priceGEL;
}

export function fillPriceUSD(document, message) {
    var price = document.getElementById("Price");
    price.value = message.message.priceUSD;
}


export function fillPrice1GEL(document, message) {
    var priceM2 = document.getElementById("productPriceM2");
    priceM2.value = message.message.price1GEL;
}

export function fillPrice1USD(document, message) {
    var priceM2 = document.getElementById("productPriceM2");
    priceM2.value = message.message.price1USD;
}




export function fillDescription(document, message) {
    var commentGeo = document.getElementById("CommentGeo");
    commentGeo.value = message.message.comment;
}



export function fillImages(document, message) {
    const stringArray = message.message.imagePathes.split(' ');

    /*--------------------------*/
    async function uploadImages(stringArray) {
        const input = document.getElementById('images');
        const dataTransfer = new DataTransfer();

        // Create an array of promises for fetch operations
        const fetchPromises = stringArray.map(async (imageUrl, i) => {
            try {
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const file = new File([blob], `image${i}.jpg`, { type: 'image/jpeg' });
                dataTransfer.items.add(file);
            } catch (error) {
                console.error('Error:', error);
            }
        });

        // Wait for all fetch operations to complete
        await Promise.all(fetchPromises);

        // Set the DataTransfer object containing all files to the input element
        input.files = dataTransfer.files;


        // Dispatch the 'change' event once after all files are added
        const event = new Event('change', {
            bubbles: true,
        });
        input.dispatchEvent(event);
    }



    uploadImages(stringArray);
}




export function fillLandType(document, message) {
    
        const selectElement = document.getElementById("estate_type_id_463");
        var parkingTypeId = "";
        switch (message.message.landType) {
            case "სასოფლო სამეურნეო":
                parkingTypeId = 13;
                break;
            case "არა სასოფლო სამეურნეო":
                parkingTypeId = 14;
                break;
            case "კომერციული":
                parkingTypeId = 15;
                break;
            case "სპეციალური":
                parkingTypeId = 16;
                break;
            case "მშენებლობისთვის":    
                parkingTypeId = 21;
                break;
            case "საინვესტიციო":    
                parkingTypeId = 21;
                break;
            default:
                parkingTypeId = 14;
        }
    
        selectElement.value = parkingTypeId;
    
        const changeEvent = new Event("change", {
          bubbles: true,
          cancelable: true,
        });
        selectElement.dispatchEvent(changeEvent);
    }



    export function fillAreaMeasure(document, message) {

        const selectElement = document.getElementById("AreaSizeTypeID_892");
        selectElement.value = 1;
        const changeEvent = new Event("change", {
            bubbles: true,
            cancelable: true,
          });
          selectElement.dispatchEvent(changeEvent);
    }
    
