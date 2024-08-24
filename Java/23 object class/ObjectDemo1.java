// program showing the concept of Object class method

import java.util.Scanner;
class Student{
    int sid;
    String name;
    String gender;

    Student(int sid,String name,String gender){
        this.sid=sid;
        this.name=name;
        this.gender=gender;
    }
    @Override
    public String toString(){
        return sid+"\t"+name+"\t"+gender;
    }
}
class ObjectDemo1{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Student Id : ");
        int sid = sc.nextInt();

        sc.nextLine();
        System.out.println("Enter Student Name : ");
        String name = sc.nextLine();

        System.out.println("Enter Gender : ");
        String gender = sc.nextLine();

        Student sobj = new Student(sid,name,gender);
        System.out.println("Student Record : "+sobj);
    }
}