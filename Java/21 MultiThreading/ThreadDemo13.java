// program showing the concept of Thread Synchronization (static Synchronization)

class First{
    /*shared resources*/
    synchronized static void display(String name){
        System.out.print(" [ ");
            try{
                 Thread.sleep(1000);   
            }catch(InterruptedException e){
                System.out.println("Exception : "+e);
            }
        System.out.print(name);
            try{
                 Thread.sleep(1000);   
            }catch(InterruptedException e){
                System.out.println("Exception : "+e);
            }
        System.out.println(" ] ");
    }
}
/*class to create thread object*/
class Second extends Thread{
    String name;
    Second(String name){
        this.name= name;
        start();
    }
    public void run(){
        First.display(name);
    }
}

/*Main Class*/
class ThreadDemo13{
    public static void main(String args[]){
        Second s1 = new Second("Andrew");
        Second s2 = new Second("Simon");
        Second s3 = new Second("Jackson");
    }
}

/*
first line    --->   [ Andrew ]
second line   --->   [ Simon ]
third line    --->   [ Jackson ]
*/