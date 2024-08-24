// program showing the concept of lambda expression

import java.util.Scanner;
@FunctionalInterface
interface Showable{
    int calculation(int a,int b);
}
class Demo3{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        Showable obj;
        obj = (a1,b1)->(a1+b1);
        System.out.println("sum : "+obj.calculation(a,b));
        obj = (a1,b1)->(a1-b1);
        System.out.println("sub : "+obj.calculation(a,b));
        obj = (a1,b1)->(a1*b1);
        System.out.println("mul : "+obj.calculation(a,b));

    }
}