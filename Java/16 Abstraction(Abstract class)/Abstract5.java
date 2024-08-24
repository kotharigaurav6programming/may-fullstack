// program showing the concept of abstract class

import java.util.Scanner;
abstract class Series{
    abstract void series(int initialLimit,int finalLimit);
}
class EvenSeries extends Series{
    void series(int initialLimit,int finalLimit){
        System.out.println("EVEN NUMBER SERIES : ");
        for(int i = initialLimit;i<=finalLimit;i++){
            if(i%2==0)
                System.out.print(i+"\t");
        }
    }
}
class OddSeries extends Series{
    void series(int initialLimit,int finalLimit){
        System.out.println("\nODD NUMBER SERIES : ");
        for(int i = initialLimit;i<=finalLimit;i++){
            if(i%2!=0)
                System.out.print(i+"\t");
        }
    }
}

class Abstract5{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter initial and final limit : ");
        int initialLimit = sc.nextInt();
        int finalLimit = sc.nextInt();
        
        Series instance;
        instance = new EvenSeries();
        instance.series(initialLimit,finalLimit);

        instance = new OddSeries();
        instance.series(initialLimit,finalLimit);
    }
}