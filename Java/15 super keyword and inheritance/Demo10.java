// program showing the concept of Method Overriding

class Parent{
    String name = "Andrew Anderson";
    void display(){
        System.out.println("display method called of parent");
    }
    void show(){
        System.out.println("show of parent called");
    }
}
class Child extends Parent{
    String name = "Peter Parker";
    @Override    
    void display(){
        System.out.println("display method called of child");
    }
    void view(){
        System.out.println("view of child called");
    }
}
class Demo10{
    public static void main(String args[]){
        Parent cobj = new Child(); // upcasting
        cobj.display();
        cobj.show();
        System.out.println("Name : "+cobj.name);
        Child cobj1 = (Child)cobj; // downcasting
        cobj1.view();
        System.out.println("Name : "+cobj1.name);
    }
}