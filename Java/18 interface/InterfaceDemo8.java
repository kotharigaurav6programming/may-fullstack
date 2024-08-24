// program showing the example of Interface(static and default methods in interface)

interface Showable{
    default void display(){
        System.out.println("display method called");
    }
    static void show(){
        System.out.println("show method called");
    }
}
class InterfaceDemo8 implements Showable{
    public static void main(String args[]){
        Showable obj1 = new InterfaceDemo8();
        obj1.display(); 
        Showable.show();
    }
}