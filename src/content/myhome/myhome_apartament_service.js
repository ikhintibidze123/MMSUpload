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



export function fillStatus(document, message) {

    if (message.message.realEstateType == "ბინა") {

        var dealTypeElement3 = document.getElementById('estateTypes');
        var statementRadioElements3 = dealTypeElement3.querySelectorAll('.statement_radio');

        for (var i = 0; i < statementRadioElements3.length; i++) {

            var textElement3 = statementRadioElements3[i].querySelector('.text');

            if (message.message.constructionStatus === textElement3.textContent) {

                var radioInput3 = statementRadioElements3[i].querySelector('input[type="radio"]');

                if (radioInput3) {
                    radioInput3.click();
                    break;
                }
            }
        }
    }


}



export function fillCondition(document, message) {
    

    var conditionSelectBoxes = document.getElementsByName('ConditionID');
    var selectElement;
   

    for (var i = 0; i < conditionSelectBoxes.length; i++) {
       
         if (conditionSelectBoxes[i])
            {
                selectElement = conditionSelectBoxes[i];
                break;
            }
    }
    
    var conditionTypeId = "";

    switch (message.message.condition) {
        case "ახალი გარემონტებული":
        case "ახალი რემონტით":   
        case "გარემონტებული":   
            conditionTypeId = 1;
            break;
        case "მიმდინარე რემონტი":
            conditionTypeId = 4;
            break;
        case "სარემონტო":
            conditionTypeId = 5;
            break;             
        case "ძველი გარემონტებული":
        case "ძველი რემონტით":    
            conditionTypeId = 6;
            break;             
        case "თეთრი კარკასი":
            conditionTypeId = 7;
            break;
        case "შავი კარკასი":
            conditionTypeId = 8;
            break;
        case "მწვანე კარკასი":
            conditionTypeId = 9;
            break;
        default:
            conditionTypeId = "";
    }
    

    selectElement.value = conditionTypeId;
    
    const changeEvent = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    selectElement.dispatchEvent(changeEvent);
}



export function fillProject(document, message) {
    
    var projectSelectBoxes = document.getElementsByName('ProjectID');
    var selectElement;
   
    for (var i = 0; i < projectSelectBoxes.length; i++) {
       
         if (projectSelectBoxes[i])
            {
                selectElement = projectSelectBoxes[i];
                break;
            }
    }
    
    var projectTypeId = "";
 
    
    switch (message.message.project) {
        case "არასტანდარტული":
            projectTypeId = 1;
            break;
        case "თუხარელის":
            projectTypeId = 2;
            break;
        case "ქალაქური":
            projectTypeId = 4;
            break;             
        case "მოსკოვის":
            projectTypeId = 3;
            break;             
        case "ხრუშოვის":
            projectTypeId = 5;
            break;
        case "ჩეხური":
            projectTypeId = 6;
            break;
        case "ყავლაშვილის":
            projectTypeId = 7;
            break;
        case "ლვოვის":
            projectTypeId = 8;
            break;
        case "თბილისური ეზო":
            projectTypeId = 9;
            break;    
        default:
            projectTypeId = "";
    }
    
    selectElement.value = projectTypeId;
    
    const changeEvent = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    selectElement.dispatchEvent(changeEvent);
}



export function fillCeilingHeight(document, message) {

    if (message.message.realEstateType !== "land") {

        var ceilingHeightElement = document.getElementsByName("CeilingHeight")[0];
        ceilingHeightElement.value = message.message.ceilingHeight;
    }
}



export function fillTotalArea(document, message) {
    var estateSpace = document.getElementById("AreaSize_333");
    estateSpace.value = message.message.estateSpace;
}


export function fillAllFloor(document, message) {
    var allFloor = document.getElementById("Floors_3482");
    allFloor.value = message.message.allFloor;
}


export function fillCurrentFloor(document, message) {
    var currentFloor = document.getElementById("Floor_3483");
    currentFloor.value = message.message.currentFloor;
}


// Import the Select2 library if you haven't already


export function fillRooms(document, message) {
    const selectElement = document.getElementById("Rooms_340");

    // Set the value of the <select> element to "4"
    selectElement.value = message.message.rooms;
    
    // Trigger a "change" event to update the selected value
    const changeEvent = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    selectElement.dispatchEvent(changeEvent);
}


export function fillBedrooms(document, message) {
    const selectElement = document.getElementById("BedRooms_342");

    // Set the value of the <select> element to "4"
    selectElement.value = message.message.bedroomCount;
    
    // Trigger a "change" event to update the selected value
    const changeEvent = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    selectElement.dispatchEvent(changeEvent);
}


export function fillWetPoints(document, message) {
    const selectElement = document.getElementById("BathRooms_344");

      if (message.message.wetPointCount > 2)
        selectElement.value = "3+";
        else
        selectElement.value = message.message.wetPointCount;
        
        const changeEvent = new Event("change", {
          bubbles: true,
          cancelable: true,
        });
        selectElement.dispatchEvent(changeEvent);
}


export function hasBalcony(document, message) {
    var balconyCheckbox = document.getElementById("Balcony_348");
    if (message.message.hasbalcony == "კი") balconyCheckbox.checked = true; else balconyCheckbox.checked = false;
}


export function hasLoggia(document, message) {
    var loggiaCheckbox = document.getElementById("Loggia_347");
    if (message.message.hasLoggia == "კი") loggiaCheckbox.checked = true; else loggiaCheckbox.checked = false;
}


export function hasPorch(document, message) {
    var porchCheckbox = document.getElementById("Veranda_349");
    if (message.message.hasPorch == "კი") porchCheckbox.checked = true; else porchCheckbox.checked = false;
}


export function hasStorage(document, message) {
    var storageCheckbox = document.getElementById("StoreType_350");
    if (message.message.hasStorageRoom == "კი") storageCheckbox.checked = true; else storageCheckbox.checked = false;
}


export function hasGas(document, message) {
    var gasCheckbox = document.getElementById("Gas_382");
    if (message.message.hasGas == "კი") gasCheckbox.checked = true; else gasCheckbox.checked = false;
}


export function hasInternet(document, message) {
    var internetCheckbox = document.getElementById("Internet_661");
    if (message.message.hasInternet == "კი") internetCheckbox.checked = true; else internetCheckbox.checked = false;
}


export function hasFireplace(document, message) {
    var fireplaceCheckbox = document.getElementById("FirePlace_351");
    if (message.message.hasFireplace == "კი") fireplaceCheckbox.checked = true; else fireplaceCheckbox.checked = false;
}


export function hasPassElev(document, message) {
    var passElevCheckbox = document.getElementById("Elevator1_579");
    if (message.message.hasPassangerElevator == "კი") passElevCheckbox.checked = true; else passElevCheckbox.checked = false;
}


export function hasFreightElev(document, message) {
    var freightElevCheckbox = document.getElementById("Elevator2_580");
    if (message.message.hasFreightElevator == "კი") freightElevCheckbox.checked = true; else freightElevCheckbox.checked = false;
}


export function fillParkingType(document, message) {

    const selectElement = document.getElementById("ParkingID_375");
    var parkingTypeId = "";

    switch (message.message.parkingType) {
        case "ეზოს პარკინგი":
            parkingTypeId = 0;
            break;
        case "ავტოფარეხი":
            parkingTypeId = 1;
            break;
        case "პარკინგის ადგილი":
            parkingTypeId = 2;
            break;
        case "მიწისქვეშა პარკინგი":
            parkingTypeId = 3;
            break;
        case "ფასიანი ავტოსადგომი":
            parkingTypeId = 4;
            break;
        default:
            parkingTypeId = 0;
    }

    selectElement.value = parkingTypeId;

    const changeEvent = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    selectElement.dispatchEvent(changeEvent);
}


export function fillHotWaterType(document, message) {

    const selectElement = document.getElementById("HotWaterID_391");
    var hotwaterTypeId = "";

    switch (message.message.hotWaterType) {
        case "გაზის გამაცხელებელი":
            hotwaterTypeId = 1;
            break;
        case "ავზი":
            hotwaterTypeId = 2;
            break;
        case "დენის გამაცხელებელი":
            hotwaterTypeId = 3;
            break;
        case "ბუნებრივი ცხელი წყალი":
            hotwaterTypeId = 4;
            break;
        case "მზის გამათბობელი":
            hotwaterTypeId = 5;
            break;
        case "ცენტრალური გათბობის სისტემა":
            hotwaterTypeId = 6;
            break;    
        default:
            hotwaterTypeId = 1;
    }

    selectElement.value = hotwaterTypeId;

    const changeEvent = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    selectElement.dispatchEvent(changeEvent);
}


export function fillHeatingType(document, message) {

    const selectElement = document.getElementById("WarmingID_595");
    var warmingTypeId = "";

    switch (message.message.heatingType) {
        case "ცენტრალური გათბობა":
            warmingTypeId = 2;
            break;
        case "გაზის გამათბობელი":
            warmingTypeId = 3;
            break;
        case "დენის გამათბობელი":
            warmingTypeId = 4;
            break;
        case "იატაკის გათბობა":
            warmingTypeId = 5;
            break;
        default:
            warmingTypeId = 2;
    }

    selectElement.value = warmingTypeId;

    const changeEvent = new Event("change", {
      bubbles: true,
      cancelable: true,
    });
    selectElement.dispatchEvent(changeEvent);
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


export function fillOwner(document, message) {
    var productOwner = document.getElementById("ProductOwner");
    productOwner.value = message.message.authorName;
}


export function fillDescription(document, message) {
    var commentGeo = document.getElementById("CommentGeo");
    commentGeo.value = message.message.description;
}



export function fillImages(document, message) {
    const stringArray = message.message.imagePathes.split(' ');

    console.log(stringArray);

    /*--------------------------*/
    async function uploadImages(stringArray) {
        const input = document.getElementById('images');
        const dataTransfer = new DataTransfer();

        // Create an array of promises for fetch operations
        const fetchPromises = stringArray.map(async (imageUrl, i) => {
            try {
                


                try {
                    // Replace this URL with the actual URL of the proxy list API on FreeProxyList.net
                    const apiUrl = 'https://www.free-proxy-list.net/api/proxy?';
                
                    // Make a request to the FreeProxyList.net API
                    const response = await fetch(apiUrl);
                    
                    if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                
                    // Parse the JSON response
                    const proxies = await response.json();
                
                    // Display the list of proxies
                    console.log(proxies);
                
                    // Now you can use the proxies in your application
                    // ...
                
                  } catch (error) {
                    console.error('Error fetching proxies:', error);
                  }















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



export function checkFurnTech(document, message) {
  
 const radio1 = document.getElementById("HasFurnitureAndTechnic_385");
 const radio2 = document.getElementById("HasFurnitureAndTechnic_386");

 if ((message.message.hasFurniture==="კი")||(message.message.hasTV==="კი")
   ||(message.message.hasAirConditioner==="კი")||(message.message.hasHomePhone==="კი"))
  {
  radio1.click();
  } 
 else {
  radio2.click();
 }
}


export function checkPhone(document, message) {
  
    const radio1 = document.getElementById("Telephone_387");
    if (message.message.hasHomePhone==="კი")
     {
     radio1.checked = true;
     } 
}


export function checkTV(document, message) {
  
    const radio1 = document.getElementById("TV_388");
    if (message.message.hasTV==="კი")
     {
     radio1.checked = true;
     } 
}


export function checkConditioner(document, message) {
  
    const radio1 = document.getElementById("Conditioner_389");
    if (message.message.hasAirConditioner==="კი")
     {
     radio1.checked = true;
     } 
}
   


export function checkFurniture(document, message) {
  
    const radio1 = document.getElementById("Furniture_604");
    if (message.message.hasFurniture==="კი")
     {
     radio1.checked = true;
     } 
}


export function fillProductOwner(document, message) {
    var productOwner = document.getElementById("ProductOwner");   
    productOwner.value = message.message.authorName;  //an owner unda aq ,shesamocmebelia
}


export function fillMobilePhone(document, message) {
    var mobilePhone = document.getElementById("Phone");   
    mobilePhone.value = message.message.mobilePhone;
}



export function fillRentHoleHouse(document, message) {

    const selectElement = document.getElementById("RentType_1019");
    selectElement.value = 1;
    selectElement.click();
    const changeEvent = new Event("change", {
        bubbles: true,
        cancelable: true,
      });
      selectElement.dispatchEvent(changeEvent);
}