import java.io.*;
public class FileDemo14 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\filedemo.txt");
        try(FileWriter fw = new FileWriter(file);
                BufferedWriter bw = new BufferedWriter(fw)){
                bw.write("This is statement 1");
                    bw.newLine();
                bw.write("This is statement 2");
                    bw.newLine();
                bw.write("This is statement 3");
                System.out.println("Data inserted successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }        
}
