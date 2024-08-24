// program showing the concept of array in java

class Array3{
    public static void main(String args[]){
        int arr[] = new int[5];
/*
        for(int i=0;i<arr.length;i++){
            System.out.println("arr["+i+"] : "+arr[i]);
        }
*/
/*
    syntax : 
        for(<datatype> <variable_name> : array | collection){
            sop(variable_name);
        }
*/

        for(int ar : arr){
            System.out.print(ar+"\t");
        }
    }
}