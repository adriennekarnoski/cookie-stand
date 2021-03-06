'use strict';
//array of business hours
var timeOfDay = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];
//variable to store data for cookies sold each hour
var salmonCookieStores = [];
//get table id to put javascript into
var storeTable = document.getElementById('table');

var createCookieStoreForm = document.getElementById('new-store-form');

//object constructor function
function CookieStore(storeName, minCustomers, maxCustomers, averageCookies) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.hourlyCookies = [];
  this.customersPerHour = function() {
    for (var i = 0; i < timeOfDay.length; i++) {
      this.hourlyCookies.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
      console.log('customers per hour calculation');
    }
  };
  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function() {
    this.customersPerHour();
    for (var i = 0; i < timeOfDay.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.hourlyCookies[i] * this.averageCookies));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
    }
  };
  this.render = function() {
    this.totalCookiesPerDay = 0;
    this.calcCookiesSoldEachHour();
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);

    for (var i = 0; i < timeOfDay.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdEl);
    storeTable.appendChild(trEl);
  };
 //this.calcCookiesSoldEachHour();
  salmonCookieStores.push(this);
};

//makes objects
new CookieStore('1st and Pike', 23, 65, 6.3);
new CookieStore('SeaTac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 38, 2.3);
new CookieStore('Alki', 3, 24, 1.2);

function makeHeaderRow() {
  // var storeTable = document.getElementById('table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for (var i = 0; i < timeOfDay.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = timeOfDay[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total Cookies';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
};

function storeRows() {
  makeHeaderRow();
  for (var i = 0; i < salmonCookieStores.length; i++) {
    salmonCookieStores[i].render();
  }
};

function makeFooterRow() {
  //row label
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);

  //loop through each store for each hour open
  var allTotals = 0;
    for (var i = 0; i < timeOfDay.length; i++) {
      var tdEl = document.createElement('td');
      var hourlyTotal = 0;
      // var allTotals;
      for (var z = 0; z < salmonCookieStores.length; z++) {
        hourlyTotal += salmonCookieStores[z].cookiesSoldEachHour[i];
        console.log('z is = ' + salmonCookieStores[z]);
        allTotals += salmonCookieStores[z].cookiesSoldEachHour[i];
        }
        tdEl.textContent = hourlyTotal;
        trEl.appendChild(tdEl);
      }

      tdEl = document.createElement('td');
      tdEl.textContent = allTotals;
      trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);
}

function handleNewCookieStoreLocation(event) {
  event.preventDefault();

  var submitStoreLocation = event.target.submitStoreLocation.value;
  var submitMinCustomers = parseInt(event.target.submitMinCustomers.value);
  var submitMaxCustomers = parseInt(event.target.submitMaxCustomers.value);
  var submitAverageCookies = parseInt(event.target.submitAverageCookies.value);

  var newCookieStoreLocation = new CookieStore(submitStoreLocation, submitMinCustomers, submitMaxCustomers, submitAverageCookies);

  salmonCookieStores.push(newCookieStoreLocation);
  //storeRows();
  newCookieStoreLocation.render();
};
  //makeHeaderRow();
  storeRows();
makeFooterRow();
createCookieStoreForm.addEventListener('submit', handleNewCookieStoreLocation);
