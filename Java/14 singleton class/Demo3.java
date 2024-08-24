// program showing the concept of method overloading (Compile time polymorphism)

class Demo3{

    void greater(int a,int b){
        int res = a>b?a:b;
        System.out.println("Greater number : "+res);
    }
    void greater(int a,int b,int c){
        int res = a>b?(a>c?a:c):(b>c?b:c);
        System.out.println("Greater number : "+res);
    }

    public static void main(String args[]){
       Demo3 obj = new Demo3();
       obj.greater(12,23);
       obj.greater(12,3,33);
    }
}