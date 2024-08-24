import java.io.File;
public class FileDemo1 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder");
        if(!file.exists()){
            file.mkdir();
            System.out.println("Folder created successfully");
        }
        else{
            System.out.println("Already Exist");
        }
            System.out.println("Absolute Path : "+file.getAbsolutePath());
            System.out.println("Name : "+file.getName());
            System.out.println("Parent name : "+file.getParent());
            System.out.println("Path : "+file.getPath());
            System.out.println("Class name : "+file.getClass());
            System.out.println("Length : "+file.length());  
            System.out.println("read : "+file.canRead());
            System.out.println("write : "+file.canWrite());
    }        
}
