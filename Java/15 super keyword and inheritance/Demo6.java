// program showing the concept of Method Overriding

class Parent{
    void display(){
        System.out.println("display method called of parent");
    }
}
class Child extends Parent{
    @Override    
    void display(){
        System.out.println("display method called of child");
    }
}
class Demo6{
    public static void main(String args[]){
        Child cobj = new Child();
        cobj.display();
    }
}