// program showing the concept of Constructor

class Demo3{
    int rno;
    float per;
    String name;
    Demo3(){
        rno = 123;
        per = 45.54f;
        name = "Andrew Anderson";
        System.out.println("Default Constructor called");
    }
    void display(){
        System.out.println("Roll Number : "+rno);
        System.out.println("Percentage : "+per);
        System.out.println("Name : "+name);
    }
    public static void main(String args[]){
       Demo3 obj = new Demo3();
       obj.display();
    }
}