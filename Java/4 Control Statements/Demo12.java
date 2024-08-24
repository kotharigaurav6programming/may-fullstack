// program showing the concept of if statement
import java.util.Scanner;
class Demo12{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        if(a>b)
            System.out.println(a+" is greater");
        if(a<b)
            System.out.println(b+" is greater");
        if(a==b)
            System.out.println("Both are equal");
    }
}