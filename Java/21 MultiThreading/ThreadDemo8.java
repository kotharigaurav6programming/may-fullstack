// Program showing the concpet of thread

class ThreadDemo8 extends Thread{
    public void run(){
      System.out.println("Thread name : "+Thread.currentThread()+"\t Alive Status : "+Thread.currentThread().isAlive()); 
      try{ Thread.sleep(1000);}catch(InterruptedException e){}  
    }
    public static void main(String args[]){
        ThreadDemo8 obj1 = new ThreadDemo8();
        ThreadDemo8 obj2 = new ThreadDemo8();
        ThreadDemo8 obj3 = new ThreadDemo8();
        ThreadDemo8 obj4 = new ThreadDemo8();
        obj1.start();
      try{ obj1.join();}catch(InterruptedException e){}  
  
        obj2.start();
        obj3.start();
        obj4.start();

        System.out.println("Thread name : "+obj1.getName()+" \tAlive Status : "+obj1.isAlive());
        System.out.println("Thread name : "+obj2.getName()+" \tAlive Status : "+obj2.isAlive());
        System.out.println("Thread name : "+obj3.getName()+" \tAlive Status : "+obj3.isAlive());
        System.out.println("Thread name : "+obj4.getName()+" \tAlive Status : "+obj4.isAlive());

    }
}