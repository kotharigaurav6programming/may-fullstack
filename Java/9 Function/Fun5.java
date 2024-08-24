// Program showing the concept of Function
// No argument with return type
import java.util.Scanner;
class Fun5{
    /*function to find out average of three numbers*/
    // with return type
    double average(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter three numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        return (a+b+c)/3.0;
    }
    public static void main(String args[]){
        Fun5 obj = new Fun5();
        System.out.println("Result : "+obj.average()); // no argument
    }
}