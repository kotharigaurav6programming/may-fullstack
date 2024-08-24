// program showing the concept of Exception Handling
// ClassCastException

class ExceptionDemo8
{
    public static void main(String args[]){
        try{
            Object obj = new Integer(100);
            String str = (String)obj;
        }catch(ClassCastException e){
            System.out.println("Exception : "+e.getMessage());
        }
    }
}