// program showing the concept of Hierarchical Inheritance

import java.util.Scanner;
class Person{
    int age;
    String name;
    Scanner sc = new Scanner(System.in);

    void getDetails(){
        System.out.println("\nEnter name : ");
        name = sc.nextLine();

        System.out.println("Enter age : ");
        age = sc.nextInt();
        sc.nextLine();
    }
    void showDetails(){
        System.out.println("Name : "+name);
        System.out.println("Age : "+age);
    }
}
class Student extends Person{
    int fees;
    String course;

    void getStudDetails(){
        getDetails();
        System.out.println("Enter Course : ");
        course = sc.nextLine();

        System.out.println("Enter fees : ");
        fees = sc.nextInt();
    }
    void showStudDetails(){
        showDetails();
        System.out.println("Course : "+course);
        System.out.println("Fees : "+fees);
    }
}
class Employer extends Person{
    int salary;
    String designation;

    void getEmpDetails(){
        getDetails();
        System.out.println("Enter Designation : ");
        designation = sc.nextLine();

        System.out.println("Enter salary : ");
        salary = sc.nextInt();
    }
    void showEmpDetails(){
        showDetails();
        System.out.println("Designation : "+designation);
        System.out.println("Salary : "+salary);
    }
}
class Demo5{
    public static void main(String args[]){
        Student sobj = new Student();
        sobj.getStudDetails();
        sobj.showStudDetails();
        Employer eobj = new Employer();
        eobj.getEmpDetails();
        eobj.showEmpDetails();
    }
}