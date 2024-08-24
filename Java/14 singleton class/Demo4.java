// program showing the concept of method overloading (Compile time polymorphism)

class Demo4{

    Demo4(int a,int b){
        int res = a>b?a:b;
        System.out.println("Greater number : "+res);
    }
    Demo4(int a,int b,int c){
        int res = a>b?(a>c?a:c):(b>c?b:c);
        System.out.println("Greater number : "+res);
    }

    public static void main(String args[]){
       Demo4 obj1 = new Demo4(12,23);
       Demo4 obj2 = new Demo4(12,23,321);
    }
}