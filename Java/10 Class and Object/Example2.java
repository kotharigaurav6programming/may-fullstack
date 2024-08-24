import java.util.Scanner;
class Example2{
    // data members
    int a,b; // instance variable
    // member functions
    void setData(int a1,int b1){
        a = a1;
        b = b1;
    }
    void add(){
        System.out.println("Addition : "+(a+b));
    }
    void sub(){
        System.out.println("Subtraction : "+(a-b));
    }
    void mul(){
        System.out.println("Multiplication : "+(a*b));
    }
    void div(){
        System.out.println("Division : "+((double)a/b));
    }
    void mod(){
        System.out.println("Modulus : "+(a%b));
    }
    public static void main(String args[]){
        Example2 obj = new Example2();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        obj.setData(a,b);
        obj.add();
        obj.sub();
        obj.mul();
        obj.div();
        obj.mod();
    }
}