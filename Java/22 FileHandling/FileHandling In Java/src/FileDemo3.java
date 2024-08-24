import java.io.File;
import java.io.IOException;
public class FileDemo3{
    public static void main(String[] args) {
        try{
            File obj = new File("D://desktop//CodingThinker//Java Batch May//2. Basic Programs");
            File frr[] = obj.listFiles();
            /*
            for(File fobj : frr){
                System.out.println("File name : "+fobj.getName()+"\tPath : "+fobj.getPath());
            }
            */
            for(File fobj : frr){
             if(fobj.getName().endsWith(".java"))
                System.out.println("File name : "+fobj.getName()+"\tPath : "+fobj.getPath());
            }
        }catch(Exception e){
            System.out.println("Exception : "+e);
        }
    }
}