import java.util.Scanner;
class Example4{
    // data members
    int a,b; // instance variable
    // member functions
    void setData(int a,int b){
        this.a = a;
        this.b = b;
        this.add();
        sub();
        this.mul();
        div();
        this.mod();
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
        Example4 obj = new Example4();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter two numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        obj.setData(a,b);
    }
}