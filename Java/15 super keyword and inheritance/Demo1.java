// program showing the concept of inheritance

class Parent
{
    void display(){
        System.out.println("Display method called");        
    }
}
class Child extends Parent
{
    public static void main(String args[]){
        Child cobj = new Child();
        cobj.display();
    }
}