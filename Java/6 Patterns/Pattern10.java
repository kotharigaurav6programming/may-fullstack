/*
    12345678
    7654321
    123456
    54321
    1234
    321
    12
    1
*/

import java.util.Scanner;
class Pattern10{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows : ");
        int row = sc.nextInt();
        
        for(int i=row;i>=1;i--){
            if(i%2==0){
                for(int j=1;j<=i;j++){
                    System.out.print(j);
                }
                System.out.println();
            }else{
                for(int j=i;j>=1;j--){
                    System.out.print(j);
                }
                System.out.println();
            }
        }
    }
}