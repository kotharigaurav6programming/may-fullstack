// program showing the concept of final keyword

class Final1{
    public static void main(String args[]){
        /*
            int arr[] = new int[]{1,2,3,4,5};
            System.out.println("Array elements are : ");
            for(final int element : arr){
                System.out.print(element+"\t");
            }
        */
       /*
            final int arr[] = new int[]{1,2,3,4,5};
            arr[2] = 200;
            arr[3] = 300;
            System.out.println("Array elements are : ");
            for(int element : arr){
                System.out.print(element+"\t");
            }
        */

            final int arr[] = new int[]{1,2,3,4,5};
            int arr1[] = new int[]{100,200,300,400,500};
             arr1 = arr;
            //arr = arr1; // error
            System.out.println("Array elements are : ");
            for(int element : arr1){
                System.out.print(element+"\t");
            }

    }
}