// example to check whether entered number is palindrome or not 

import java.util.Scanner;
class Demo8{
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

        // logic to check whether entered no. is palindrome or not 
        String result = (num==rev) ? "Palindrome Number" : "Not a Palindrome Number";
        System.out.println(result);
    }
}


/*
Hw Questions
------------
1. Program to find out the sum of all the digits of a three digit number
    ex : 123 = 1+2+3 = 6

2. Program to find out the sum of first and last digit of a 5 digit number
    ex: 12345 = 1+5 = 6

3. Program to interchange the first and last digit of a 4 digit number
    ex: 1234 => 4231  
*/














