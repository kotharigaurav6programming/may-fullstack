// program to add two 2d array

import java.util.Scanner;
class Array20{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no. of rows: ");
        int row = sc.nextInt();

        System.out.println("Enter no. of columns : ");
        int col = sc.nextInt();

        /*declaration of 2d array*/
        int arr[][]=new int[row][col];
        int arr1[][]=new int[row][col];

        /*taking array elements from user*/
        System.out.println("\nEnter first Array elements : ");
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                arr[i][j] = sc.nextInt();
            }
        }
        /*taking array elements from user*/
        System.out.println("\nEnter second Array elements : ");
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                arr1[i][j] = sc.nextInt();
            }
        }
        /*printing array elements*/
        System.out.println("\nFirst Array elements are : ");
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                System.out.print(arr[i][j]+"\t");
            }
            System.out.println();
        }
        /*printing array elements*/
        System.out.println("\nSecond Array elements are : ");
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                System.out.print(arr1[i][j]+"\t");
            }
            System.out.println();
        }
               /*printing array elements*/
        System.out.println("\nResultant Array elements are : ");
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                System.out.print(arr[i][j]+arr1[i][j]+"\t");
            }
            System.out.println();
        }
 
    }
}