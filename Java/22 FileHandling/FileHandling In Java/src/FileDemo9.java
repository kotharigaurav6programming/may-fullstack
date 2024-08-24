import java.io.*;

public class FileDemo9{
    public static void main(String[] args) {
        File obj = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file.txt");

        try(FileInputStream fin = new FileInputStream(obj);
        DataInputStream din = new DataInputStream(fin)){
          System.out.println("Integer : "+din.readInt());  
          System.out.println("Double : "+din.readDouble());  
          System.out.println("UTF(String) : "+din.readUTF());  
          System.out.println("Boolean : "+din.readBoolean());  
          System.out.println("Character : "+din.readChar());  

         }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}