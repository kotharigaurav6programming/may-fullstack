/*
 program showing the concept of conditional operator
 (condition ? exp1 : exp2)
*/

class Demo9{
    public static void main(String args[]){
        int a=5,b=2;
        /*
            int res = (a>b) ? a : b;
            System.out.println(res+" is greater");
        */
        String res = (a>b) ? a+" is greater" : b+" is greater";
        System.out.println(res);
    }
}