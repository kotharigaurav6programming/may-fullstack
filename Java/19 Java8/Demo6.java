// program showing the concept of Method reference
/*
    Method reference : Here we are completing our incomplete method with the help of function
    Method reference can be categorized as : 
        a. Reference to static method
        b. Reference to instance method
        c. Reference to constructor
*/

import java.util.Scanner;

@FunctionalInterface
interface Showable{
    void calculate();
    static void result(){
        System.out.println("-----Interface------");
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println("Sum : "+(a+b));
    }
}
class Demo6{
    Demo6(){
        System.out.println("-----Constructor------");
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println("Sum : "+(a+b));      
    }

    static void result(){
        System.out.println("-----static method------");
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println("Sum : "+(a+b));
    }

    public static void main(String args[]){
        Showable obj;
        obj = Showable :: result;
        obj.calculate();

        obj = Demo6 :: result;
        obj.calculate();

        obj = Demo6 :: new;
        obj.calculate();
    }
}