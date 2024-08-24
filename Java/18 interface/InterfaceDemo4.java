// program showing the example of Interface

interface Showable{
    int a = 100;
}
interface Movable{
    int a = 200;
}
class InterfaceDemo4{ // implements Movable,Showable{
    public static void main(String args[]){
        System.out.println("a : "+Showable.a);
        System.out.println("a : "+Movable.a);
    }
}