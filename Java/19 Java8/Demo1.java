// program showing the concept of lambda expression

@FunctionalInterface
interface Showable{
    void display();
    default void show(){
        System.out.println("show method called");
    }
}
class Demo1{
    public static void main(String args[]){
        Showable obj = ()-> System.out.println("Display method called");
        obj.display();
        obj.show();
    }
}