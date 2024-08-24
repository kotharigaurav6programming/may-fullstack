// program showing the example of Interface

interface Age{
    int age = 18;
    void getAge();
}
class GetAge implements Age{
    public void getAge(){
        System.out.println("Age : "+age);
    }
}
class InterfaceDemo5{
    public static void main(String args[]){
        Age obj = new GetAge();
        obj.getAge();
    }
}