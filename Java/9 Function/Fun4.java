// Program showing the concept of Function
// No argument no return type

import java.util.Scanner;
class Fun4{
    /*function to find out average of three numbers*/
    // no return type
    void average(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter three numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        double avg = (a+b+c)/3.0;
        System.out.println("Average : "+avg);
    }
    public static void main(String args[]){
        Fun4 obj = new Fun4();
        obj.average(); // no argument
    }
}