// program showing the concept of abstract class

abstract class AbstractClass{
    abstract void display();
}
class Abstract1 extends AbstractClass{
    void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        AbstractClass obj = new Abstract1();
        obj.display();
    }
}