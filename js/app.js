'use strict';

// *** UNVIVERSAL VARIABLES ***

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const storeArray = [];

const table = document.getElementById('stores');

let myForm = document.getElementById('store-form');


function handleSubmit(event) {
  event.preventDefault();

  let cityName = event.target.city.value;
  let newStore = new Store('name');
  storeArray.push(newStore);
  newStore.render();
  myForm.reset();
}
myForm.addEventListener('submit', handleSubmit);

function renderAll() {
  let rowHeader = document.createElement('tr');
  table.appendChild(rowHeader);
  let storeNames = document.createElement('th');
  rowHeader.appendChild(storeNames);
  storeNames.textContent = ('Stores');
  for (let i = 0; i < storeArray.length; i++) {
    storeArray[i].render();
  }
  for (let i = 0; i < hours.length; i++) {
    let storeHours = document.createElement('td');
    rowHeader.appendChild(storeHours);
    storeHours.textContent = hours[i];
  }
  let dailyLocationHeader = document.createElement('td');
  rowHeader.appendChild(dailyLocationHeader);
  dailyLocationHeader.textContent = 'Daily Location Total';

  let hourlyTotal = new Array(hours.length).fill(0);

  let footerTotal = 0;

  for (let i = 0; i < storeArray.length; i++) {
    footerTotal += storeArray[i].dailyTotalSales;
    for (let j = 0; j < storeArray[i].hourlySales.length; j++) {
      hourlyTotal[j] += storeArray[i].hourlySales[j];
    }
  }

  let rowFooter = document.createElement('tr');
  table.appendChild(rowFooter);

  let dailyTotal = document.createElement('th');
  rowFooter.appendChild(dailyTotal);
  dailyTotal.textContent = 'Totals';

  for (let i = 0; i < hourlyTotal.length; i++) {
    let dailyLocationTotal = document.createElement('td');
    rowFooter.appendChild(dailyLocationTotal);
    dailyLocationTotal.textContent = hourlyTotal[i];
  }
  let storeLocationTotal = document.createElement('td');
  rowFooter.appendChild(storeLocationTotal);
  storeLocationTotal.textContent = footerTotal;
}


// *** CONSTRUCTOR FUNCTION ***

function Store(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.customerPerHour = [],
    this.hourlySales = [],
    this.counter = 0;
  this.dailyTotalSales = 0;

}

function randomCustomerGenerator(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}

// *** PROTOTYPE METHODS ***

Store.prototype.getCustomer = function () {
  for (let i = 0; i < hours.length; i++) {
    let oneHour = randomCustomerGenerator(this.minCust, this.maxCust);
    this.customerPerHour.push(oneHour);

  }
};

Store.prototype.avgSalePerHour = function () {
  this.getCustomer();
  for (let i = 0; i < hours.length; i++) {
    let sales = Math.ceil(this.customerPerHour[i] * this.avgSale);
    this.hourlySales.push(sales);
    this.counter += sales;
  }
};
Store.prototype.dailyLocationSales = function () {
  let totalDailySales = 0;
  for (let i = 0; i < this.hourlySales.length; i++) {
    totalDailySales += this.hourlySales[i];
  }
  this.dailyTotalSales = totalDailySales;
};

Store.prototype.render = function () {
  this.avgSalePerHour();
  this.dailyLocationSales();
  let rowValue = document.createElement('tr');
  table.appendChild(rowValue);
  let storeName = document.createElement('th');
  rowValue.appendChild(storeName);
  storeName.textContent = this.name;
  for (let i = 0; i < hours.length; i++) {
    let storeDataCell = document.createElement('td');
    rowValue.appendChild(storeDataCell);
    storeDataCell.textContent = this.hourlySales[i];
  }
  let dailyTotalCell = document.createElement('td');
  rowValue.appendChild(dailyTotalCell);
  dailyTotalCell.textContent = this.dailyTotalSales;


};

let seattle = new Store('Seattle', 23, 56, 6.4, [], [], 0);
let tokyo = new Store('Tokyo', 3, 24, 1.2, [], [], 0);
let dubai = new Store('Dubai', 11, 38, 3.7, [], [], 0);
let paris = new Store('Paris', 20, 38, 2.3, [], [], 0);
let lima = new Store('Lima', 2, 16, 4.6, [], [], 0);

storeArray.push(seattle, tokyo, dubai, paris, lima);

renderAll();
