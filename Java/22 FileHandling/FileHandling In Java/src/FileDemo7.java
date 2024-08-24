import java.io.*;

public class FileDemo7{
    public static void main(String[] args) {
        File obj1 = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file1.txt");

        File obj2 = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file2.txt");

        try(FileInputStream fin1 = new FileInputStream(obj1);
        FileInputStream fin2 = new FileInputStream(obj2);
        SequenceInputStream fin = new SequenceInputStream(fin1,fin2)){
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