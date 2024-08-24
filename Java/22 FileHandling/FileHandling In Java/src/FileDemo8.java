import java.io.*;

public class FileDemo8{
    public static void main(String[] args) {
        File obj = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file.txt");

        try(FileOutputStream fout = new FileOutputStream(obj);
            DataOutputStream dout = new DataOutputStream(fout)){
             dout.writeInt(1000);
             dout.writeDouble(10.9000);
             dout.writeUTF("Hello User");
             dout.writeBoolean(true);
             dout.writeChar('C');   
            System.out.println("Data inserted successfully");    
         }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}