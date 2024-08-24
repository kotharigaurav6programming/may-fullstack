// program showing the concept of switch control statement
// output : error
class Switch2{
    public static void main(String args[]){
        switch('a')
        {
            case 'a' : System.out.println("case 1 executes");
                        break;
            case 97 : System.out.println("case 2 executes");
                        break;
            default : System.out.println("default case executes");
                        break;
        }
    }
}