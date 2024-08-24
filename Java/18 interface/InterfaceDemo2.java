// program showing the example of Interface

interface Showable extends Movable{
    void show();
}
interface Movable{
    void move();
}
class InterfaceDemo2 implements Showable{
    public void show(){
        System.out.println("show method called");
    }
    public void move(){
        System.out.println("move method called");
    }    
    public static void main(String args[]){
        Showable obj = new InterfaceDemo2();
        obj.show();
        obj.move();
    }
}