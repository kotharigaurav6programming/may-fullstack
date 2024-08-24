// program showing the concept of varargs

class Demo3{
    void test(int...varargs){
        System.out.println("No. Of arguments : "+varargs.length);
        for(int element : varargs){
            System.out.print(element+"\t");
        }
        System.out.println();
    }
    public static void main(String args[]){
        Demo3 obj = new Demo3();
        obj.test(1,2);
        obj.test(1,2,3);
        obj.test(1,2,3,4); 
    }
}
