// program showing the concept of method overloading (Compile time polymorphism)

class Demo5{

    void greater(int a,double b){
        double res = a>b?a:b;
        System.out.println("Greater number : "+res);
    }
    void greater(double a,int b){
        double res = a>b?a:b;
        System.out.println("Greater number : "+res);
    }

    public static void main(String args[]){
       Demo5 obj = new Demo5();
       obj.greater(12,2.3);
       obj.greater(3.32,33);
    }
}

/*
Its an error case : 

    int greater(int a,int b){}

    double greater(int a,int b){}

    greater(45,56);
*/