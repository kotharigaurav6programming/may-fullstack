// program showing the example of Interface
// anonymous class

interface Age{
    int age = 18;
    void getAge();
}
class InterfaceDemo6{
    public static void main(String args[]){
        Age obj = new Age(){
            public void getAge(){
                    System.out.println("Age : "+age);
            }
        };
        obj.getAge();
    }
}