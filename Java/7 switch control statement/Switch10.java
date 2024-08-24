// program showing the concept of switch control statement
import java.util.Scanner;
class Switch10{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        System.out.println("------------------------------");       
        System.out.println("--------Select Operation------");       
        System.out.println("------------------------------");       
        System.out.println("R/r for area of rectangle");
        System.out.println("C/c for area of circle");
        System.out.println("E/e for Exit");
       
        System.out.println("Select any one : ");
        char code = sc.next().charAt(0);

        switch(code){
           case 'R' : 
           case 'r' : 
                System.out.println("Enter value of l : ");
                int l = sc.nextInt();
                System.out.println("Enter value of b : ");
                int b = sc.nextInt();
                System.out.println("Area of rectangle : "+(l*b));
                    break;     
           case 'C' :
           case 'c' : 
                System.out.println("Enter radius : ");
                double r = sc.nextDouble();
                System.out.println("Area of Circle : "+(3.14*r*r));
                    break;     
           case 'E' : 
           case 'e' :
                System.out.println("Visit again");
                    break;     
        }       
    }
}










