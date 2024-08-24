// program showing the concept of nested if else
import java.util.Scanner;
class Demo1{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter character : ");
        char ch = sc.next().charAt(0);
        if(ch>=65 && ch<=90)
            System.out.println("Character is in uppercase");
        else{
            if(ch>='a' && ch<='z')
                System.out.println("Character is in lowercase");
            else{
                if(ch>=48 && ch<='9')
                    System.out.println("Character is a digit");
                else
                    System.out.println("Not Matched");
            }
        }
    }
}