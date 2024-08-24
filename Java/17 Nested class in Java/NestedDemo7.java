// program showing the concept of nested class
// anonymous class

abstract class DemoClass{
    abstract void display();
}

class NestedDemo7{
    public static void main(String args[]){
        /*anonymous class*/
        /*
        DemoClass obj = new DemoClass(){
            void display(){
                System.out.println("display method called");
            }
        };
        obj.display();
        */
        new DemoClass(){
            void display(){
                System.out.println("display method called");
            }
        }.display();
       

    }
}