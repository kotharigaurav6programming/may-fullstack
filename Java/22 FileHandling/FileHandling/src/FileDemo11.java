import java.io.*;
class Product1 implements Serializable{
    int pid;
    String pname;
    double price;

    public Product1(int pid, String pname, double price) {
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }
    
    @Override
    public String toString(){
        return pid+"\t"+pname+"\t"+price;
    }
}
public class FileDemo11 
{
    public static void main(String[] args) {
        File file = new File("C:\\Users\\Gaurav.Kothari\\Documents\\NetBeansProjects\\FileHandling\\myfolder\\filedemo.txt");
        Product1 pobj[] = new Product1[3];
        
        pobj[0] = new Product1(101,"Fairness Cream",32.23);
        pobj[1] = new Product1(102,"Oil",56.67);
        pobj[2] = new Product1(103,"Soap",88.77);
        
        try(FileOutputStream fout = new FileOutputStream(file);
                ObjectOutputStream oout = new ObjectOutputStream(fout)){
                oout.writeObject(pobj);
                System.out.println("Data inserted successfully");
                
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
        
        try(FileInputStream fin = new FileInputStream(file);
                ObjectInputStream oin = new ObjectInputStream(fin)){
                
                Product1 obj[] = (Product1[])oin.readObject();
                for(Product1 p : obj){
                    System.out.println(p);
                }
        }catch(IOException | ClassNotFoundException e){
            System.out.println("Exception : "+e);
        }
    }        
}
