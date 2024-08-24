// program to check whether entered number is armstrong or not

import java.util.Scanner;
class Demo22{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        int count=0,temp=num,rem,temp1=num;
        double sum=0;
        while(num>0){
            count++;
            num = num/10;
        }
        while(temp>0){
            rem = temp%10;
            sum = sum + Math.pow(rem,count);
            temp=temp/10;
        }
        if(sum==temp1)
            System.out.println("Number is armstrong");
        else
            System.out.println("Number is not armstrong");
    }
}