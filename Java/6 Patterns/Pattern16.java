/*
    123456789
     1     7
      1   5
       1 3
        1
*/

import java.util.Scanner;
class Pattern16{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows : ");
        int row = sc.nextInt();
        
        for(int i=row;i>=1;i--){
            for(int sp = 1;sp<=row-i;sp++){
                System.out.print(" ");
            }
            for(int j=1;j<=2*i-1;j++){
                if(j==1 || j==2*i-1 || i==row)
                    System.out.print(j);
                else
                    System.out.print(" ");
            }
            System.out.println();
        }
    }
}