import java.util.Scanner;
class Example1{
    void add(int a,int b){
        System.out.println("Addition : "+(a+b));
    }
    void sub(int a,int b){
        System.out.println("Subtraction : "+(a-b));
    }
    void mul(int a,int b){
        System.out.println("Multiplication : "+(a*b));
    }
    void div(int a,int b){
        System.out.println("Division : "+(a/b));
    }
    void mod(int a,int b){
        System.out.println("Modulus : "+(a%b));
    }
    public static void main(String args[]){
        Example1 obj = new Example1();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        obj.add(a,b);
        obj.sub(a,b);
        obj.mul(a,b);
        obj.div(a,b);
        obj.mod(a,b);
    }
}