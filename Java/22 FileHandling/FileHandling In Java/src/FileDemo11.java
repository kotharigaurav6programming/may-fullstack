// program showing the concept of file handling
import java.io.*;
class FileDemo11{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file.txt");
        try(FileWriter fw = new FileWriter(fobj)){
            fw.write("First Statement\n");
            fw.write("Second Statement\n");
            fw.write("Third Statement\n");
            System.out.println("Data inserted successfully");    
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }

        System.out.println("Data from file : ");
        try(FileReader fr = new FileReader(fobj)){
            while(true){
                int x = fr.read();
                if(x==-1)
                    break;
                System.out.print((char)x);
            }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}