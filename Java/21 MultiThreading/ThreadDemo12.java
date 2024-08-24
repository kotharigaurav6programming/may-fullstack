// program showing the concept of Thread Synchronization (Synchronized method)

class First{
    /*shared resources*/
    synchronized void display(String name){
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
    First obj;
    String name;
    Second(First obj,String name){
        this.obj = obj;
        this.name= name;
        start();
    }
    public void run(){
        obj.display(name);
    }
}

/*Main Class*/
class ThreadDemo12{
    public static void main(String args[]){
        First obj = new First();
        Second s1 = new Second(obj,"Andrew");
        Second s2 = new Second(obj,"Simon");
        Second s3 = new Second(obj,"Jackson");
    }
}

/*
first line    --->   [ Andrew ]
second line   --->   [ Simon ]
third line    --->   [ Jackson ]
*/