// example showing the concept of prototype

function Vehicle(){
    this.name = "AUDI"
    this.price = 2000000
    this.capacity = 5
    this.greetMessage = function(){
        console.log("----Welcome to Audi Showroom----");
    }
}
Vehicle.prototype.printDetails = function(){
    return `Vehicle Name : ${this.name}\nPrice : ${this.price}\nCapacity : ${this.capacity}`;
}
const obj = new Vehicle();
obj.greetMessage();
console.log(obj.printDetails());
