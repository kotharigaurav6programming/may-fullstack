// program showing the concept of Array of object

import java.util.Scanner;
class Product{
    String pid;
    double price;
    
    /*parameterized constructor*/
    Product(String pid,double price){
        this.pid=pid;
        this.price=price;    
    }

    /*for displaying data*/
    void displayData(){
        System.out.println("\nProduct Id : "+pid);
        System.out.println("Product Price : "+price);
    }
}
class ArrayDemo1{
    public static void main(String args[]){
        Product product[] = new Product[2];

        System.out.println("Reference array : "+product[0]+"\t"+product[1]);
            product[0] = new Product("PROD1234",890.34);
            product[1] = new Product("PROD2234",1292.00);
        System.out.println("Array of Object : "+product[0]+"\t"+product[1]);

        //    product[0].displayData();
        //    product[1].displayData();
        for(Product proObject : product){
            proObject.displayData();
        }
    }
}