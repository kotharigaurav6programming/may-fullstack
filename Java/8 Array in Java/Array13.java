// program to merge two array

import java.util.Scanner;
class Array13{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of first array : ");
        int size1 = sc.nextInt();
        System.out.println("Enter size of second array : ");
        int size2 = sc.nextInt();
      
        int arr1[] = new int[size1+size2];
        int arr2[] = new int[size2];

        System.out.println("Enter array elements of first array: ");
        for(int i=0;i<size1;i++){
            arr1[i] = sc.nextInt();
        }           
        System.out.println("Enter array elements of second array: ");
        for(int i=0;i<size2;i++){
            arr2[i] = sc.nextInt();
        }           

        System.out.println("First Array elements are : ");
        for(int i=0;i<size1;i++){
            System.out.print(arr1[i]+"\t");
        }
        System.out.println("\nSecond Array elements are : ");
        for(int i=0;i<size2;i++){
            System.out.print(arr2[i]+"\t");
        }
        for(int i=0;i<size2;i++,size1++){
            arr1[size1] = arr2[i];
        }
        System.out.println("\nArray elements after merging : ");
        for(int i=0;i<size1;i++){
            System.out.print(arr1[i]+"\t");
        }

    }
}