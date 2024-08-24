// program to search an element from an array (Linear search)

import java.util.Scanner;
class Array14{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array : ");
        int size = sc.nextInt();

        int arr[] = new int[size]; 
        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }

        System.out.println("Enter element to be search : ");
        int element = sc.nextInt();
        
        boolean status = true;
        for(int i=0;i<size;i++){
           System.out.println("loop runs "+(i+1)+" times");    
            if(element==arr[i]){
                System.out.println("Element found at position : "+(i+1));
                status = false;
                break;
            }
        }
        if(status)
            System.out.println("Element Not Found");
    }
}