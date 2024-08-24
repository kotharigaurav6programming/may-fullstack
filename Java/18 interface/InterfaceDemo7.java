// program showing the example of Interface
// anonymous class

interface Age{
    int age = 18;
    void getAge();
}
class InterfaceDemo7{
    public static void main(String args[]){
        Age obj = ()->System.out.println("Age : "+Age.age);
        obj.getAge();
    }
}