// program 

class Demo{
    Demo(Demo8 obj){
        System.out.println("Default constructor called : "+obj);
    }
}
class Demo8{
    Demo8(){
        Demo obj = new Demo(this);
    }    
    public static void main(String args[]){
        new Demo8();
    }
}