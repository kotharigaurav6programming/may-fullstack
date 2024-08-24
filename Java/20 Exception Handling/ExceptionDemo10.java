// program showing the concept of user defined exception

import java.util.Scanner;
class InsufficientBalanceException extends Exception{
    InsufficientBalanceException(String message){
        super(message);
    }
}
class Withdraw{
    int bal;
    Withdraw(int bal){
        this.bal=bal;
    }
    void getWithDraw() throws InsufficientBalanceException{
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter withdrawal amount : ");
        int wamt = sc.nextInt();

        if(wamt>bal){
            throw new InsufficientBalanceException("Low Balance");
        }else{
            System.out.println("Balance : "+bal);
            System.out.println("Withdrawal amount : "+wamt);
            System.out.println("Remaining Balance : "+(bal-wamt));
        }
    }
}
class ExceptionDemo10
{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Balance : ");
        int bal = sc.nextInt();

        Withdraw obj = new Withdraw(bal);
        try{
            obj.getWithDraw();
        }catch(InsufficientBalanceException e){
            System.out.println("Exception : "+e);
        }
    }
}