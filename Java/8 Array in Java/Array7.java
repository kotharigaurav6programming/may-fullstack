// program to add all the elements of an array

import java.util.Scanner;
class Array7{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of an array : ");
        int size = sc.nextInt();
        int sum=0;
        int arr[] = new int[size];
        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }                
        System.out.println("Array elements are : ");
        for(int i=0;i<size;i++){
            sum = sum + arr[i];
            System.out.print(arr[i]+"\t");
        }
        System.out.println("\nSum : "+sum);
    }
}