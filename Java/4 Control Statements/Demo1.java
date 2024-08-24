// Program to swap two numbers (using third variable)
import java.util.Scanner;
class Demo1{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter value of a : ");
        int a = sc.nextInt();
        System.out.println("Enter value of b : ");
        int b = sc.nextInt();

        System.out.println("Before swapping : \na : "+a+"\nb : "+b);
            int temp = a;
            a=b;
            b=temp;
        System.out.println("After swapping : \na : "+a+"\nb : "+b);
    }
}