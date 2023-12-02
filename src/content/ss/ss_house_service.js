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




export function fillRooms(document, message) {
  var roomRadios = document.getElementsByName("Rooms");

  setTimeout(function () {

    if (message.message.rooms>8) roomRadios[roomRadios.length-1].click();
    else
    if (roomRadios.length > 1) {

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


export function fillBedrooms(document, message) {

  var bedroomRadios = document.getElementsByName("bedroomrad");

  setTimeout(function () {

    if (bedroomRadios.length > 1) {
      var integerNumber = parseInt(message.message.bedroomCount, 10);

      var selectedElement2 = bedroomRadios[integerNumber - 1];

      if (selectedElement2) {
        selectedElement2.click();
      } else {
        console.log("Selected element is undefined.");
      }
    } else {
      console.log("There are not enough elements in the NodeList.");
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



export function fillDescription(document, message) {

  var descr = document.getElementById("DescriptionGe");
  descr.value = message.message.description;

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

  var conditionRadios = document.getElementsByName("State");
  
  conditionRadios.forEach((condition) => {
      
    const labelElement = condition.nextElementSibling;
    const labelText = labelElement.textContent.trim();

      if ((labelText === "ახალი რემონტით") && (message.message.condition === "ახალი გარემონტებული"))
      {
        condition.click();
      }

      else

      if (labelText === message.message.condition)  condition.click();
      
      return;
  });
  
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

  const sectionRow = document.querySelector('.section-row.application-main-info');
  const sectionTitle = sectionRow.querySelector('.section-title');
  const nextDiv = sectionTitle.nextElementSibling;
  const checkboxInputs = nextDiv.querySelectorAll('input[type="checkbox"]');
  const messageValues = [];
  
  if (message.message.hasHeating) messageValues.push("Heating");
  if (message.message.hasGas) messageValues.push("NaturalGas");
  if (message.message.hasStorageRoom) messageValues.push("Storage");
  if (message.message.hasbalcony) messageValues.push("Balcony");
  if (message.message.hasParking) messageValues.push("Garage");
  if (message.message.hasPassangerElevator) messageValues.push("Elevator");
  if (message.message.allFloor === message.message.currentFloor) messageValues.push("LastFloor");
 
  for (let i = 0; i < checkboxInputs.length; i++) {
    const checkboxInput = checkboxInputs[i];
   
    const labelValue = checkboxInput.getAttribute('name').trim();
    
    // Check checkboxes if labelValue is equal to a specific value
    if (messageValues.includes(labelValue)) {
      checkboxInput.checked = true; // Check the checkbox
    }
  }
  
  }



  
export function fillYardArea(document, message) {

  var yardArea = document.getElementById("AreaOfYard");
  yardArea.value = message.message.yardSpace;

  var event = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  yardArea.dispatchEvent(event);

}


 