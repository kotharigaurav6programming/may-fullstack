
class Example6{
    void show(){
        System.out.println("show method called");
    }
    Example6 display(){
        System.out.println("display method called");
        return this;
    }
    public static void main(String args[]){
        Example6 obj = new Example6();
        obj.display().show();
    }
}