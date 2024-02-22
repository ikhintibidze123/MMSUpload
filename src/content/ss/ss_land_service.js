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




export function fillPriceUSD(document, message) {

  var priceUSD = document.getElementById("PriceUsd");
  priceUSD.value = parseFloat(message.message.priceUSD.replace(/,/g, ''));

  var event = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  priceUSD.dispatchEvent(event);

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


