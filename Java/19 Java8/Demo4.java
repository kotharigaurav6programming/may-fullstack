// program showing the concept of lambda expression

import java.util.Scanner;

@FunctionalInterface
interface Showable{
    void calculate();
}

class Demo4{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        Showable obj = ()->{
            System.out.println("Enter two numbers : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println("Sum : "+(a+b));
        };        

        obj.calculate();
    }
}