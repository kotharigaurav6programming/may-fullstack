// program showing the concept of static keyword

class Student{
    String rno,name;
    static String college_name="PQR College, Indore";
    Student(String rno,String name){
        this.rno = rno;
        this.name=name;
    }
    void display(){
        System.out.println("\nRoll Number : "+rno);
        System.out.println("Name : "+name);
        System.out.println("College Name : "+college_name);
    }
}
class Static3{
    public static void main(String args[]){
        Student obj1 = new Student("STUD10023PQ","Andrew Anderson");
        Student obj2 = new Student("STUD10024PQ","Peter Parker");
        Student obj3 = new Student("STUD10025PQ","Jackson Jack");
        System.out.println("Deatils : \n");
        obj1.display();
        obj2.display();
        obj3.display();
    }
}