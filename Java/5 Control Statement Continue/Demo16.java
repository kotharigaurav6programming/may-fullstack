// program to print factorial of all the numbers between two entered numbers
import java.util.Scanner;
class Demo16{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter initial and final limit : ");
        int initial = sc.nextInt();
        int limit = sc.nextInt();
        
        for(int num = initial;num<=limit;num++){
        long fact=1;
            for(int j=1;j<=num;j++){
                fact=fact*j;
            }
            System.out.println("Factorial of "+num+" : "+fact);
        }
    }
}