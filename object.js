let bike={
    Name:"Royal Enfield",
    Price:120000,
    Year :2023
}
bike.getDetails = function() {
    return `Bike: ${this.Name}, Price: ${this.Price}, Year: ${this.year}`;
};
console.log(bike.getDetails());
