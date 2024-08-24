// program to find out factors of a number

import java.util.Scanner;
class Demo8{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        for(int i=1;i<=num;i++){
            if(num%i==0)    
                System.out.print(i+"\t");
        }
    }
}
/*
    WAP to find out the sum of n natural numbers
    WAP to print even number series
        |-- n even numbers
        |-- even numbers upto n
    WAP to print odd number series
        |-- n odd numbers
        |-- odd numbers upto n
*/


