import java.io.*;
import java.util.Scanner;

public class FileDemo4{
    public static void main(String[] args) {
        File obj = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file.txt");

        try(FileOutputStream fout = new FileOutputStream(obj,true)){
            Scanner sc = new Scanner(System.in);

            System.out.println("Enter Content : ");
            String str = sc.nextLine();

            byte bt[] = str.getBytes();
            fout.write(bt);
            //fout.close();
            System.out.println("Data inserted successfully");    
         }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}