import * as ssApartamentService from './ss_apartament_service.js';
import * as ssCommerceService from './ss_commerce_service.js';
import * as ssLandService from './ss_land_service.js';
import * as ssHouseService from './ss_house_service.js';
import * as ssHotelService from './ss_hotel_service.js';
import * as ssCommonService from './ss_common_service.js';


export function fillSSApartament(document,message) {
 
  
  setTimeout(function () { ssApartamentService.fillBedrooms(document,message)}, 2000); 
  
  setTimeout(function () { ssApartamentService.fillCurrentFloor(document,message)}, 2000);
  setTimeout(function () { ssApartamentService.fillAllFloor(document,message)}, 2000);
  setTimeout(function () { ssApartamentService.fillBalcony(document,message)}, 2000);
  setTimeout(function () { ssApartamentService.fillWetPoint(document,message)}, 2000);
  setTimeout(function () { ssApartamentService.fillProject(document,message)}, 2000);
  setTimeout(function () { ssApartamentService.fillCondition(document,message)}, 2000);
  setTimeout(function () { ssApartamentService.fillAdditionFields(document,message)}, 2000);
  setTimeout(function () { ssApartamentService.fillPriceGEL(document,message)}, 5000);
  
  /*
   
  
 

  
  setTimeout(function () { ssApartamentService.fillOther(document,message)}, 1000);
  setTimeout(function () { ssApartamentService.fillCondition(document,message)}, 1000);
 
  setTimeout(function () { ssApartamentService.fillAdditionFields(document,message)}, 2000);
  */
}



export function fillSSHotel(document,message) {
  setTimeout(function () { ssHotelService.fillAdditionFields(document,message)}, 2000); 
  
  // setTimeout(function () { ssHotelService.fillBalcony(document,message)}, 1000);
  setTimeout(function () { ssHotelService.fillCondition(document,message)}, 1000);
  setTimeout(function () { ssHotelService.fillPriceUSD(document,message)}, 1000);
}



export function fillSSLand(document,message) {
  
  setTimeout(function () { ssLandService.fillBalcony(document,message)}, 1000);
  setTimeout(function () { ssLandService.fillCondition(document,message)}, 1000);
  setTimeout(function () { ssLandService.fillPriceUSD(document,message)}, 1000);
  
}




export function fillSSHouse(document,message) {
  
  setTimeout(function () { ssHouseService.fillAdditionFields(document,message)}, 2000);
  setTimeout(function () { ssHouseService.fillCondition(document,message)}, 1000);
  setTimeout(function () { ssHouseService.fillPriceUSD(document,message)}, 1000);
  setTimeout(function () { ssHouseService.fillYardArea(document,message)}, 2000);
  setTimeout(function () { ssHouseService.fillHouseTotalArea(document,message)}, 2000);

}



export function fillSSCommerce(document,message) {
 
  setTimeout(function () { ssCommerceService.fillAdditionFields(document,message)}, 2000); 
  
  setTimeout(function () { ssCommerceService.fillBalcony(document,message)}, 1000);
  setTimeout(function () { ssCommerceService.fillCondition(document,message)}, 1000);
  setTimeout(function () { ssCommerceService.fillPriceUSD(document,message)}, 1000);
  setTimeout(function () { ssCommerceService.fillCommerceEstateType(document,message)}, 1000);

  
}


export function fillSSCommon(document,message) {
  setTimeout(function () { ssCommonService.fillRealEstateType(document,message)}, 2000);
  setTimeout(function () { ssCommonService.fillRealEstateDealType(document,message)}, 2000);
  setTimeout(function () { ssCommonService.fillImages(document,message)}, 2000);
  setTimeout(function () { ssCommonService.fillStatus(document,message)}, 2000);
  setTimeout(function () { ssCommonService.fillRooms(document,message)}, 2000); 
  setTimeout(function () { ssCommonService.fillBedrooms(document,message)}, 2000); 
  setTimeout(function () { ssCommonService.fillTotalArea(document,message)}, 2000);
  setTimeout(function () { ssCommonService.fillDescription(document,message)}, 2000);
  setTimeout(function () { ssCommonService.fillCondition(document,message)}, 2000);
  setTimeout(function () { ssCommonService.fillAdditionFields(document,message)}, 2000);
  
}