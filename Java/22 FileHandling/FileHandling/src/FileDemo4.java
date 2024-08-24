import java.io.*;
import java.util.Scanner;
public class FileDemo4 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\demofile.txt");
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter string : ");
        String str = sc.nextLine();
        try(FileOutputStream fout = new FileOutputStream(file,true);)
        {
        byte bt[] = str.getBytes();
        fout.write(bt);
            System.out.println("Data inserted Successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }        
}
