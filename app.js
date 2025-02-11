function fromDollarToYen(dollar) {
    let dollarToEuro = dollar / 1.07
    let yen = dollarToEuro * 156.5
   return yen; 
 }
 
 function fromEuroToDollar(euro) {
     return euro * 1.07; 
 }
 
 function fromYenToPound(yen){
     let yenToEuro = yen / 156.5
     let pound = yenToEuro * 0.87 
     return pound;   
 }
  module.exports = {fromYenToPound, fromDollarToYen, fromEuroToDollar} 