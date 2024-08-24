// Program showing the concept of Function
// With argument no return type
import java.util.Scanner;
class Fun6{
    /*function to find out average of three numbers*/
    // No return type
    void average(int a,int b,int c){
        System.out.println("Result : "+(a+b+c)/3.0);
    }
    public static void main(String args[]){
        Fun6 obj = new Fun6();
        Scanner sc = new Scanner(System.in);
       
        System.out.println("Enter three numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
       
        obj.average(a,b,c); // with argument
    }
}