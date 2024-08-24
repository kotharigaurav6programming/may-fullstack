import java.io.*;
import java.util.Scanner;

public class FileDemo6{
    public static void main(String[] args) {
        File obj1 = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file1.txt");

        File obj2 = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file2.txt");

        try(FileOutputStream fout1 = new FileOutputStream(obj1);
        FileOutputStream fout2 = new FileOutputStream(obj2);
        ByteArrayOutputStream bout = new ByteArrayOutputStream()){
            Scanner sc = new Scanner(System.in);

            System.out.println("Enter Content : ");
            String str = sc.nextLine();

            byte bt[] = str.getBytes();
            bout.write(bt);
            bout.writeTo(fout1);
            bout.writeTo(fout2);
            //fout.close();
            System.out.println("Data inserted successfully");    
         }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}