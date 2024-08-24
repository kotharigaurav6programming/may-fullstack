// Program showing the concept of Function
// With argument with return type
import java.util.Scanner;
class Fun7{
    /*function to find out average of three numbers*/
    // With return type
    double average(int a,int b,int c){
        return (a+b+c)/3.0;
    }
    public static void main(String args[]){
        Fun7 obj = new Fun7();
        Scanner sc = new Scanner(System.in);
       
        System.out.println("Enter three numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
       
        System.out.println("Result : "+obj.average(a,b,c)); // with argument
    }
}