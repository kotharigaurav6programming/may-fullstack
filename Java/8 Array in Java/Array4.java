// program showing the concept of array in java

class Array4{
    public static void main(String args[]){
        int arr[] = new int[5];
        for(int ar : arr){
            System.out.print(ar+"\t");
        }
        System.out.println();
        double arr1[] = new double[5];
        for(double ar : arr1){
            System.out.print(ar+"\t");
        }
        System.out.println();
        boolean arr2[] = new boolean[5];
        for(boolean ar : arr2){
            System.out.print(ar+"\t");
        }
        System.out.println();
        String arr3[] = new String[5];
        for(String ar : arr3){
            System.out.print(ar+"\t");
        }        
    }
}