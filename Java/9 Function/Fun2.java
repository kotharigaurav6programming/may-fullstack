// Program showing the concept of function

class Fun2{
    // data member
    String fname;
    // member function 
    void myFun(){
        System.out.println("myFun called");
    }
    public static void main(String args[]){
        Fun2 obj = new Fun2();
        obj.myFun();
        obj.fname = "Andrew Anderson";
        System.out.println("fname : "+obj.fname);

        Fun2 obj1 = new Fun2();
        obj1.fname = "Mathew Math";
        System.out.println("fname : "+obj1.fname);
    }
}