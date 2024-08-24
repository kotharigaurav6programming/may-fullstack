import java.io.*;
public class FileDemo5 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\demofile.txt");
        try(FileInputStream fin = new FileInputStream(file)){
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
