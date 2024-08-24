// Program showing the concpet of thread

class ThreadDemo5 extends Thread{
    public void run(){
        if(Thread.currentThread().isDaemon())
            System.out.println("Daemon Thread");
        else
            System.out.println("Not a Daemon Thread");
    }
    public static void main(String args[]){
        ThreadDemo5 obj1 = new ThreadDemo5();
        ThreadDemo5 obj2 = new ThreadDemo5();
        ThreadDemo5 obj3 = new ThreadDemo5();
        obj1.setDaemon(true);
        obj2.setDaemon(false);
        obj3.setDaemon(true); 
        
        obj1.start();
        obj2.start();
        obj3.start();
    }
}