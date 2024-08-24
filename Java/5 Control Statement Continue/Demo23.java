// program to reverse all the numbers between two entered numbers

import java.util.Scanner;
class Demo23{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter initial and final number : ");
        int initial = sc.nextInt();
        int limit = sc.nextInt();

        for(int temp=initial;temp<=limit;temp++){
            int rev=0;
            int num=temp;
            while(num>0){
                int rem = num%10;
                rev = rev*10+rem;
                num = num/10;
            }
            System.out.println("Reversing number : "+rev);
        }
    }
}