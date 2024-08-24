import java.io.*;
public class FileDemo7 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\demofile.txt");
        File file2 = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\demofile2.txt");

        try(FileInputStream fin1 = new FileInputStream(file);
                FileInputStream fin2 = new FileInputStream(file2);
                SequenceInputStream sis = new SequenceInputStream(fin1, fin2))
        {
            while(true){
                int x = sis.read();
                if(x==-1)
                        break;
                System.out.print((char)x);
            }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }        
}
