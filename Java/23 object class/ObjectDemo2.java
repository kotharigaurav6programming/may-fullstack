// program showing the concept of Object class method(hashCode())

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
    @Override
    public int hashCode(){
        return sid;
    }
}
class ObjectDemo2{
    public static void main(String args[]){
        Student sobj1 = new Student(123,"Andrew Anderson","Male");
        Student sobj2 = new Student(234,"Julie","Female");
        
        System.out.println("First Student Record : "+sobj1+"\thashCode : "+sobj1.hashCode());
        System.out.println("Second Student Record : "+sobj2+"\thashCode : "+sobj2.hashCode());

    }
}