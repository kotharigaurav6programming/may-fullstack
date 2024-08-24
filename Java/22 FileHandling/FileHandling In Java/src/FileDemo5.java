import java.io.*;

public class FileDemo5{
    public static void main(String[] args) {
        File obj = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file.txt");

        try(FileInputStream fin = new FileInputStream(obj)){
            while(true){
                int x = fin.read();
                if(x==-1)
                    break;
                System.out.print((char)x);
            }
         }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}