// program to check whether entered year is leap year or not 
import java.util.Scanner;
class Demo3{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter year : ");
        int year = sc.nextInt();

        String msg = ((year%4==0 && year%100!=0)|| (year%400==0)) ? "Year is a leap year" : "Year is not a leap year";
        
        System.out.println(msg);
    }
}