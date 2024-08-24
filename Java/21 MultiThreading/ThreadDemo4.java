// Program showing the concpet of thread

class ThreadDemo4 extends Thread{
    public void run(){
        System.out.println("Current Thread : "+Thread.currentThread());
    }
    public static void main(String args[]){
        ThreadDemo4 obj1 = new ThreadDemo4();
        ThreadDemo4 obj2 = new ThreadDemo4();
        ThreadDemo4 obj3 = new ThreadDemo4();
        obj1.setName("MyThread-One");
        obj2.setName("MyThread-Two");
        obj3.setName("MyThread-Three");
        
        obj1.setPriority(Thread.MIN_PRIORITY);
        obj2.setPriority(Thread.NORM_PRIORITY);
        obj3.setPriority(Thread.MAX_PRIORITY);
        
        obj1.start();
        obj2.start();
        obj3.start();
    }
}