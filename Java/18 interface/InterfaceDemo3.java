// program showing the example of Interface

interface Showable{
    int a=100;
}
interface Movable{
    int b = 200;
}
class InterfaceDemo3 implements Movable{
    public static void main(String args[]){
        System.out.println("a : "+Showable.a);
        int b = 300;
        System.out.println("b : "+b);
    }
}