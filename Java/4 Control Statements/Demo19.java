// program to find out grade
import java.util.Scanner;
class Demo19{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter marks of 5 subjects : ");
        int m1 = sc.nextInt();
        int m2 = sc.nextInt();
        int m3 = sc.nextInt();
        int m4 = sc.nextInt();
        int m5 = sc.nextInt();

        int total = m1+m2+m3+m4+m5;
        System.out.println("Total Marks : "+total);
        double per = total/5.0;
        System.out.println("Percentage : "+per);

        if(per>=75 && per<=100)
            System.out.println("Grade A");
        else{
            if(per>=60 && per<75)
                System.out.println("Grade B");
            else{
                if(per>=50 && per<60)
                    System.out.println("Grade C");
                else{
                    if(per>=33 && per<50)
                        System.out.println("Grade D");
                    else
                        System.out.println("Fail");
                }
            }
        }        
    }
}
