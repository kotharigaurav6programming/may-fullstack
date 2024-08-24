// program showing the concept of copy constructor

import java.util.Scanner;
class Person{
    int rno;
    String name,address;

    /* Parameterized constructor */
    Person(int rno,String name,String address){
        this.rno=rno;
        this.name=name;
        this.address=address;
    }
    Person(Person person){
        this.rno = person.rno;
        this.name = person.name;
        this.address = person.address;
    }

    void display(){
        System.out.println("Roll Number : "+rno);
        System.out.println("Name : "+name);
        System.out.println("Address : "+address);
    }
}
class Demo9{
    
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter roll number : ");
        int rno = sc.nextInt();
        sc.nextLine();
        System.out.println("Enter Name : ");
        String name = sc.nextLine();

        System.out.println("Enter Address : ");
        String address = sc.nextLine();

        Person obj1 = new Person(rno,name,address);
            obj1.display();
        Person obj2 = new Person(obj1);
        System.out.println("After Copying : ");
            obj2.display();
    }
}