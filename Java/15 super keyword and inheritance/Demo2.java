// program showing the concept of super keyword
/*
    Super Keyword 
      |-- variable
      |-- method
      |-- constructor
*/

class Parent
{
    String name = "Andrew Anderson";
    Parent(){
        System.out.println("Parent class constructor called");
    }
    void show(){
        System.out.println("show of parent called");
    }
}
class Child extends Parent
{
    String name = "Peter Parker";
    void show(){
        System.out.println("show of child called");
    }
    Child(){
        super(); // super must be the first statement in constructor call
        System.out.println("child class constructor called");
    }
    void display(){
        System.out.println("Parent name : "+super.name);
        System.out.println("Child name : "+name);
        super.show();
        show();
    }
    public static void main(String args[]){
        Child cobj = new Child();
        cobj.display();
    }
}