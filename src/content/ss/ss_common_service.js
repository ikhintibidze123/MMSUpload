export function fillRealEstateType(document, message) {


    const elements = document.querySelectorAll('.sc-f90a41ca-3');
  
    const elementsArray = Array.from(elements);
    elementsArray.forEach(element => {
      if (element.textContent.trim().includes(message.message.realEstateType)) {
        element.click();
      }
    });
  
  }



  export function fillRealEstateDealType(document, message) {

    const elements = document.querySelectorAll('.sc-f90a41ca-3');
  
    const elementsArray = Array.from(elements);
  
    elementsArray.forEach(element => {
      if (element.textContent.trim() === message.message.dealType) {
        element.click();
      }
    });
  
  }


  export function fillImages(document, message) {

  
    const stringArray2 = message.message.imagePathes.split(' ');
    
    async function uploadImages(stringArray,input) {
      return new Promise(async (resolve, reject) => {
        try {
  
         const input = document.evaluate('//div[@id="create-app-images"]//input[@type="file"]',document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
          
          const dataTransfer = new DataTransfer();
  
  
          const fetchPromises = stringArray.map(async (imageUrl, i) => {
            try {
                     
              const response = await axios.post('https://mmsback.azurewebsites.net/image/getImage', {
                imageUrl: imageUrl
              }, {
                responseType: 'arraybuffer' // Ensure the response is treated as binary data
              });
          
             
              // Assuming that the response.data is an ArrayBuffer
              const blob = new Blob([response.data], { type: 'image/jpeg' });
              // Assuming that dataTransfer is defined elsewhere in your code
              dataTransfer.items.add(new File([blob], `image${i}.jpg`, { type: 'image/jpeg' }));
          
            } catch (error) {
              console.error('Error fetching image:', imageUrl, error);
            }
          });
          
          // Assuming you want to wait for all requests to finish before proceeding
          await Promise.all(fetchPromises);
          
          // Do something after all requests have completed
          console.log("All requests completed");
          
          // Set the DataTransfer object containing all files to the input element
          input.value = null;
  
       
          input.files = dataTransfer.files;
  
          // Dispatch the 'change' event once after all files are added
          const event = new Event('change', {
            bubbles: true,
          });
          input.dispatchEvent(event);
  
          // Resolve the promise to indicate that the upload is complete
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }
  
    // Usage example
    uploadImages(stringArray2)
      .then(() => {
        // The upload is complete, you can stop the progress indicator here
        console.log('Image upload complete');
      })
      .catch((error) => {
        console.error('Error during image upload:', error);
      });
  
  }
  

  
export function fillStatus(document, message) {

  setTimeout(function () {
    var xpathExpression = "//div[@id='create-form-details']//span[text()='სტატუსი']";
    var result = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    var targetSpan = result.singleNodeValue;


    var firstSibling = targetSpan.parentElement.nextElementSibling;


    var paragraphs = firstSibling.querySelectorAll('p');
 
    paragraphs.forEach(function (paragraph) {
      if (paragraph.textContent.trim() === message.message.constructionStatus)
        paragraph.click();
    });
  }, 2000);

}



export function fillRooms(document, message) {

  var xpathExpression = "//div[@id='create-form-details']//span[text()='ოთახები']";
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

        var integerNumber = parseInt(message.message.rooms, 10);

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



export function fillTotalArea(document, message) {

  const totalAreaInput = document.getElementsByName('totalArea')[0];
  totalAreaInput.value = message.message.estateSpace;
 
  const event = new Event('change', {
    bubbles: true,
  });
  
  totalAreaInput.dispatchEvent(event);
}
