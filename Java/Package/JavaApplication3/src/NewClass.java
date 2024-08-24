

import java.util.Scanner;

public class NewClass {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        GetSum obj = new GetSum();
        System.out.println("sum : "+obj.getSum(a, b));
    }
}
