var Page = require('./Page');
var CalculatorPage = Object.create(Page,{
//Selectors
LotOptions: {get: function(){return browser.$$('body #Lot option');}},

});

module.exports= CalculatorPage;