/*
    1
    10
    1 1
    1  0
    10101
*/

import java.util.Scanner;
class Pattern8{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows : ");
        int row = sc.nextInt();
        
        for(int i=1;i<=row;i++){
            for(int j=1;j<=i;j++){
                if(j==1 || i==j || i==row){
                    if(j%2==0)
                       System.out.print("0");
                    else
                       System.out.print("1");
                }
                else
                    System.out.print(" ");
            }
         System.out.println();
        }
    }
}