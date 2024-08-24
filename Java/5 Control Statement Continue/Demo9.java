// program to print fibonacci series (0     1   1   2   3   5   8   13 ...)

import java.util.Scanner;
class Demo9{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a=-1,b=1,c=0;
        System.out.println("Enter no. of terms : ");
        int num = sc.nextInt();

        for(int i=1;i<=num;i++){
            c = a+b;
            System.out.print(c+"\t");
                a=b;
                b=c;
        }
    }
}

/*
    Program to print n natural numbers...
    (1   2   3   4   5   6   7   8   9....)
    1   2   2   4   8   32  ......
    1   4   9   16  25  36  ......
    logic:
    1*1 2*2 3*3 4*4 5*5...

    1       8       27      64      125 ..........
    logic:
    1*1*1 2*2*2  3*3*3  4*4*4   5*5*5...

    1   9   25  49  81  ..........
    0   8   64  216 ........
    1   27  125 343 ........
    7   14  21  28  35  ....
    1/1 1/2 1/3 1/4 1/5 ....
    for(i=1;i<=num;i++){
        sop("1/"+i+"\t")
    }
    
    1/1 +   1/2 +   1/3 +   1/4 .... sum of n terms

    Program to check whether entered number is perfect or not
        Hint : num = 28
               factors = 1  2   4   7   14  28
                                             x
                1 + 2 +  4 +  7 +  14 = 28  == compare with original number   

    odd number : 
    
        2x1     2x2     2x3 ............................. 
        2       4       6       8       10      12 ......      2 x i

    1       3       5       7       9       11...........      2 x i -1

    for(){
        t = 2 x i -1;
        sop(t*t);
    }

    1   9   25  49....

*/
