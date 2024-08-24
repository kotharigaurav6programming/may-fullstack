import java.io.*;
public class FileDemo13 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\filedemo.txt");
        try(FileReader fr = new FileReader(file);){
            while (true) {                
                int i = fr.read();
                if(i==-1)
                        break;
                System.out.print((char)i);
            }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }        
}
