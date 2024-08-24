// program showing the concept of Exception Handling

class ExceptionDemo5{
    void myFun(){
        try{
            int arr[] = {1,2,3,4,5};
            System.out.println("arr[2] : "+arr[2]);

            String str = "Welcome";
            System.out.println("str.charAt(2) : "+str.charAt(28)); 
        }catch(ArrayIndexOutOfBoundsException | StringIndexOutOfBoundsException e){
            System.out.println("Exception : "+e);
        }
        finally{
            System.out.println("End of program");
        }
    }
    public static void main(String args[]){
        ExceptionDemo5 obj = new ExceptionDemo5();
        obj.myFun();
    }
}