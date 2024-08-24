// program showing the concept of do while loop

import java.util.Scanner;
class Demo24{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        char ch;

        do{
             System.out.println("Enter number : ");
             int num = sc.nextInt();
       
            System.out.println("Entered number : "+num);
            System.out.println("Do you want to insert another number : ");
            ch = sc.next().charAt(0);
        }while(ch=='y' || ch=='Y');
    }
}