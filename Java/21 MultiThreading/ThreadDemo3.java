// Program showing the concpet of thread

class ThreadDemo3 extends Thread{
    public void run(){
        System.out.println("Run method executes");
        System.out.println("Current Thread : "+Thread.currentThread());
    }
    public static void main(String args[]){
        ThreadDemo3 obj = new ThreadDemo3();
        obj.setName("MyThread");
//        obj.setPriority(Thread.MIN_PRIORITY);
          obj.setPriority(8);
          System.out.println("Thread Name : "+obj.getName());
          System.out.println("Thread Priority : "+obj.getPriority());
          System.out.println("Thread Id : "+obj.getId());
        obj.start();
        //obj.start();
    }
}