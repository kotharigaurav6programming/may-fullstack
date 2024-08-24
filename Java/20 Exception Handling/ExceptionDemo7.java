// program showing the concept of Exception Handling
// NumberFormatException

class ExceptionDemo7{
    public static void main(String args[]){
        int valid=0,invalid=0;
        for(int i=0;i<args.length;i++){
            try{
                Integer.parseInt(args[i]);
                valid++;
            }catch(NumberFormatException e){
                invalid++;
            }
        }
        System.out.println("Invalid : "+invalid+"\nValid : "+valid);
    }
}