// program showing the concept of Object class method(getClass())

class ObjectDemo5{
    public static void main(String args[]){
//        Object obj = new String();
        Object obj = new ObjectDemo5();

        Class c = obj.getClass();
        String className = c.getName();
        System.out.println("Class Name : "+className);

    } 
}