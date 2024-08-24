// program showing the concept of Method Overriding

class Parent{
    void display(int a){
        System.out.println("display method called of parent : "+a);
    }
}
class Child extends Parent{
    @Override    
    void display(int a){
        System.out.println("display method called of child : "+a);
    }
}
class Demo9{
    public static void main(String args[]){
        Child cobj = new Child();
        cobj.display(100);
    }
}