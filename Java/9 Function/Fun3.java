// Program showing the concept of function

class Fun3{
    // data member
    String fname;
    // member function 
    void myFun(){
        System.out.println("fname : "+fname);
    }
    public static void main(String args[]){
        Fun3 obj = new Fun3();
        obj.fname = "Andrew Anderson";
        obj.myFun();
        //System.out.println("fname : "+obj.fname);

        Fun3 obj1 = new Fun3();
        obj1.fname = "Mathew Math";
        obj1.myFun();
        //System.out.println("fname : "+obj1.fname);
    }
}