// program to print table of all the numbers between two entered numbers

import java.util.Scanner;
class Demo15{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter initial and final limit : ");
        int initial = sc.nextInt();
        int limit = sc.nextInt();

        for(int num = initial;num<=limit;num++){
            // prints table of any specific number
            for(int j=1;j<=10;j++){
                System.out.println(num+" x "+j+" = "+(num*j));
            }
            System.out.println("###################");
        }
    }
}