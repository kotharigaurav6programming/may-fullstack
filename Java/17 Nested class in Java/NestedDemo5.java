// program showing the concept of nested class
// member class

class NestedDemo{
    void display(){ // member function
        MemberClass obj = new MemberClass();
        obj.show();
    }
    class MemberClass{ // member class
        void show(){
            System.out.println("show method called");
        }
    }
}
class NestedDemo5{
    public static void main(String args[]){
        NestedDemo obj = new NestedDemo();
        obj.display();
    }
}