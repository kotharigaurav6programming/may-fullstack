// program showing the concept of exception handling

import java.util.Scanner;
class ExceptionDemo2
{
    int divide(int a,int b){
        int c = a/b;
        return c;
    }
    public static void main(String args[]){
        ExceptionDemo2 obj = new ExceptionDemo2();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        try{
            int c = obj.divide(a,b);
            System.out.println("Result : "+c);
        }catch(Exception e){
              e.printStackTrace();
        }
    }
}