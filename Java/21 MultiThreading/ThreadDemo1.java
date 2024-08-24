// Program showing the concpet of thread

class ThreadDemo1{
    public static void main(String args[]){
        System.out.println("Current Thread : "+Thread.currentThread());
        System.out.println("Current Thread : "+Thread.currentThread().setName("MyThread"));
        System.out.println("Current Thread : "+Thread.currentThread());
    }
}