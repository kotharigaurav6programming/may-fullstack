// program showing the concept of parameterized Constructor

import java.util.Scanner;
class Demo6{
    int rno;
    float per;
    String name;
    Demo6(){
        System.out.println("Default connstructor called");
    }
    Demo6(String name,int rno){
        this();
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
        
       Demo6 obj = new Demo6(name,rno);
       obj.display();
    }
}