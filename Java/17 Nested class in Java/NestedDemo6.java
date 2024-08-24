// program showing the concept of nested class
// local class

class NestedDemo{

    void display(){ // member function
        class LocalClass{ // local class
            void show(){
                System.out.println("show method called");
            }
        }

        LocalClass obj = new LocalClass();
        obj.show();
    }
}
class NestedDemo6{
    public static void main(String args[]){
        NestedDemo obj = new NestedDemo();
        obj.display();
    }
}