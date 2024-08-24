// program showing the concept of switch control statement

import java.util.Scanner;
class Switch3{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();

        switch(num%2){
            case 0 : System.out.println("Number is even");
                        break;
            default : System.out.println("Number is odd");
                        break;
        }
    }
}
/*
56%2 = 0
57%2 = 1
-56%2 = -(56%2) = -0 = 0
-57%2 = -(57%2) = -1 = -1
*/