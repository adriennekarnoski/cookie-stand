'use strict';

var timeOfDay = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000'];

var salmonCookieStores = [];
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
  this.totalCookiesPerDay = 0;

this.calcCookiesSoldEachHour();
  salmonCookieStores.push(this);


};

new CookieStore('1st and Pike', 23, 65, 6.3);


//First and Pike
// var pike = {
//   minCustomers: 23,
//   maxCustomers: 65,
//   averageCookies: 6.3,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//
//   },
//   cookiesPerHour: function() {
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var cookiesPer = Math.floor(this.averageCookies * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//   cookiesPerDay: function() {
//     var total = 0;
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       total += this.hourlyCookies[i];
//
//     }
//     return total;
//   },
//   render: function() {
//     var pikeUL = document.getElementById('pike');
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + pike.hourlyCookies[i] + ' cookies per hour';
//       pikeUL.appendChild(liEl);
//     }
//     var total = document.getElementById('pike');
//     liEl = document.createElement('li');
//     liEl.textContent = 'total - ' + pike.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
//
// pike.customersPerHour();
// pike.cookiesPerHour();
// pike.render();
//
// //SeaTac Airport
// var seaTacAirport = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   averageCookies: 1.2,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//
//   },
//   cookiesPerHour: function() {
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var cookiesPer = Math.floor(this.averageCookies * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//   cookiesPerDay: function() {
//     var total = 0;
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       total += this.hourlyCookies[i];
//
//     }
//     return total;
//   },
//   render: function() {
//     var seaTacAirportUL = document.getElementById('seatac-airport');
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + seaTacAirport.hourlyCookies[i] + ' cookies per hour';
//       seaTacAirportUL.appendChild(liEl);
//     }
//     var total = document.getElementById('seatac-airport');
//     liEl = document.createElement('li');
//     liEl.textContent = 'total - ' + seaTacAirport.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
//
// seaTacAirport.customersPerHour();
// seaTacAirport.cookiesPerHour();
// seaTacAirport.render();
//
// //Seattle Center
// var seattleCenter = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   averageCookies: 3.7,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//
//   },
//   cookiesPerHour: function() {
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var cookiesPer = Math.floor(this.averageCookies * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//   cookiesPerDay: function() {
//     var total = 0;
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       total += this.hourlyCookies[i];
//
//     }
//     return total;
//   },
//   render: function() {
//     var seattleCenterUL = document.getElementById('seattle-center');
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + seattleCenter.hourlyCookies[i] + ' cookies per hour';
//       seattleCenterUL.appendChild(liEl);
//     }
//     var total = document.getElementById('seattle-center');
//     liEl = document.createElement('li');
//     liEl.textContent = 'total - ' + seattleCenter.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
//
// seattleCenter.customersPerHour();
// seattleCenter.cookiesPerHour();
// seattleCenter.render();
//
// //Capitol Hill
// var capitolHill = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   averageCookies: 2.3,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//
//   },
//   cookiesPerHour: function() {
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var cookiesPer = Math.floor(this.averageCookies * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//   cookiesPerDay: function() {
//     var total = 0;
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       total += this.hourlyCookies[i];
//
//     }
//     return total;
//   },
//   render: function() {
//     var capitolHillUL = document.getElementById('capitol-hill');
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + capitolHill.hourlyCookies[i] + ' cookies per hour';
//       capitolHillUL.appendChild(liEl);
//     }
//     var total = document.getElementById('capitol-hill');
//     liEl = document.createElement('li');
//     liEl.textContent = 'total - ' + capitolHill.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
//
// capitolHill.customersPerHour();
// capitolHill.cookiesPerHour();
// capitolHill.render();
//
// //Alki
// var alki = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   averageCookies: 1.2,
//   hourlyCookies: [],
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//
//   },
//   cookiesPerHour: function() {
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var cookiesPer = Math.floor(this.averageCookies * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//   cookiesPerDay: function() {
//     var total = 0;
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       total += this.hourlyCookies[i];
//
//     }
//     return total;
//   },
//   render: function() {
//     var alkiUL = document.getElementById('alki');
//     for (var i = 0; i < timeOfDay.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = timeOfDay[i] + ': ' + alki.hourlyCookies[i] + ' cookies per hour';
//       alkiUL.appendChild(liEl);
//     }
//     var total = document.getElementById('alki');
//     liEl = document.createElement('li');
//     liEl.textContent = 'total - ' + alki.cookiesPerDay(total);
//     total.appendChild(liEl);
//   }
// };
//
// alki.customersPerHour();
// alki.cookiesPerHour();
// alki.render();
