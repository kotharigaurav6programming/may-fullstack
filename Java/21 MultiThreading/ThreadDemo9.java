// Program showing the concpet of thread

/*
    interface Runnable{
        void run();
    }
    class Demo implements Runnable{
        @Override
        public void run(){}
        psvm(){}
    }
*/

class ThreadDemo9 implements Runnable{
    @Override
    public void run(){
        System.out.println("run method executes");
    }
    public static void main(String args[]){
       /*
        ThreadDemo9 obj = new ThreadDemo9();
        Thread th = new Thread(obj);
        th.start();
        */

       /*
        Thread th = new Thread(new ThreadDemo9());
        th.start();
        */

        new Thread(new ThreadDemo9()).start();

    }
}