// example showing the concept of Inter thread communication

class Customer{
    int bal;
    Customer(int bal){
        this.bal=bal;
    }
    synchronized void withDraw(int wamt){
        System.out.println("Comes to Withdraw money...");
        if(wamt>bal){
            System.out.println("Low Balance | Waiting for Deposition of Amount");
            try{ 
                wait();
            }catch(InterruptedException e){
                System.out.println("Exception : "+e);
            }
        }
        System.out.println("Balance : "+bal);
        System.out.println("Withdrawal Amount : "+wamt);
        System.out.println("Balance : "+(bal-wamt));
    }
    synchronized void deposite(int damt){
        System.out.println("Comes to deposite money...");
        this.bal+=damt;
        System.out.println("Amount deposited");
        notify();
    }
}
class ThreadDemo14{
    public static void main(String args[]){
        Customer cobj = new Customer(10000);
        new Thread(){
            @Override
            public void run(){
                cobj.withDraw(12000);
            }
        }.start();
        new Thread(){
            @Override
            public void run(){
                cobj.deposite(15000);
            }
        }.start();
    }
}