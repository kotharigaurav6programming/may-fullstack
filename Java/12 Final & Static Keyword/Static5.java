// program showing the concept of static keyword

import java.util.Scanner;
class Product{
    String pid;
    double price;
    
    /*static data member*/
    static String brand;
    
    /* static member function */
    static void getBrandName(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Brand Name : ");
        brand = sc.nextLine();
    }

    /*parameterized constructor*/
    Product(String pid,double price){
        this.pid=pid;
        this.price=price;    
    }

    /*for displaying data*/
    void displayData(){
        System.out.println("\nProduct Id : "+pid);
        System.out.println("Product Price : "+price);
        System.out.println("Product Brand Name : "+brand);
    }
}
class Static5{
    public static void main(String args[]){
        Product.getBrandName();
        Product obj1 = new Product("PROD1234",890.34);
        Product obj2 = new Product("PROD2234",1292.00);
        obj1.displayData();
        obj2.displayData();
    }
}