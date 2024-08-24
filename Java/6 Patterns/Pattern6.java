/*
    Floyds triangle
    1
    23
    456
    78910
*/

import java.util.Scanner;
class Pattern6{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows : ");
        int row = sc.nextInt();
        int a=1;
        for(int i=1;i<=row;i++){
            for(int j=1;j<=i;j++){
                System.out.print(a++);
            }
         System.out.println();
        }
    }
}