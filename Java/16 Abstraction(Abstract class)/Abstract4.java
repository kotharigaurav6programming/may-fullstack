// program showing the concept of abstract class

import java.util.Scanner;
abstract class RBI{
    /*abstract method*/
    abstract double rate();

    /*constructor*/
    RBI(){
        System.out.println("---Welcome to Bank---");
    }

    /*concrete method*/
    double finalSum(int balance, double rate){
        return balance*rate/100 + balance;
    }
}
class SBI extends RBI{
    double rate(){
        return 1.25;
    }
}
class BOI extends RBI{
    double rate(){
        return 2.25;
    }
}

class Abstract4{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Balance : ");
        int balance = sc.nextInt();

        RBI instance;
        instance = new SBI();
        System.out.println("Rate of interest provided by SBI : "+instance.rate());
        System.out.println("Final Sum provided by SBI : "+instance.finalSum(balance,instance.rate()));
       
        instance = new BOI();
        System.out.println("Rate of interest provided by BOI : "+instance.rate());
        System.out.println("Final Sum provided by BOI : "+instance.finalSum(balance,instance.rate()));
    }
}