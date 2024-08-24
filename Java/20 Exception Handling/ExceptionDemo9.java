// program showing the concept of Exception Handling
// ClassNotFoundException

class ExceptionDemo9
{
    public static void main(String args[]){
        try{
            Class.forName("ExceptionDemo8");
            System.out.println("Class Found");
        }catch(ClassNotFoundException e){
            System.out.println("Exception : "+e.getMessage());
            System.out.println("Class not Found");
        }
    }
}