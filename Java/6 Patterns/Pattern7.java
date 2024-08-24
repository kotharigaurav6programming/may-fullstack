/*
    1
    12
    1 3
    1  4
    12345
*/

import java.util.Scanner;
class Pattern7{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows : ");
        int row = sc.nextInt();
        
        for(int i=1;i<=row;i++){
            for(int j=1;j<=i;j++){
                if(j==1 || i==j || i==row)
                    // System.out.print(j);
                    System.out.print((char)(64+j));
                else
                    System.out.print(" ");
            }
         System.out.println();
        }
    }
}