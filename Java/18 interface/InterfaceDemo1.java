// program showing the example of Interface

interface Showable{
    void show();
    void display();
}
interface Movable{
    void move();
    void display();
}
class InterfaceDemo1 implements Showable,Movable{
    public void show(){
        System.out.println("show method called");
    }
    public void move(){
        System.out.println("move method called");
    }    
    public void display(){
        System.out.println("display method called");
    }    
    public static void main(String args[]){
        Showable obj = new InterfaceDemo1();
        obj.show();
        obj.display();       
        Movable obj1 = new InterfaceDemo1();
        obj1.move();
        obj1.display();
    }
}