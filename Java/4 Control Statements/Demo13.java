// program showing the concept of if else statement
import java.util.Scanner;
class Demo13{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter salary : ");
        int salary = sc.nextInt();
        System.out.println("Enter experience : ");
        int exp = sc.nextInt();

        if(salary>=10000 && exp>=5)
            System.out.println("Eligible to get Hike");
        else    
            System.out.println("Not eligible to get hike");
    }
}