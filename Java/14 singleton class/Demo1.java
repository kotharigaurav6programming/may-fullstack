// program showing the concept of Singleton class (Eager Initialization)

class Singleton{
    /*instance variable*/
    int value = 100;

    /*creating object of singleton class*/
    static private Singleton instance = new Singleton();

   /*make constructor private*/
    private Singleton(){}

    /* make static method */
    static Singleton getInstance(){
        return instance;
    }
    static void display(){
        System.out.println("display method called");
        System.out.println("instance : "+instance);
    }
}
class Demo1{
    public static void main(String args[]){
        Singleton.display();
        Singleton instance = Singleton.getInstance();
        System.out.println("value : "+instance.value);
        instance.value+=100;
        System.out.println("value : "+instance.value);
    
        Singleton instanceAgain = Singleton.getInstance();
        System.out.println("value : "+instanceAgain.value);
     
    }
}