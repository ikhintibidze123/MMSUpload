import * as myhomeService from './myhome_apartament_service.js';
import * as myhomeHouseService from './myhome_house_service.js';
import * as myhomeCommerceService from './myhome_commerce_service.js';
import * as myhomeLandService from './myhome_land_service.js';
import * as myhomeHotelService from './myhome_hotel_service.js';


export function fillMyhomeHouse(document,message) {
  myhomeHouseService.fillRealEstateType(document,message);
  myhomeHouseService.fillRealEstateDealType(document,message);
  myhomeHouseService.fillCondition(document,message);
  myhomeHouseService.fillCeilingHeight(document,message);
  myhomeHouseService.fillTotalArea(document,message);
  myhomeHouseService.fillAllFloor(document,message);
  myhomeHouseService.fillRooms(document,message);
  myhomeHouseService.fillBedrooms(document,message);
  myhomeHouseService.fillWetPoints(document,message);
  myhomeHouseService.hasBalcony(document,message);
  myhomeHouseService.hasLoggia(document,message);
  myhomeHouseService.hasPorch(document,message);
  myhomeHouseService.hasStorage(document,message);
  myhomeHouseService.hasGas(document,message);
  myhomeHouseService.hasInternet(document,message);
  myhomeHouseService.hasFireplace(document,message);
  myhomeHouseService.fillParkingType(document,message);
  myhomeHouseService.fillHotWaterType(document,message);
  myhomeHouseService.fillHeatingType(document,message);
  myhomeHouseService.fillPrices(document,message);
  myhomeHouseService.fillDescription(document,message);
  myhomeHouseService.fillImages(document,message);
  myhomeHouseService.checkFurnTech(document,message);
  myhomeHouseService.checkTV(document,message);
  myhomeHouseService.checkPhone(document,message);
  myhomeHouseService.checkTV(document,message);
  myhomeHouseService.checkConditioner(document,message);
  myhomeHouseService.checkFurniture(document,message);
  myhomeHouseService.fillYardSpace(document,message);
  myhomeHouseService.fillRentHoleHouse(document,message);
}




export function fillMyhomeApartament(document,message) {

    myhomeService.fillRealEstateType(document,message);
    myhomeService.fillRealEstateDealType(document,message);   
    myhomeService.fillStatus(document,message);
    myhomeService.fillCondition(document,message);
    myhomeService.fillProject(document,message);
    myhomeService.fillCeilingHeight(document,message);
    myhomeService.fillTotalArea(document,message);
    myhomeService.fillAllFloor(document,message);
    myhomeService.fillCurrentFloor(document,message);
    setTimeout(function () { myhomeService.fillRooms(document,message)}, 2000);
    myhomeService.fillBedrooms(document,message);
    myhomeService.fillWetPoints(document,message);
    myhomeService.hasBalcony(document,message);
    myhomeService.hasLoggia(document,message);
    myhomeService.hasPorch(document,message);
    myhomeService.hasStorage(document,message);
    myhomeService.hasGas(document,message);
    myhomeService.hasInternet(document,message);
    myhomeService.hasFireplace(document,message);
    myhomeService.hasPassElev(document,message);
    myhomeService.hasFreightElev(document,message);
    myhomeService.fillDescription(document,message);
    myhomeService.fillImages(document,message);
    myhomeService.fillParkingType(document,message);
    myhomeService.fillHotWaterType(document,message);
    myhomeService.fillHeatingType(document,message);
    myhomeService.checkFurnTech(document,message);
    myhomeService.checkPhone(document,message);
    myhomeService.checkTV(document,message);
    myhomeService.checkConditioner(document,message);
    myhomeService.checkFurniture(document,message);
    myhomeService.fillPrices(document, message);

    fillRentHoleHouse
  }


  export function fillMyhomeCommerce(document,message) {
    myhomeCommerceService.fillRealEstateType(document,message);
    myhomeCommerceService.fillRealEstateDealType(document,message);
    myhomeCommerceService.fillCondition(document,message);
    myhomeCommerceService.fillCeilingHeight(document,message);
    myhomeCommerceService.fillTotalArea(document,message);
    myhomeCommerceService.fillAllFloor(document,message);
    myhomeCommerceService.fillRooms(document,message);
    myhomeCommerceService.fillWetPoints(document,message);
    myhomeCommerceService.hasBalcony(document,message);
    myhomeCommerceService.hasPorch(document,message);
    myhomeCommerceService.hasStorage(document,message);
    myhomeCommerceService.hasGas(document,message);
    myhomeCommerceService.hasInternet(document,message);
    myhomeCommerceService.fillParkingType(document,message);
    myhomeCommerceService.fillHotWaterType(document,message);
    myhomeCommerceService.fillHeatingType(document,message);
    myhomeCommerceService.fillPrices(document,message);
    myhomeCommerceService.fillDescription(document,message);
    myhomeCommerceService.fillImages(document,message);
    myhomeCommerceService.checkTV(document,message);
    myhomeCommerceService.fillCommerceEstateType(document,message);
    myhomeCommerceService.fillCurrentFloor(document,message);
    
    
  }


  export function fillMyhomeLand(document,message) {
    myhomeLandService.fillRealEstateType(document,message);
    myhomeLandService.fillRealEstateDealType(document,message);
    myhomeLandService.fillTotalArea(document,message);
    myhomeLandService.hasGas(document,message);
    myhomeLandService.fillPrices(document,message);
    myhomeLandService.fillDescription(document,message);
    myhomeLandService.fillImages(document,message);
    myhomeLandService.fillLandType(document,message);
    myhomeLandService.fillAreaMeasure(document,message);
    myhomeLandService.fillAreaMeasure(document,message);
  }


  export function fillMyhomeHotel(document,message) {
    myhomeHotelService.fillRealEstateType(document,message);
    myhomeHotelService.fillRealEstateDealType(document,message);
    myhomeHotelService.fillCondition(document,message);
    myhomeHotelService.fillCeilingHeight(document,message);
    myhomeHotelService.fillTotalArea(document,message);
    myhomeHotelService.fillAllFloor(document,message);
    myhomeHotelService.fillCurrentFloor(document,message);
    myhomeHotelService.fillRooms(document,message);
    myhomeHotelService.fillBedrooms(document,message);
    myhomeHotelService.fillWetPoints(document,message);
    myhomeHotelService.hasBalcony(document,message);
    myhomeHotelService.hasLoggia(document,message);
    myhomeHotelService.hasStorage(document,message);
    myhomeHotelService.fillParkingType(document,message);
    myhomeHotelService.fillHotWaterType(document,message);
    myhomeHotelService.fillHeatingType(document,message);
    myhomeHotelService.hasGas(document,message);
    myhomeHotelService.hasInternet(document,message);
    myhomeHotelService.hasFireplace(document,message);
    myhomeHotelService.checkFurnTech(document,message);
    myhomeHotelService.checkTV(document,message);
    myhomeHotelService.checkPhone(document,message);
    myhomeHotelService.checkTV(document,message);
    myhomeHotelService.checkConditioner(document,message);
    myhomeHotelService.checkFurniture(document,message);
    myhomeHotelService.fillPrices(document,message);
    myhomeHotelService.fillDescription(document,message);
    myhomeHotelService.fillImages(document,message);
  }