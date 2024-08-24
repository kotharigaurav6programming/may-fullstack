// program showing the concept of static keyword

class Student{
    static{
        System.out.println("static block executes");
    }
}
class Static2{
    public static void main(String args[]){
        Student obj1 = new Student();
        Student obj2 = new Student();
        Student obj3 = new Student();
    }
}