'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storesSection = document.getElementById('stores');

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 56,
  avgSale: 6.4,
  customerPerHour: [],
  hourlySales: [],
  counter: 0,
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.customerPerHour.push(customers);
    }
  },
  avgSalePerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let sales = Math.ceil(this.customerPerHour[i] * this.avgSale);
      this.hourlySales.push(sales);
      this.counter += sales;
    }
  },

  render: function () {
    this.getCustomer();
    this.avgSalePerHour();

    let articleEle = document.createElement('article');
    storesSection.appendChild(articleEle);
    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleEle.appendChild(storeHeading);
    let storeUL = document.createElement('ul');
    articleEle.appendChild(storeUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}:${this.hourlySales[i]} cookies.`;
      storeUL.appendChild(hoursLI);
    }
    let storeTotal = document.createElement('li');
    storeTotal.innerText = `Total: ${this.counter} cookies`;
    storeUL.appendChild(storeTotal);
  },
};

seattle.render();


let tokyo = {
  name: 'tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  customerPerHour: [],
  hourlySales: [],
  counter: 0,
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.customerPerHour.push(customers);
    }
  },
  avgSalePerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let sales = Math.ceil(this.customerPerHour[i] * this.avgSale);
      this.hourlySales.push(sales);
      this.counter += sales;
    }
  },

  render: function () {
    this.getCustomer();
    this.avgSalePerHour();

    let articleEle = document.createElement('article');
    storesSection.appendChild(articleEle);
    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleEle.appendChild(storeHeading);
    let storeUL = document.createElement('ul');
    articleEle.appendChild(storeUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}:${this.hourlySales[i]} cookies.`;
      storeUL.appendChild(hoursLI);
    }
    let storeTotal = document.createElement('li');
    storeTotal.innerText = `Total: ${this.counter} cookies`;
    storeUL.appendChild(storeTotal);
  },
};

tokyo.render();

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  customerPerHour: [],
  hourlySales: [],
  counter: 0,
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.customerPerHour.push(customers);
    }
  },
  avgSalePerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let sales = Math.ceil(this.customerPerHour[i] * this.avgSale);
      this.hourlySales.push(sales);
      this.counter += sales;
    }
  },

  render: function () {
    this.getCustomer();
    this.avgSalePerHour();

    let articleEle = document.createElement('article');
    storesSection.appendChild(articleEle);
    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleEle.appendChild(storeHeading);
    let storeUL = document.createElement('ul');
    articleEle.appendChild(storeUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}:${this.hourlySales[i]} cookies.`;
      storeUL.appendChild(hoursLI);
    }
    let storeTotal = document.createElement('li');
    storeTotal.innerText = `Total: ${this.counter} cookies`;
    storeUL.appendChild(storeTotal);
  },
};

dubai.render();

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  customerPerHour: [],
  hourlySales: [],
  counter: 0,
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.customerPerHour.push(customers);
    }
  },
  avgSalePerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let sales = Math.ceil(this.customerPerHour[i] * this.avgSale);
      this.hourlySales.push(sales);
      this.counter += sales;
    }
  },

  render: function () {
    this.getCustomer();
    this.avgSalePerHour();

    let articleEle = document.createElement('article');
    storesSection.appendChild(articleEle);
    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleEle.appendChild(storeHeading);
    let storeUL = document.createElement('ul');
    articleEle.appendChild(storeUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}:${this.hourlySales[i]} cookies.`;
      storeUL.appendChild(hoursLI);
    }
    let storeTotal = document.createElement('li');
    storeTotal.innerText = `Total: ${this.counter} cookies`;
    storeUL.appendChild(storeTotal);
  },
};

paris.render();

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  customerPerHour: [],
  hourlySales: [],
  counter: 0,
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  getCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      let customers = this.randomCustomerGenerator(this.minCust, this.maxCust);
      this.customerPerHour.push(customers);
    }
  },
  avgSalePerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let sales = Math.ceil(this.customerPerHour[i] * this.avgSale);
      this.hourlySales.push(sales);
      this.counter += sales;
    }
  },

  render: function () {
    this.getCustomer();
    this.avgSalePerHour();

    let articleEle = document.createElement('article');
    storesSection.appendChild(articleEle);
    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleEle.appendChild(storeHeading);
    let storeUL = document.createElement('ul');
    articleEle.appendChild(storeUL);

    for (let i = 0; i < hours.length; i++) {
      let hoursLI = document.createElement('li');
      hoursLI.innerText = `${hours[i]}:${this.hourlySales[i]} cookies.`;
      storeUL.appendChild(hoursLI);
    }
    let storeTotal = document.createElement('li');
    storeTotal.innerText = `Total: ${this.counter} cookies`;
    storeUL.appendChild(storeTotal);
  },
};

lima.render();
