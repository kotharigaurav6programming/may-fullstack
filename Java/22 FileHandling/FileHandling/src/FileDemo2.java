import java.io.File;
import java.io.IOException;
public class FileDemo2 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\myfile1.txt");
        try{
        if(!file.exists()){
            file.createNewFile();
            System.out.println("File created successfully");
        }
        else{
            System.out.println("Already Exist");
        }
        }
        catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }        
}
