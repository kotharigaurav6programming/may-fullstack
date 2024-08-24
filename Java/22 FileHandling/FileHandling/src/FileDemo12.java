import java.io.*;
public class FileDemo12 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\filedemo.txt");
        try(FileWriter fw = new FileWriter(file,true);){
                fw.write("This is statement 1\n");
                fw.write("This is statement 2\n");
                fw.write("This is statement 3\n");
                System.out.println("Data inserted successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }        
}
