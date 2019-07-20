var Page = require('./Page');
var CalculatorPage = Object.create(Page,{
//Selectors
LotOptions: {get: function(){return browser.$$('#Lot option');}},

});

module.exports= CalculatorPage;