// program showing the concept of functional Interface

@FunctionalInterface
interface Showable{
    void display();
    default void show(){} 
}
class InterfaceDemo12 implements Showable{
    public void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        Showable obj = new InterfaceDemo12();
        obj.display();
    }
}