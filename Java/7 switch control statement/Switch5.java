// program showing the concept of switch control statement
import java.util.Scanner;
class Switch5{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter color : ");
        String color = sc.next();

        switch(color){
            case "RED" : 
            case "Red" :  
            case "red" : System.out.println("Red Color");
                            break;
            case "GREEN" : 
            case "Green" :  
            case "green" : System.out.println("Green Color");
                            break;
            default : System.out.println("Invalid color");
                            break;
        }
    }
}
