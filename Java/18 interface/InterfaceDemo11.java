// program showing the example of Interface(static and default methods in interface)

interface Showable{
    default void display(){
        System.out.println("display method called of showable");
        statements();
    }
    default void show(){
        System.out.println("show method called of showable");
        statements();
    }
    private void statements(){
        System.out.println("statement 1\n");
        System.out.println("statement 2\n");
    }
}
class InterfaceDemo11 implements Showable,Movable{
    public static void main(String args[]){
        Showable obj1 = new InterfaceDemo11();
        obj1.display();
        obj1.show(); 
    }
}