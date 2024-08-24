// program showing the concept of Method Overriding

class Parent{
    void shape(){
        System.out.println("It's shape");
    }
}
class Circle extends Parent{
    void shape(){
        System.out.println("It's Circle shape");
    }
}
class Rectangle extends Parent{
    void shape(){
        System.out.println("It's Rectangle shape");
    }
}
class Square extends Parent{}

class Demo7{
    public static void main(String args[]){
        Circle cobj = new Circle();
        cobj.shape();
        Rectangle robj = new Rectangle();
        robj.shape();
        Square sobj = new Square();
        sobj.shape(); 
    }
}