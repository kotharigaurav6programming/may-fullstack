// program showing the concept of Command line argument

class Demo5{
    public static void main(String...args){
        System.out.println("No. of argumments : "+args.length);
        System.out.println("Arguments given to main method at run time : ");
        for(String element : args){
            System.out.print(element+"\t");
        }
    }
}