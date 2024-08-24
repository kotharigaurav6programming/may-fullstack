// program showing the concept of abstract class

abstract class Parent{
    abstract void shape();
}
class Circle extends Parent{
    void shape(){
        System.out.println("Its circle shape");
    }
}
class Rectangle extends Parent{
    void shape(){
        System.out.println("Its rectangle shape");
    }
}

class Abstract2{
    public static void main(String args[]){
        Parent instance;
        instance = new Circle();
        instance.shape();
       
        instance = new Rectangle();
        instance.shape(); 
    }
}