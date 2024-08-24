import java.io.File;
public class FileDemo3 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder");
        File f[] = file.listFiles();
        for(File ff : f){
            System.out.println(ff.getName()+"\t"+ff.getPath());
        }
        System.out.println("-------------------------------------------");
        for(File ff : f){
            if(ff.getName().contains(".txt"))
                 System.out.println(ff.getName()+"\t"+ff.getPath());
        }
    }        
}
