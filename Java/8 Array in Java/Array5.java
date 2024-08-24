// program showing the concept of array in java

import java.util.Scanner;
class Array5{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array : ");
        int size = sc.nextInt();
        // declaration of array
        int arr[] = new int[size];
        for(int i=0;i<size;i++){
            System.out.println("Enter "+(i+1)+" values : ");
            arr[i] = sc.nextInt();
        }
        for(int i=0;i<arr.length;i++){
            System.out.println("arr["+i+"] : "+arr[i]);
        }
    }
}