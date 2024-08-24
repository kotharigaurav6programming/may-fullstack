// program showing the concept of file handling
import java.io.*;
class FileDemo12{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file.txt");
        try(FileWriter fw = new FileWriter(fobj);
        BufferedWriter br = new BufferedWriter(fw);){
            br.write("First Statement");
            br.newLine();
            br.write("Second Statement");
            br.newLine();
            br.write("Third Statement");
            System.out.println("Data inserted successfully");    
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }

        System.out.println("\nData from file : \n");
        try(FileReader fr = new FileReader(fobj);
        BufferedReader br = new BufferedReader(fr)){
            while(true){
                String x = br.readLine();
                if(x==null)
                    break;
                System.out.println(x);
            }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}