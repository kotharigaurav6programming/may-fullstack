// this can also be pass as an argument inside function calling

class Example5{
    void show(Example5 x){
        System.out.println("show method called : "+x);
    }
    void display(){
        System.out.println("display method called");
        show(this);
    }
    public static void main(String args[]){
        Example5 obj = new Example5();
        obj.display();
    }
}