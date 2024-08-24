import java.io.*;
public class FileDemo8 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\demofile.txt");

        try(FileOutputStream fout = new FileOutputStream(file);
                DataOutputStream dos = new DataOutputStream(fout))
        {
            dos.writeInt(10000);         
            dos.writeDouble(345.567);
            dos.writeBoolean(true);
            dos.writeChar('f');
            dos.writeUTF("DataOutputStream Statement");
            
            System.out.println("Data inserted Successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }        
}
