// program showing the concept of parameterized Constructor

import java.util.Scanner;
class Demo5{
    int rno;
    float per;
    String name;
    Demo5(){
        System.out.println("Default connstructor called");
    }
    Demo5(String name,int rno){
        this.name = name;
        this.rno = rno;
        System.out.println("Parameterized Constructor called");
    }
    void display(){
        System.out.println("Roll Number : "+rno);
        System.out.println("Percentage : "+per);
        System.out.println("Name : "+name);
    }
    public static void main(String args[]){
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter Roll Number : ");
       int rno = sc.nextInt();
        sc.nextLine();
        
       System.out.println("Enter Name : ");
       String name = sc.nextLine();
        
       Demo5 obj = new Demo5(name,rno);
       Demo5 obj1 = new Demo5(); 
       obj.display();
    }
}