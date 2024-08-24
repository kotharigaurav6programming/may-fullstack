// program showing the concept of Multilevel Inheritance

class Account
{
    int actno;
    String name;
    Account(int actno,String name){
        this.actno=actno;
        this.name=name;
    }
    void displayActDetails(){
        System.out.println("Account number : "+actno);
        System.out.println("Name : "+name);
    }
}
class Balance extends Account{
    int bal;
    Balance(int actno,String name,int bal){
        super(actno,name);
        this.bal=bal;
    }
    void displayBalance(){
        displayActDetails();
        System.out.println("Balance : "+bal);
    }
}
class Transaction extends Balance{
    int wamt,damt;
    Transaction(int actno,String name,int bal,int wamt,int damt){
        super(actno,name,bal);
        this.wamt = wamt;
        this.damt = damt;
    }
    void display(){
        displayBalance();
        System.out.println("Withdrawal Amount : "+wamt);
        System.out.println("deposite Amount : "+damt);
        System.out.println("Final balance : "+(bal+damt-wamt));
    }
}
class Demo4{
    public static void main(String args[]){
        Transaction obj = new Transaction(23456,"Andrew Anderson",90000,3456,12000);
        obj.display();
    }
}