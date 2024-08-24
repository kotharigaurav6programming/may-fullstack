import java.io.File;
public class FileDemo1{
    public static void main(String[] args) {
        File fobj = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//MyFolder");
        if(!fobj.exists()){
            fobj.mkdir();
            System.out.println("Folder created successfully");
        }
        else{
            System.out.println("Folder already exists");
        }
    }
}