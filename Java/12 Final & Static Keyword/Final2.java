// program showing the concept of final keyword

import java.util.Scanner;
class Final2{
    final int a;
    Final2(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter value : ");
        a = sc.nextInt();
    }
    public static void main(String args[]){
        Final2 obj = new Final2();
        System.out.println("value of a : "+obj.a);
    }
}