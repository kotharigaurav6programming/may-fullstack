// program showing the concept of nested class

class EnclosingClass{
    int a = 100;
    static int b = 200;
    private static int c = 300;

    void demo(){
        System.out.println("demo method called");
    }
    /* non static nested class */
    class NestedClass{
        void display(){
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("c : "+c);
            demo();
        }
    }
}
class NestedDemo4{
    public static void main(String args[]){
        EnclosingClass objEnc = new EnclosingClass();
        EnclosingClass.NestedClass obj = objEnc.new NestedClass();
        obj.display();
    }
}