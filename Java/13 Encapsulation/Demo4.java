// program showing the concept of varargs

class Demo4{
    void test(String name, int...varargs){
        System.out.println("No. Of arguments : "+(varargs.length+1));
        System.out.print(name+"\t");
        for(int element : varargs){
            System.out.print(element+"\t");
        }
        System.out.println();
    }
    public static void main(String args[]){
        Demo4 obj = new Demo4();
        obj.test("Andrew anderson",1,2);
        obj.test("Andrew anderson",1,2,3);
        obj.test("Andrew anderson",1,2,3,4); 
    }
}
