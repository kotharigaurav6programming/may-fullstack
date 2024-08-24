// program to find out maximum element from an array 

import java.util.Scanner;
class Array9{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of an array : ");
        int size = sc.nextInt();
        int arr[] = new int[size];
        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }                
        int max=arr[0];
        System.out.println("Array elements are : ");
        for(int i=0;i<size;i++){
            System.out.print(arr[i]+"\t");
            if(max<arr[i])
                max = arr[i];
        }
        System.out.println("\nMaximum element : "+max);
    }
}