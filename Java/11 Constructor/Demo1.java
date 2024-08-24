// program showing the concept of Constructor

class Demo1{
    Demo1(){
        System.out.println("Constructor called");
    }
    public static void main(String args[]){
        /*
        new Demo1();
        new Demo1();
        new Demo1();
        */
       /*
        Demo1 obj;
            obj = new Demo1();
            obj = new Demo1();
            obj = new Demo1();
        */
       Demo1 obj1 = new Demo1(), obj2 = new Demo1();
    }
}