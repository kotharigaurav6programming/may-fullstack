// program to multiply two 2d array

import java.util.Scanner;
class Array21{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no. of rows of first array: ");
        int row1 = sc.nextInt();

        System.out.println("Enter no. of columns of first array: ");
        int col1 = sc.nextInt();

        System.out.println("Enter no. of rows of second array: ");
        int row2 = sc.nextInt();

        System.out.println("Enter no. of columns of second array: ");
        int col2 = sc.nextInt();

        if(col1==row2){
            /*declaration of 2d array*/
            int arr1[][]=new int[row1][col1];
            int arr2[][]=new int[row2][col2];
            int arr3[][]=new int[row1][col2]; 

        /*taking array elements from user*/
        System.out.println("\nEnter first Array elements : ");
        for(int i=0;i<row1;i++){
            for(int j=0;j<col1;j++){
                arr1[i][j] = sc.nextInt();
            }
        }
        /*taking array elements from user*/
        System.out.println("\nEnter second Array elements : ");
        for(int i=0;i<row2;i++){
            for(int j=0;j<col2;j++){
                arr2[i][j] = sc.nextInt();
            }
        }

        /*printing array elements*/
        System.out.println("\nFirst Array elements are : ");
        for(int i=0;i<row1;i++){
            for(int j=0;j<col1;j++){
                System.out.print(arr1[i][j]+"\t");
            }
            System.out.println();
        }
        /*printing array elements*/
        System.out.println("\nSecond Array elements are : ");
        for(int i=0;i<row2;i++){
            for(int j=0;j<col2;j++){
                System.out.print(arr2[i][j]+"\t");
            }
            System.out.println();
        }

        /*matrix(2d array) multiplication logic*/
            
            for(int i=0;i<row1;i++){
                for(int j=0;j<col2;j++){
                    arr3[i][j]=0;
                    for(int k=0;k<col1;k++){
                        arr3[i][j] = arr3[i][j] + arr1[i][k]*arr2[k][j];
                    }
                }
            }

        /*printing array elements*/
        System.out.println("\nResultant Array elements are : ");
        /*
        for(int i=0;i<row1;i++){
            for(int j=0;j<col2;j++){
                System.out.print(arr3[i][j]+"\t");
            }
            System.out.println();
        }
        */
        for(int ar[] : arr3){
            for(int element : ar){
                System.out.print(element+"\t");
            }
            System.out.println();
        }
        
        }else{
            System.out.println("Multiplication not possible");
        } 
    }
}