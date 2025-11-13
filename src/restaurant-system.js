/* eslint-disable max-classes-per-file */

class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDescription() {
    return `${this.name} - $${this.price}`;
  }
}

class Entree extends MenuItem {
  constructor(name, price, type) {
    super(name, price);
    this.type = type;
  }
  getDescription() {
    return `$${this.name} - ${this.price} (${this.type})`;
  }
}

class Dessert extends MenuItem {
  getDescription() {
    return `$${this.price} - ${this.name}`;
  }
}

class Beverage extends MenuItem {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }
  getDescription() {
    return `$${this.price} - ${this.name} (${this.size})`;
  }
};

module.exports = {
  MenuItem,
  Entree,
  Dessert,
  Beverage,
  printDescriptions,
};
