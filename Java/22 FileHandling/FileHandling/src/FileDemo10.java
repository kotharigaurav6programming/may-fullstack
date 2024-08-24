import java.io.*;
class Product implements Serializable{
    int pid;
    String pname;
    double price;

    public Product(int pid, String pname, double price) {
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }
    
    @Override
    public String toString(){
        return pid+"\t"+pname+"\t"+price;
    }
}
public class FileDemo10 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\filedemo.txt");
        Product pobj = new Product(101,"Fairness Cream",56.67);
        
        try(FileOutputStream fout = new FileOutputStream(file);
                ObjectOutputStream oout = new ObjectOutputStream(fout)){
                oout.writeObject(pobj);
                System.out.println("Data inserted successfully");
                
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
        
        try(FileInputStream fin = new FileInputStream(file);
                ObjectInputStream oin = new ObjectInputStream(fin)){
                
                Product obj = (Product)oin.readObject();
                System.out.println(obj);
                
        }catch(IOException | ClassNotFoundException e){
            System.out.println("Exception : "+e);
        }
    }        
}
