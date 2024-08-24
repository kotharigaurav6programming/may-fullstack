// program showing the concept of Command line argument

class Demo6{
    public static void main(String...args){
        System.out.println("No. of argumments : "+args.length);
        System.out.println("Arguments given to main method at run time : ");
        int sum=0;
        for(String element : args){
            System.out.print(element+"\t");
            sum = sum + Integer.parseInt(element);
        }
        System.out.println("\nSum : "+sum);
    }
}