// program showing the concept of file handling

import java.io.*;
class Product implements Serializable{
    int pid;
    double price;
    String name;

    Product(int pid,double price,String name){
        this.pid=pid;
        this.price=price;
        this.name=name;
    }

    @Override
    public String toString(){
        return "["+pid+" , "+price+" , "+name+"]";
    }
}
class FileDemo10{
    public static void main(String args[]){
        Product pobj = new Product(101,567.78,"Soap");
        File fobj = new File("D://desktop//CodingThinker//Java Batch May//22 FileHandling//FileHandling In Java//src//myFolder//file.txt");

        try(FileOutputStream fout = new FileOutputStream(fobj);
        ObjectOutputStream oos = new ObjectOutputStream(fout)){    
            oos.writeObject(pobj);
            System.out.println("Data inserted successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }

        try(FileInputStream fin = new FileInputStream(fobj);
        ObjectInputStream ois = new ObjectInputStream(fin)){    
            Product p = (Product)ois.readObject();
            System.out.println("Data : "+p);
            System.out.println("\nData : "+p.toString());

            // System.out.println("Product Id : "+p.pid);
            // System.out.println("Product Price : "+p.price);
            // System.out.println("Product Name : "+p.name);
            
        }catch(IOException | ClassNotFoundException e){
            System.out.println("Exception : "+e);
        }
        
    }
}