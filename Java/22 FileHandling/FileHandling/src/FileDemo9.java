import java.io.*;
public class FileDemo9 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\demofile.txt");

        try(FileInputStream fin = new FileInputStream(file);
                DataInputStream dis = new DataInputStream(fin))
        {
            System.out.println("Integer value : "+dis.readInt());
            System.out.println("Double value : "+dis.readDouble());
            System.out.println("Boolean value : "+dis.readBoolean());
            System.out.println("Character value : "+dis.readChar());
            System.out.println("String value : "+dis.readUTF());
            
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }        
}
