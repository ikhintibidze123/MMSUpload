const path = require('path');

module.exports = {
  entry: {
    background: './src/background/background.js',
    content: './src/content/content.js',
    myhome_controller: './src/content/myhome/myhome_controller.js', 
    myhome_apartament_service: './src/content/myhome/myhome_apartament_service.js',
    myhome_house_service: './src/content/myhome/myhome_house_service.js',
    myhome_commerce_service: './src/content/myhome/myhome_commerce_service.js',
    myhome_land_service: './src/content/myhome/myhome_land_service.js',
    myhome_hotel_service: './src/content/myhome/myhome_hotel_service.js',
    ss_controller: './src/content/ss/ss_controller.js', 
    ss_apartament_service: './src/content/ss/ss_apartament_service.js',
    ss_land_service: './src/content/ss/ss_land_service.js',
    ss_commerce_service: './src/content/ss/ss_commerce_service.js',
    ss_hotel_service: './src/content/ss/ss_hotel_service.js',
    ss_house_service: './src/content/ss/ss_house_service.js',
    ss_common_service: './src/content/ss/ss_common_service.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
