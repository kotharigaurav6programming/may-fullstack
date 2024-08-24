// program to find out greater number among three numbers
import java.util.Scanner;
class Demo18{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Three numbers : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if(a>b){
            if(a>c)
                System.out.println(a+" is greater");
            else
                System.out.println(c+" is greater");
        }else{
            if(b>c)
                System.out.println(b+" is greater");
            else
                System.out.println(c+" is greater");
        }       
    }
}



/*
Algorithm

Step 1 : Start
Step 2 : Input a,b,c
Step 3 : If a>b, then goto step 4,
otherwise goto step 5
Step 4 : If a>c, then goto step 7,
otherwise goto step 6
Step 5 : If b>c, then goto step 8,
otherwise goto step 9
Step 6 : Output C is greater
Step 7 : Output a is greater
Step 8 : Output b is greater
Step 9 : Output C is greater
Step 10 : Stop
*/









