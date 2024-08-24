// program to print factors of all the numbers between two entered numbers
import java.util.Scanner;
class Demo17{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter initial and final limit : ");
        int initial = sc.nextInt();
        int limit = sc.nextInt();
        
        for(int num = initial;num<=limit;num++){
        System.out.print("\nFactors of "+num+" is : ");            
            for(int j=1;j<=num;j++){
                if(num%j==0)
                    System.out.print("\t"+j);
            }
        }
    }
}