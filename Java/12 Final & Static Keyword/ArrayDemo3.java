// program showing the concept of Jagged Array

class ArrayDemo3{
    public static void main(String args[]){
       int arr[][]=new int[5][];

       arr[0] = new int[]{1,2,3,4};
       arr[1] = new int[]{4,24};
       arr[2] = new int[]{1,2,3,4,5,6,7,8};
       arr[3] = new int[]{1,3,4,3,2};
       arr[4] = new int[]{1,2}; 
        System.out.println("Array elements are : ");
        for(int ar[] : arr){
            for(int element : ar){
                System.out.print(element+"\t");
            }
            System.out.println();
        }
    }
}