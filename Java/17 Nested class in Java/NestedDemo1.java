// program showing the concept of nested class

class NestedDemo1{
    int a = 100;
    static int b = 200;
    private static int c = 300;

    static void demo(){
        System.out.println("demo method called");
    }
    /* static nested class */
    static class NestedClass{
        void display(){
            System.out.println("b : "+b);
            System.out.println("c : "+c);
            demo();
        }
    }
    public static void main(String args[]){
        NestedClass obj = new NestedClass();
        obj.display();
    }
}