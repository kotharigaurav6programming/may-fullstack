// program showing the concept of switch control statement
import java.util.Scanner;
class Switch6{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter color : ");
        String color = sc.next();
        color = color.toLowerCase();
        System.out.println("color : "+color);
        String data;
        switch(color){
            case "red" : data = "Red Color";
                            break;
            case "green" : data = "Green Color";
                            break;
            default : data = "Invalid color";
                            break;
        }
        System.out.println(data);
    }
}
