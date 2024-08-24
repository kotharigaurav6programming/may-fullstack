// program showing the concept of Constructor chaining

class Demo7{
    int rno;
    float per;
    String name;
    Demo7(){
        this("Andrew Anderson");
        System.out.println("Default connstructor called");
    }
    Demo7(String name){
        this(name,56.67f);
    }
    Demo7(String name,float per){
        this(name,per,10001);
    }
    Demo7(String name,float per,int rno){
        this.rno=rno;
        this.per=per;
        this.name=name;
        display();
    }
    void display(){
        System.out.println("Roll Number : "+rno);
        System.out.println("Percentage : "+per);
        System.out.println("Name : "+name);
    }
    public static void main(String args[]){
        new Demo7(); 
    }
}