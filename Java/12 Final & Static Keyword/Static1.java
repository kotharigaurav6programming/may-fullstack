// program showing the concept of static keyword

class Static1{
    static{
        System.out.println("statement 1");
    }
    public static void main(String args[]){
        System.out.println("statement 2");
    }
    static{
        System.out.println("statement 3");
    }    
}