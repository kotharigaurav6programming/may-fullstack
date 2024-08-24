import java.io.File;
import java.io.IOException;
public class FileDemo2{
    public static void main(String[] args) {
        try{
            File fobj = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//MyFolder//file1.txt");
        if(!fobj.exists()){
            fobj.createNewFile();
            System.out.println("File created successfully");
        }
        else{
            System.out.println("File already exists");
        }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}