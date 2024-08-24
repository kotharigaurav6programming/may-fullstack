// program showing the concept of static keyword

class Demo{
    static String name = "Andrew Anderson";
    static void display(){
        System.out.println("display method called");
    }
}
class Static4{
    public static void main(String args[]){
       System.out.println("Name : "+Demo.name);  
       Demo.display();
       display();    
    }
}