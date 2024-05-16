class Vihical {
  constructor(brand, type) {
    this.brand = brand;
    this.type = type;
    this.color = "black";
  }
  get color() {
    return this.color;
  }

  set color(color_value) {
    this.color = color_value;
  }

  get price() {
    return this.price;
  }

  set price(price_value) {
    this.price = price_value;
  }

  forward() {
    return "Car brand is:" + this.brand;
  }
  ture_left() {
    console.log("The car is turn left.");
  }
  ture_right() {
    console.log("The car is turn right.");
  }
  stop() {
    this.speed = 0;
    console.log("The car is stop.");
  }
}
