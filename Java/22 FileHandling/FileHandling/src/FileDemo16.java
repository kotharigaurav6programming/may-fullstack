import java.io.*;
public class FileDemo16 
{
    public static void main(String[] args) throws IOException{
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(isr);
        
        System.out.println("Enter name : ");
        String name = br.readLine();
        
        System.out.println("Enter age : ");
        String age = br.readLine();
        int age1 = Integer.parseInt(br.readLine());
        
        System.out.println(name+"\t"+age+"\t"+age1);
    }       
}
