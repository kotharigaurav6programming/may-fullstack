import java.io.*;
import java.util.Scanner;
public class FileDemo6 
{
    public static void main(String[] args) {
        File file1 = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\demofile1.txt");
        File file2 = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\demofile2.txt");

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter string : ");
        String str = sc.nextLine();
        try(FileOutputStream fout1 = new FileOutputStream(file1);
                FileOutputStream fout2 = new FileOutputStream(file2);
                ByteArrayOutputStream bout = new ByteArrayOutputStream())
        {
        byte bt[] = str.getBytes();
        bout.write(bt);
        bout.writeTo(bout);
        bout.writeTo(fout2);
        
            System.out.println("Data inserted Successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }        
}
