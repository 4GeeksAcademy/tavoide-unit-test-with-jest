const {fromYenToPound} = require('./app.js')
test("2000 yen should be 11.1182109 pounds", () => {
    expect(fromYenToPound(2000)).toBe(11.11821086261981)
}); 

const {fromEuroToDollar} = require('./app.js')
test("100 euros should be 107 dollars", () => {
    expect(fromEuroToDollar(100)).toBe(107)
}); 

const {fromDollarToYen} = require('./app.js')
test("100 dollars should be 14626.168224299065 yen", () => {
    expect(fromDollarToYen(100)).toBe(14626.168224299065)
}); 
