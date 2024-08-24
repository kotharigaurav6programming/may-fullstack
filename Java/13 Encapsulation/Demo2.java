// program showing the concept of encapsulation

import java.util.Scanner;
class Demo2{
    /* Private Data members */
    private int mpin;
    private String email,password;

    /* Public member functions | setter methods */
    public void setEmail(String email){
        this.email=email;
    }
    public void setPassword(String password){
        this.password=password;
    }
    public void setMpin(int mpin){
        this.mpin=mpin;
    }    
    /* Public member functions | getter methods */
    public String getEmail(){
        return email;
    }
    public String getPassword(){
        return password;
    }
    public int getMpin(){
        return mpin;
    }
}

class Demo{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter email id : ");
        String email = sc.next();

        System.out.println("Enter password : ");
        String password = sc.next();

        System.out.println("Enter mpin : ");
        int mpin = sc.nextInt();

        Demo2 obj = new Demo2();
        /*calling of setter methods*/
        obj.setEmail(email);
        obj.setPassword(password);
        obj.setMpin(mpin);

        //System.out.println("mpin : "+obj.mpin);

        /*calling of getter methods*/
        System.out.println("Hello "+obj.getEmail()+", Your One Time Password is "+obj.getPassword()+". And You set "+obj.getMpin()+" as your Mpin.");
    }
}
