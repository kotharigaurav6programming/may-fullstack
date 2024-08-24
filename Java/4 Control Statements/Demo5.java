// example of primitive type casting 

class Demo5{
    public static void main(String args[]){
        /*
            int a = 5;
            double b = a; // implicit conversion
            System.out.println("a : "+a);
            System.out.println("b : "+b);
        */
        double b = 5.56; 
        int a = (int)b; // explicit conversion
        System.out.println("a : "+a);
        System.out.println("b : "+b);
    }
}