// program to convert temp from f to c

class Demo8{
    public static void main(String args[]){
        double f  = 42, c;
        c = (f-32)*5/9; 
        System.out.println("temp in c : "+c);

    }
}
        
/*
Program to find out average of 5 numbers
      int m1,m2,m3,m4,m5;
      double avg;
      avg = (m1+m2+m3+m4+m5)/5;
----------------------------------------------------------------
Program to convert km into m
    int km=2;
    int m = km*1000;
----------------------------------------------------------------
Program to find out perimeter of rectangle
    int l=2,b=3,peri;
    peri = 2*(l+b);
-----------------------------------------------------------------
Program to find out area of triangle by heron's formula
    int a=2,b=3,c=6;
    double s = (a+b+c)/2;
    double area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
-----------------------------------------------------------------
Program to find out Volume of Cylinder
    int h=5;
    double r = 2.5;
    double volumn = 3.14*r*r*h;
*/