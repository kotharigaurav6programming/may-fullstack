// program showing the concept of exception handling

import java.util.Scanner;
class ExceptionDemo3
{
    int divide(int a,int b){
        int c=0;
        try{
            c = a/b;
            if(c>=5)
                throw new ArithmeticException("Result greater than or equals to 5");
        }catch(ArithmeticException e){
            System.out.println("Exception : "+e);
            System.exit(0);
        }
        return c;
    }
    public static void main(String args[]){
        ExceptionDemo3 obj = new ExceptionDemo3();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

            int c = obj.divide(a,b);
            System.out.println("Result : "+c);
    }
}