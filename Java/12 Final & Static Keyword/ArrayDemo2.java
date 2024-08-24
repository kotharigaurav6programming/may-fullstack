// program showing the concept of Array of object

import java.util.Scanner;
class Product{
    String pid;
    double price;

    /*get data from user*/
    void getData(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Product Id : ");
        pid = sc.nextLine();

        System.out.println("Enter Product Price : ");
        price = sc.nextDouble();
    }

    /*for displaying data*/
    void displayData(){
        System.out.println("\nProduct Id : "+pid);
        System.out.println("Product Price : "+price);
    }
}
class ArrayDemo2{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no. of Products : ");
        int num = sc.nextInt();

        Product product[] = new Product[num];
        for(int i=0;i<product.length;i++){
            product[i] = new Product();
            product[i].getData();
        }
        for(Product proObject : product){
            proObject.displayData();
        }
    }
}