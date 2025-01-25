// example showing the concept of prototype

function Bank(){
    this.setBalance = function(actNo,actHolder,balance){
        this.actNo = actNo;
        this.actHolder = actHolder;
        this.balance = balance;
    }
}
Bank.prototype.showDetails = function(){
    console.log(`\nAccount Number : ${this.actNo}`);
    console.log(`Account Holder Name : ${this.actHolder}`);
    console.log(`Balance : $${this.balance}`);    
}
Bank.prototype.deposit = function(damt){
    this.balance+=damt;
}
Bank.prototype.withDrawal = function(wamt){
    if(wamt>this.balance){
        console.log(`Requested amount of $${wamt} is exceeded with balance $${this.balance}`);
        console.log("Waiting for deposit.....");
        setTimeout(()=>{
            this.deposit(50000);
            console.log("Amount Deposited.....\nNow you can withdraw....");
            this.balance = this.balance-wamt;
            this.showDetails();    
        },4000);
    }else{
        console.log(`Requested amount of $${wamt} is under limit of balance $${this.balance}`);
        this.balance = this.balance-wamt;
        this.showDetails();
    }
}
// creating object of Bank
const obj = new Bank();
obj.setBalance("BNK00123","Andrew Anderson",50000);
obj.withDrawal(60000);