// basic example

class Demo4{
    public static void main(String args[]){
        // final float PI = 3.14f;
        // float r = 1.35f;

        final double PI = 3.14;
        double r = 1.35;
//        double area = PI * r * r;
          double area = PI * Math.pow(r,2);
//        System.out.println("Area of Circle : "+area);
        System.out.printf("Area of Circle : %.2f\n",area);
    }
}
