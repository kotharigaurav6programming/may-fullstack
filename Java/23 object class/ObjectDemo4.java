// program showing the concept of Object class method(finalize())

class ObjectDemo4{
    public static void main(String args[]){
        ObjectDemo4 obj = new ObjectDemo4();
        obj = null;
        System.gc();
        System.out.println("Executed System.gc()");
    }
    @Override
    protected void finalize(){
        System.out.println("finalize method called..!!");
    } 
}