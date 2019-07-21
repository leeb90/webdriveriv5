var Page = require('./Page');
var CalculatorPage = Object.create(Page,{
//Selectors
LotOptions: {get: function(){return browser.$$('body #Lot option');}},
LotOptionSelector: {get: function(){return browser.$('body #Lot');}},
EntryTimeTextBox: {get: function(){return browser.$('body #EntryTime');}},
ExitTimeTextBox: {get: function(){return browser.$('body #ExitTime');}},
EntryTimeAMRadioButton: {get: function(){return browser.$('input[value="AM"][name="EntryTimeAMPM"]');}},
ExitTimeAMRadioButton: {get: function(){return browser.$('input[value="AM"][name="ExitTimeAMPM"]');}},
EntryTimePMRadioButton: {get: function(){return browser.$('input[value="PM"][name="EntryTimeAMPM"]');}},
ExitTimePMRadioButton: {get: function(){return browser.$('input[value="PM"][name="ExitTimeAMPM"]');}},
EntryDate: {get: function(){return browser.$('body #EntryDate');}},
ExitDate: {get: function(){return browser.$('body #ExitDate');}},
CalculateButton: {get: function(){return browser.$('input[value="Calculate"]');}},
CalculateCost: {get: function(){return browser.$('body .SubHead b');}},

});

module.exports= CalculatorPage;