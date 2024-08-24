// program showing the concept of multi dimensional array

import java.util.Scanner;
class Array22{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no. of 2d matrix : ");
        int num = sc.nextInt();

        System.out.println("Enter no. of rows : ");
        int rows = sc.nextInt();
        
        System.out.println("Enter no. of columns : ");
        int cols = sc.nextInt();

        int arr[][][]=new int[num][rows][cols];
        int count=0;

        for(int i=0;i<num;i++){
            for(int j=0;j<rows;j++){
               for(int k=0;k<cols;k++){
                    arr[i][j][k] = ++count; 
                }
            }
        }
        System.out.println("\nMultidimensional array : ");
        for(int ar[][] : arr){
            for(int a[] : ar){
                for(int element : a){
                    System.out.print(element+"\t");
                }
                System.out.println();
            }
            System.out.println();
        }
    }
}