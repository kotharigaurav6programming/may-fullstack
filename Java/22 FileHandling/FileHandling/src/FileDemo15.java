import java.io.*;
public class FileDemo15 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\filedemo.txt");
        try(FileReader fr = new FileReader(file);
                BufferedReader br = new BufferedReader(fr);){
            while (true) {             
                String data = br.readLine();
                if(data==null)
                        break;
                System.out.println(data);
            }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }       
}
