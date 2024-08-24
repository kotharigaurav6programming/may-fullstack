// program to find out no.of even elements in an array 

import java.util.Scanner;
class Array10{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of an array : ");
        int size = sc.nextInt();
        int arr[] = new int[size];
        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }                
        int count=0;
        System.out.println("Array elements are : ");
        for(int i=0;i<size;i++){
            System.out.print(arr[i]+"\t");
            if(arr[i]%2==0)
                count++;
        }
        System.out.println("\nNumber of even elements : "+count);
    }
}