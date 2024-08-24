// program showing the concept of parameterized Constructor

import java.util.Scanner;
class Demo4{
    int rno;
    float per;
    String name;
    Demo4(String name,float per,int rno){
        this.name = name;
        this.per = per;
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
       System.out.println("Enter Percentage : ");
       float per = sc.nextFloat();
        
       Demo4 obj = new Demo4(name,per,rno);
       obj.display();
    }
}