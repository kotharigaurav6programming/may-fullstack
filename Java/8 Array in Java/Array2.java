// program showing the concept of array in java

class Array2{
    public static void main(String args[]){
        //int arr[] = {10,20,30,40,50,60,70,80,90,100};
        int arr[] = new int[]{10,20,30,40,50,60,70,80,90,100};

        for(int i=0;i<arr.length;i++){
            System.out.println("arr["+i+"] : "+arr[i]);
        }

    }
}