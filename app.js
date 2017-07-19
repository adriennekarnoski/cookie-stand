'use strict';
//array of business hours
var timeOfDay = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];
//variable to store data for cookies sold each hour
var salmonCookieStores = [];
//get table id to put javascript into
var storeTable = document.getElementById('table');

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

 this.calcCookiesSoldEachHour();
  salmonCookieStores.push(this);

};


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
  var thEl = document.createElement('th');
  thEl.textContent = timeOfDay[i];
  trEl.appendChild(thEl);
}
thEl = document.createElement('th');
thEl.textContent = "Total Cookies";
trEl.appendChild(thEl);
storeTable.appendChild(trEl);
};

function storeRows() {
  for (var i = 0; i < timeOfDay.length; i++) {
    salmonCookieStores[i].render();
  }
};
  makeHeaderRow();
  storeRows();
