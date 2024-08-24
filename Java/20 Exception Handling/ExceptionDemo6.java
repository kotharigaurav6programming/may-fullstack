// program showing the concept of Exception Handling
// NullPointerException

class ExceptionDemo6{
    static String str;
    void myFun(){
        try{
            System.out.println("Length : "+str.length());
        }catch(NullPointerException e){
            System.out.println("Exception : "+e);
        }
    }
    public static void main(String args[]){
        ExceptionDemo6 obj = new ExceptionDemo6();
        obj.myFun();
    }
}