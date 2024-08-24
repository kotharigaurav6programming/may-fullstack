// program showing the concept of 2d array(addition of RL diagonal elements)

import java.util.Scanner;
class Array19{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no. of rows : ");
        int row = sc.nextInt();

        System.out.println("Enter no. of columns : ");
        int col = sc.nextInt();

        /*declaration of 2d array*/
        int arr[][]=new int[row][col];

        if(row==col){
        /*taking array elements from user*/
        System.out.println("\nEnter Array elements : ");
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                arr[i][j] = sc.nextInt();
            }
        }
        int sum=0;
        /*printing array elements*/
        System.out.println("\nArray elements are : ");
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                System.out.print(arr[i][j]+"\t");
                if(i+j==row-1)
                    sum = sum + arr[i][j];
            }
            System.out.println();
        }
        System.out.println("\nSum : "+sum);
        }else{
            System.out.println("Credentials Not Matched");
        }
    }
}