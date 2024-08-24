// Program to convert character in uppercase and in lower case
import java.util.Scanner;
class Demo3{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter character : ");
        char ch = sc.next().charAt(0);
        System.out.println("Uppercase character : "+(char)(ch-32));
    System.out.println((char)1);
    System.out.println((char)2);
    System.out.println((char)3);
    System.out.println((char)4);
    System.out.println((char)19);
     System.out.println((char)37);
    }
}
/*
    ASCII CODE
    (AMERICAN STANDARD CODE FOR INFORMATION INTERCHANGE)

         ____32_____
        |          |
    A = 65     a = 97     0 = 48
    B = 66     b = 98     1 = 49
    |   |      |    |     |    |
    Z = 90     z = 122    9 = 57
         |____32____|
*/










