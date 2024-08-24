// program showing the concept of if else statement
import java.util.Scanner;
class Demo15{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
       
        if(a>b){
            System.out.println(a+" is greater");
            System.out.println("gets entry in if");
        }
        else{
            System.out.println(b+" is greater");
            System.out.println("gets entry in else");
        }    
    }
}