// example to reverse three digit number 

import java.util.Scanner;
class Demo7{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter three digit number : ");
        int num = sc.nextInt();

        System.out.println("Three digit number : "+num);

        // logic to reverse three digit number
        int last = num%10;
        int middle = (num/10)%10;
        int first = num/100;
        int rev = last*100 + middle*10 + first*1; 
        System.out.println("Reverse Number : "+rev);
    }
}