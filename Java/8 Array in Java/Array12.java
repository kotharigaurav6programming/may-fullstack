// program to check whether entered array is a palindrome or not

import java.util.Scanner;
class Array12{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of an array : ");
        int size = sc.nextInt();
        int arr[] = new int[size];
        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }           
        System.out.println("Array elements are : ");
        for(int i=0;i<size;i++){
            System.out.print(arr[i]+"\t");
        }
        boolean status = true;
        for(int i=0;i<size/2;i++){
            if(arr[i]!=arr[size-1-i]){
                System.out.println("Array is not palindrome");
                status = false;    
                break;
            }
        }
        if(status)
            System.out.println("Array is palindrome");
    }
}