//program to check whether entered number is perfect or not

import java.util.Scanner;
class Demo10{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        int sum = 0;
        for(int i=1;i<=num/2;i++){
            if(num%i==0){
                sum = sum+i;
            }
        }
        if(sum==num)
            System.out.println("Number is perfect");
        else 
            System.out.println("Number is not perfect");
    }
}