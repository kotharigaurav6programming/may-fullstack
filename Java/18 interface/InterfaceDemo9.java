// program showing the example of Interface(static and default methods in interface)

interface Showable{
    default void display(){
        System.out.println("display method called of showable");
    }
}
interface Movable{
    static void display(){
        System.out.println("display method called of movable");
    }
}
class InterfaceDemo9 implements Showable,Movable{
   
    public static void main(String args[]){
        Showable obj1 = new InterfaceDemo9();
        obj1.display(); 
    }
}