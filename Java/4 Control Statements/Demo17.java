// program showing the concept of if else statement
import java.util.Scanner;
class Demo17{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter nationality(i/I) for Indian : ");
        char ch = sc.next().charAt(0);
       
        if(ch=='i' || ch=='I'){
            System.out.println("Enter age : ");
            int age = sc.nextInt();

            if(age>=18)
                System.out.println("Eligible to vote");
            else
                System.out.println("Not Eligible to vote");
        }else{
            System.out.println("Not an Indian");
        }    
    }
}