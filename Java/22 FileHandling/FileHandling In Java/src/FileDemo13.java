// program showing the concept of file handling
import java.io.*;
class FileDemo13{
    public static void main(String args[]){
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
        try{
            System.out.println("Enter Name : ");
            String name = br.readLine();

            System.out.println("Enter Age : ");
            int age = Integer.parseInt(br.readLine());

            System.out.println("Name : "+name+"\nAge : "+age);
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }        
    }
}