// Program showing the concpet of thread

class ThreadDemo6 extends Thread{
    public void run(){
       for(int i=1;i<=10;i++){
        System.out.println("---------> "+i);
        try{
            Thread.sleep(3000);
        }catch(InterruptedException e){
            System.out.println("Exception : "+e);
        }
       } 
    }
    public static void main(String args[]){
        ThreadDemo6 obj = new ThreadDemo6();
        obj.start();
    }
}